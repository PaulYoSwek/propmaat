from pathlib import Path

import cv2
import numpy as np
from PIL import Image

SRC = Path(
    r"C:\Users\Paulg\.cursor\projects\d-Projects-PandFlow\assets\c__Users_Paulg_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_PropMaatLogo-4eb413f8-26a1-41b4-a733-700c69a4ed1.png"
)
# typo guard — use the real filename from the conversation
SRC = Path(
    r"C:\Users\Paulg\.cursor\projects\d-Projects-PandFlow\assets\c__Users_Paulg_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_PropMaatLogo-4eb413f8-26a1-41b4-a733-700c69a4aed1.png"
)
OUT = Path(r"D:\Projects\PandFlow\public\brand")


def mask_to_svg_path(mask: np.ndarray, epsilon_ratio: float = 0.0012) -> str:
    mask_u8 = (mask.astype(np.uint8)) * 255
    contours, hierarchy = cv2.findContours(
        mask_u8, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE
    )
    if hierarchy is None:
        return ""
    parts: list[str] = []
    hierarchy = hierarchy[0]
    for i, contour in enumerate(contours):
        if len(contour) < 3:
            continue
        peri = cv2.arcLength(contour, True)
        approx = cv2.approxPolyDP(contour, max(0.6, peri * epsilon_ratio), True)
        if len(approx) < 3:
            continue
        cmds = [f"M{approx[0][0][0]:.1f} {approx[0][0][1]:.1f}"]
        for pt in approx[1:]:
            cmds.append(f"L{pt[0][0]:.1f} {pt[0][1]:.1f}")
        cmds.append("Z")
        parts.append(" ".join(cmds))
        _ = hierarchy[i]
    return " ".join(parts)


def main() -> None:
    src = Image.open(SRC).convert("RGB")
    arr = np.array(src)
    r = arr[:, :, 0].astype(int)
    g = arr[:, :, 1].astype(int)
    b = arr[:, :, 2].astype(int)
    is_black = (r < 22) & (g < 22) & (b < 22)
    is_red = (r > 120) & (r > g + 35) & (r > b + 35)
    is_letter = ~is_black & ~is_red
    h, w = arr.shape[:2]
    print("size", w, h)
    print("letter mean", arr[is_letter].mean(axis=0))
    print("red mean", arr[is_red].mean(axis=0))

    ys, xs = np.where(~is_black)
    x0, y0, x1, y1 = xs.min(), ys.min(), xs.max(), ys.max()
    print("content bbox", x0, y0, x1, y1, "w", x1 - x0 + 1, "h", y1 - y0 + 1)

    rys, rxs = np.where(is_red)
    print(
        "pin bbox",
        rxs.min(),
        rys.min(),
        rxs.max(),
        rys.max(),
        "w",
        rxs.max() - rxs.min() + 1,
        "h",
        rys.max() - rys.min() + 1,
    )
    lys, lxs = np.where(is_letter)
    print("letter bbox", lxs.min(), lys.min(), lxs.max(), lys.max())
    print("letter h", lys.max() - lys.min() + 1, "pin vs letter bottom", rys.max() - lys.max())

    pin_x0, pin_x1 = int(rxs.min()), int(rxs.max())
    left = is_letter & (np.arange(w)[None, :] < pin_x0)
    right = is_letter & (np.arange(w)[None, :] > pin_x1)
    lys2, lxs2 = np.where(left)
    rys2, rxs2 = np.where(right)
    print("left", lxs2.min(), lys2.min(), lxs2.max(), lys2.max())
    print("right", rxs2.min(), rys2.min(), rxs2.max(), rys2.max())
    print("gap L-pin", pin_x0 - lxs2.max(), "pin-R", rxs2.min() - pin_x1)

    rgba = np.zeros((h, w, 4), np.uint8)
    rgba[~is_black, :3] = arr[~is_black]
    rgba[~is_black, 3] = 255
    cropped = Image.fromarray(rgba).crop((x0, y0, x1 + 1, y1 + 1))
    cropped.save(OUT / "propmaat-lockup.png")
    print("wrote", OUT / "propmaat-lockup.png", cropped.size)

    pad = 8
    crop = lambda m: m[y0 : y1 + 1, x0 : x1 + 1]
    letter_crop = crop(is_letter)
    pin_crop = crop(is_red)
    letter_path = mask_to_svg_path(letter_crop)
    pin_path = mask_to_svg_path(pin_crop, 0.002)
    cw, ch = cropped.size
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {cw} {ch}" fill="none">
  <path fill="#2F3237" fill-rule="evenodd" d="{letter_path}"/>
  <path fill="#E31E24" fill-rule="evenodd" d="{pin_path}"/>
</svg>
'''
    (OUT / "propmaat-lockup-traced.svg").write_text(svg, encoding="utf-8")
    print("wrote traced svg", len(letter_path), len(pin_path))

    # pin hole
    pin_only = np.zeros_like(is_red, np.uint8)
    pin_only[is_red] = 255
    # hole is black inside pin bbox
    px0, py0, px1, py1 = rxs.min(), rys.min(), rxs.max(), rys.max()
    region = is_black[py0:py1 + 1, px0:px1 + 1]
    # largest black blob that's not touching edges much
    print("pin region black px", int(region.sum()))


if __name__ == "__main__":
    main()
