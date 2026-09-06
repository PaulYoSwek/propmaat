from pathlib import Path

import cv2
import numpy as np
import potrace
from PIL import Image

ROOT = Path(r"D:\Projects\PandFlow")
LOCKUP = ROOT / "public" / "brand" / "propmaat-lockup.png"
PIN_TS = ROOT / "src" / "components" / "brand" / "propmaat-official-pin.ts"
LETTERS_SVG = ROOT / "public" / "brand" / "propmaat-letters.svg"
SCALE = 4


def bitmap_path(mask: np.ndarray, scale: float) -> str:
    bmp = potrace.Bitmap(mask)
    path = bmp.trace(
        turdsize=120,
        turnpolicy=potrace.POTRACE_TURNPOLICY_MINORITY,
        alphamax=1.334,
        opticurve=True,
        opttolerance=0.8,
    )
    parts: list[str] = []
    for curve in path:
        start = curve.start_point
        parts.append(f"M{start.x / scale:.2f} {start.y / scale:.2f}")
        for segment in curve:
            if segment.is_corner:
                c, e = segment.c, segment.end_point
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
    is_letter = present & ~is_red & ((r + g + b) > 80)
    is_letter[:, 205:342] = False

    mask = (is_letter.astype(np.uint8)) * 255
    n, labels, stats, _ = cv2.connectedComponentsWithStats(mask, 8)
    keep = np.zeros_like(mask)
    for i in range(1, n):
        if stats[i, cv2.CC_STAT_AREA] >= 800:
            keep[labels == i] = 255

    h, w = keep.shape
    big = cv2.resize(keep, (w * SCALE, h * SCALE), interpolation=cv2.INTER_NEAREST)
    big = cv2.GaussianBlur(big, (7, 7), 0)
    _, big = cv2.threshold(big, 127, 255, cv2.THRESH_BINARY)
    big = cv2.morphologyEx(big, cv2.MORPH_OPEN, np.ones((5, 5), np.uint8))
    letter_path = bitmap_path(big < 128, SCALE)
    print("path", len(letter_path), "C", letter_path.count("C"), "L", letter_path.count("L"), "M", letter_path.count("M"))

    text = PIN_TS.read_text(encoding="utf-8")
    start = text.index("export const PROPMAAT_LETTER_PATH")
    text = (
        text[:start]
        + 'export const PROPMAAT_LETTER_PATH =\n  "'
        + letter_path
        + '";\n'
    )
    PIN_TS.write_text(text, encoding="utf-8")
    LETTERS_SVG.write_text(
        f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" fill="none">
  <path fill="#333438" fill-rule="evenodd" d="{letter_path}"/>
</svg>
''',
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
