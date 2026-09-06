from pathlib import Path

import cv2
import numpy as np
import potrace
from PIL import Image

ROOT = Path(r"D:\Projects\PandFlow")
LOCKUP = ROOT / "public" / "brand" / "propmaat-lockup.png"
PIN_TS = ROOT / "src" / "components" / "brand" / "propmaat-official-pin.ts"
LETTERS_SVG = ROOT / "public" / "brand" / "propmaat-letters.svg"
SCALE = 8


def bitmap_path(mask: np.ndarray, scale: float) -> str:
    bmp = potrace.Bitmap(mask)
    path = bmp.trace(
        turdsize=max(16, SCALE * 2),
        turnpolicy=potrace.POTRACE_TURNPOLICY_MINORITY,
        alphamax=1.333,
        opticurve=True,
        opttolerance=0.4,
    )
    parts: list[str] = []
    for curve in path:
        start = curve.start_point
        parts.append(f"M{start.x / scale:.2f} {start.y / scale:.2f}")
        for segment in curve:
            if segment.is_corner:
                c = segment.c
                e = segment.end_point
                parts.append(
                    f"L{c.x / scale:.2f} {c.y / scale:.2f} "
                    f"L{e.x / scale:.2f} {e.y / scale:.2f}"
                )
            else:
                c1, c2, e = segment.c1, segment.c2, segment.end_point
                parts.append(
                    f"C{c1.x / scale:.2f} {c1.y / scale:.2f} "
                    f"{c2.x / scale:.2f} {c2.y / scale:.2f} "
                    f"{e.x / scale:.2f} {e.y / scale:.2f}"
                )
        parts.append("Z")
    return " ".join(parts)


def main() -> None:
    src = np.array(Image.open(LOCKUP).convert("RGBA"))
    rgb = src[:, :, :3].astype(int)
    alpha = src[:, :, 3]
    r, g, b = rgb[:, :, 0], rgb[:, :, 1], rgb[:, :, 2]
    present = alpha > 16
    is_red = present & (r > 140) & (r > g + 50) & (r > b + 50)
    is_letter = present & np.logical_not(is_red) & (r + g + b > 60)
    pin_u8 = (is_red.astype(np.uint8)) * 255
    pin_dilated = cv2.dilate(pin_u8, np.ones((3, 3), np.uint8), iterations=1) > 0
    letters = is_letter & np.logical_not(pin_dilated)

    h, w = letters.shape
    big = cv2.resize(
        (letters.astype(np.uint8)) * 255,
        (w * SCALE, h * SCALE),
        interpolation=cv2.INTER_NEAREST,
    )
    big = cv2.GaussianBlur(big, (9, 9), 0)
    _, big = cv2.threshold(big, 127, 255, cv2.THRESH_BINARY)
    letter_path = bitmap_path(big < 128, SCALE)

    svg = PIN_TS.read_text(encoding="utf-8")
    start = svg.index("export const PROPMAAT_LETTER_PATH")
    end = svg.find("\nexport ", start + 10)
    if end == -1:
        end = len(svg)
    updated = (
        svg[:start]
        + 'export const PROPMAAT_LETTER_PATH =\n  "'
        + letter_path
        + '";\n'
    )
    if end < len(svg):
        updated += svg[end + 1 :]
    PIN_TS.write_text(updated, encoding="utf-8")

    LETTERS_SVG.write_text(
        f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" fill="none">
  <path fill="#333438" fill-rule="evenodd" d="{letter_path}"/>
</svg>
''',
        encoding="utf-8",
    )
    print("path chars", len(letter_path), "C", letter_path.count("C"), "L", letter_path.count("L"))


if __name__ == "__main__":
    main()
