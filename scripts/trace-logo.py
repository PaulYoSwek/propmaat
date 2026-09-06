from pathlib import Path

import cv2
import numpy as np
import potrace
from PIL import Image

SRC = Path(
    r"C:\Users\Paulg\.cursor\projects\d-Projects-PandFlow\assets\c__Users_Paulg_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_PropMaatLogo-4eb413f8-26a1-41b4-a733-700c69a4aed1.png"
)
OUT = Path(r"D:\Projects\PandFlow\public\brand")


def bitmap_path(mask: np.ndarray) -> str:
    bmp = potrace.Bitmap(mask)
    path = bmp.trace(
        turdsize=8,
            turnpolicy=potrace.POTRACE_TURNPOLICY_MINORITY,
        alphamax=1.0,
        opticurve=True,
        opttolerance=0.2,
    )
    parts: list[str] = []
    for curve in path:
        start = curve.start_point
        parts.append(f"M{start.x:.2f} {start.y:.2f}")
        for segment in curve:
            if segment.is_corner:
                c = segment.c
                e = segment.end_point
                parts.append(f"L{c.x:.2f} {c.y:.2f} L{e.x:.2f} {e.y:.2f}")
            else:
                c1, c2 = segment.c1, segment.c2
                e = segment.end_point
                parts.append(
                    f"C{c1.x:.2f} {c1.y:.2f} {c2.x:.2f} {c2.y:.2f} {e.x:.2f} {e.y:.2f}"
                )
        parts.append("Z")
    return " ".join(parts)


def main() -> None:
    src = np.array(Image.open(SRC).convert("RGB"))
    r = src[:, :, 0].astype(int)
    g = src[:, :, 1].astype(int)
    b = src[:, :, 2].astype(int)
    is_black = (r < 22) & (g < 22) & (b < 22)
    is_red = (r > 140) & (r > g + 50) & (r > b + 50)
    is_letter = ~is_black & ~is_red

    ys, xs = np.where(~is_black)
    x0, y0, x1, y1 = int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max())
    letters = is_letter[y0 : y1 + 1, x0 : x1 + 1]
    pin = is_red[y0 : y1 + 1, x0 : x1 + 1]
    ch, cw = letters.shape
    pin_u8 = (pin.astype(np.uint8)) * 255
    pin_dilated = cv2.dilate(pin_u8, np.ones((5, 5), np.uint8), iterations=1) > 0
    letters_clean = letters & np.logical_not(pin_dilated)

    letter_path = bitmap_path(np.logical_not(letters_clean))
    pin_path = bitmap_path(np.logical_not(pin))
    rys, rxs = np.where(pin)
    print(
        "viewBox",
        cw,
        ch,
        "pin",
        int(rxs.min()),
        int(rys.min()),
        int(rxs.max()) - int(rxs.min()) + 1,
        int(rys.max()) - int(rys.min()) + 1,
    )

    (OUT / "propmaat-lockup.svg").write_text(
        f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {cw} {ch}" fill="none">
  <path fill="#333438" fill-rule="evenodd" d="{letter_path}"/>
  <path fill="#D4292E" fill-rule="evenodd" d="{pin_path}"/>
</svg>
''',
        encoding="utf-8",
    )
    (OUT / "propmaat-letters.svg").write_text(
        f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {cw} {ch}" fill="none">
  <path fill="currentColor" fill-rule="evenodd" d="{letter_path}"/>
</svg>
''',
        encoding="utf-8",
    )
    (OUT / "propmaat-pin-official.svg").write_text(
        f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {cw} {ch}" fill="none">
  <path fill="currentColor" fill-rule="evenodd" d="{pin_path}"/>
</svg>
''',
        encoding="utf-8",
    )
    print("wrote svgs", len(letter_path), len(pin_path))


if __name__ == "__main__":
    main()
