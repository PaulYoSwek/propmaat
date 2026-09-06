from pathlib import Path

import cv2
import numpy as np
import potrace

ROOT = Path(r"D:\Projects\PandFlow")
PIN_TS = ROOT / "src" / "components" / "brand" / "propmaat-official-pin.ts"
LETTERS_SVG = ROOT / "public" / "brand" / "propmaat-letters.svg"
W, H = 889, 203
SCALE = 8


def fill_round_rect(img, x, y, w, h, r, color=255):
    x, y, w, h, r = int(x), int(y), int(w), int(h), int(r)
    cv2.rectangle(img, (x + r, y), (x + w - r, y + h), color, -1)
    cv2.rectangle(img, (x, y + r), (x + w, y + h - r), color, -1)
    cv2.circle(img, (x + r, y + r), r, color, -1)
    cv2.circle(img, (x + w - r, y + r), r, color, -1)
    cv2.circle(img, (x + r, y + h - r), r, color, -1)
    cv2.circle(img, (x + w - r, y + h - r), r, color, -1)


def fill_ellipse(img, cx, cy, rx, ry, color=255):
    cv2.ellipse(img, (int(cx), int(cy)), (int(rx), int(ry)), 0, 0, 360, color, -1)


def bitmap_path(mask: np.ndarray, scale: float) -> str:
    bmp = potrace.Bitmap(mask)
    path = bmp.trace(
        turdsize=64,
        turnpolicy=potrace.POTRACE_TURNPOLICY_MINORITY,
        alphamax=1.334,
        opticurve=True,
        opttolerance=0.2,
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


def draw_letters() -> np.ndarray:
    s = SCALE
    img = np.zeros((H * s, W * s), np.uint8)

    def R(x, y, w, h, r=0):
        fill_round_rect(img, x * s, y * s, w * s, h * s, r * s)

    def E(cx, cy, rx, ry, color=255):
        fill_ellipse(img, cx * s, cy * s, rx * s, ry * s, color)

    # P
    R(0, 0, 34, 164, 0)
    E(70, 55, 51, 55)
    E(60.5, 55, 26.5, 25, 0)
    cv2.rectangle(img, (0, 110 * s), (34 * s, 164 * s), 255, -1)

    # r
    R(131, 54, 31, 110, 0)
    E(165, 72, 34, 22)
    cv2.rectangle(img, (165 * s, 76 * s), (199 * s, 164 * s), 0, -1)
    R(131, 54, 31, 110, 0)

    # p
    R(350, 54, 30, 149, 0)
    E(400, 107, 50, 58)
    E(400, 107, 20, 32, 0)
    cv2.rectangle(img, (350 * s, 163 * s), (380 * s, 203 * s), 255, -1)

    # m — three stems + two arch ellipses
    R(460, 76, 30, 87, 0)
    R(521, 76, 29, 87, 0)
    R(580, 76, 31, 87, 0)
    E(505, 76, 45, 27)
    E(565, 76, 46, 27)
    E(505, 82, 16, 14, 0)
    E(565, 82, 16, 14, 0)
    cv2.rectangle(img, (490 * s, 88 * s), (521 * s, 163 * s), 0, -1)
    cv2.rectangle(img, (550 * s, 88 * s), (580 * s, 163 * s), 0, -1)

    # a (double-story) — two copies
    def draw_a(x):
        R(x + 64, 54, 30, 111, 0)
        E(x + 47, 72, 40, 24)
        E(x + 47, 78, 18, 12, 0)
        cv2.rectangle(img, (x * s, 82 * s), ((x + 64) * s, 100 * s), 0, -1)
        E(x + 47, 136, 47, 29)
        E(x + 47, 129, 18, 14, 0)
        R(x + 64, 100, 30, 65, 0)

    draw_a(620)
    draw_a(723)

    # t
    R(835, 21, 31, 122, 0)
    R(822, 54, 66, 22, 2)
    E(860, 150, 29, 18)
    cv2.rectangle(img, (822 * s, 130 * s), (840 * s, 164 * s), 0, -1)
    R(835, 100, 31, 40, 0)

    return img


def main() -> None:
    img = draw_letters()
    cv2.imwrite(str(ROOT / "tmp-letters" / "constructed.png"), img)
    letter_path = bitmap_path(img < 128, SCALE)
    print("path", len(letter_path), "C", letter_path.count("C"), "M", letter_path.count("M"))
    text = PIN_TS.read_text(encoding="utf-8")
    start = text.index("export const PROPMAAT_LETTER_PATH")
    PIN_TS.write_text(
        text[:start]
        + 'export const PROPMAAT_LETTER_PATH =\n  "'
        + letter_path
        + '";\n',
        encoding="utf-8",
    )
    LETTERS_SVG.write_text(
        f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" fill="none">
  <path fill="#333438" fill-rule="evenodd" d="{letter_path}"/>
</svg>
''',
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
