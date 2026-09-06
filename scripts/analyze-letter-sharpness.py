from pathlib import Path

import cv2
import numpy as np
from PIL import Image

LOCKUP = Path(r"D:/Projects/PandFlow/public/brand/propmaat-lockup.png")
LETTERS = Path(r"D:/Projects/PandFlow/public/brand/propmaat-letters.png")


def main() -> None:
    lockup = np.array(Image.open(LOCKUP).convert("RGBA"))
    letters = np.array(Image.open(LETTERS).convert("RGBA"))
    print("lockup", lockup.shape, "letters", letters.shape)

    alpha = letters[:, :, 3]
    rgb = letters[:, :, :3].astype(int)
    letter = alpha > 40
    print("letter px", int(letter.sum()), "alpha mean", float(alpha[letter].mean()) if letter.any() else 0)
    print("partial alpha 1-254", int(((alpha > 0) & (alpha < 255)).sum()))

    # connected components for letter bodies
    mask = (alpha > 128).astype(np.uint8)
    n, labels, stats, _ = cv2.connectedComponentsWithStats(mask, connectivity=8)
    print("components", n - 1)
    for i in range(1, n):
        x, y, w, h, area = stats[i]
        print(f"  cc{i}: x={x} y={y} w={w} h={h} area={area}")

    # pin-adjacent columns around 200-340
    zone = letter[:, 190:350]
    print("pin-adjacent letter px", int(zone.sum()))
    # leftover holes / chewed edges: look at vertical run irregularity on r right edge (~200-220)
    for name, x0, x1 in [("r-right", 190, 220), ("p-left", 330, 360), ("P-bowl", 40, 130), ("a1", 450, 560)]:
        col = letter[:, x0:x1]
        ys, xs = np.where(col)
        if len(xs) == 0:
            print(name, "empty")
            continue
        print(name, "bbox", xs.min(), ys.min(), xs.max(), ys.max(), "count", len(xs))


if __name__ == "__main__":
    main()
