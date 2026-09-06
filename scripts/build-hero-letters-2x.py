from pathlib import Path

import cv2
import numpy as np
from PIL import Image

ROOT = Path(r"D:\Projects\PandFlow")
LOCKUP = ROOT / "public" / "brand" / "propmaat-lockup.png"
OUT = ROOT / "public" / "brand" / "propmaat-letters-3x.png"
SCALE = 3
COLOR = np.array([51, 52, 56], dtype=np.uint8)


def main() -> None:
    src = np.array(Image.open(LOCKUP).convert("RGBA"))
    rgb = src[:, :, :3].astype(np.int16)
    alpha = src[:, :, 3]
    r, g, b = rgb[:, :, 0], rgb[:, :, 1], rgb[:, :, 2]
    present = alpha > 8
    is_red = present & (r > 140) & (r > g + 50) & (r > b + 50)
    is_letter = present & ~is_red & ((r + g + b) > 90)
    is_letter[:, 205:342] = False

    mask = (is_letter.astype(np.uint8)) * 255
    n, labels, stats, _ = cv2.connectedComponentsWithStats(mask, 8)
    keep = np.zeros_like(mask)
    for i in range(1, n):
        if stats[i, cv2.CC_STAT_AREA] >= 800:
            keep[labels == i] = 255

    h, w = keep.shape
    big = cv2.resize(keep, (w * SCALE, h * SCALE), interpolation=cv2.INTER_NEAREST)
    big = cv2.GaussianBlur(big, (3, 3), 0)
    rgba = np.zeros((h * SCALE, w * SCALE, 4), np.uint8)
    rgba[:, :, 0] = COLOR[0]
    rgba[:, :, 1] = COLOR[1]
    rgba[:, :, 2] = COLOR[2]
    rgba[:, :, 3] = big
    Image.fromarray(rgba).save(OUT, optimize=True)
    print("wrote", OUT, rgba.shape, "opaque", int((big > 250).sum()), "aa", int(((big > 0) & (big < 255)).sum()))


if __name__ == "__main__":
    main()
