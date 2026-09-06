from pathlib import Path

import cv2
import numpy as np
from PIL import Image

src = np.array(Image.open(Path(r"D:/Projects/PandFlow/public/brand/propmaat-lockup.png")).convert("RGBA"))
rgb = src[:, :, :3].astype(int)
alpha = src[:, :, 3]
r, g, b = rgb[:, :, 0], rgb[:, :, 1], rgb[:, :, 2]
present = alpha > 16
is_red = present & (r > 140) & (r > g + 50) & (r > b + 50)
is_letter = present & ~is_red & ((r + g + b) > 60)
# clear pin column so r/p don't merge with crumbs
is_letter[:, 200:345] = False
mask = (is_letter.astype(np.uint8)) * 255
n, labels, stats, _ = cv2.connectedComponentsWithStats(mask, 8)
print("components", n - 1)
for i in range(1, n):
    x, y, w, h, area = stats[i]
    crop = is_letter[y : y + h, x : x + w]
    # stem width: median of row run starting from left
    stem_ws = []
    for row in crop:
        xs = np.where(row)[0]
        if len(xs) == 0:
            continue
        run = 1
        for a, b2 in zip(xs, xs[1:]):
            if b2 == a + 1:
                run += 1
            else:
                break
        stem_ws.append(run)
    # hole
    filled = crop.copy()
    # invert crop for holes: letter True, look for False components not touching border
    inv = (~crop).astype(np.uint8)
    hn, hlab, hstats, _ = cv2.connectedComponentsWithStats(inv, 8)
    holes = []
    for j in range(1, hn):
        hx, hy, hw, hh, ha = hstats[j]
        # skip background touching crop border
        touches = hx == 0 or hy == 0 or hx + hw == w or hy + hh == h
        if touches:
            continue
        holes.append((hx + x, hy + y, hw, hh, ha))
    print(
        f"L{i} x={x} y={y} w={w} h={h} area={area} "
        f"stem~{int(np.median(stem_ws)) if stem_ws else 0} "
        f"holes={holes}"
    )
    # top profile of outer edge
    top = []
    for col in range(w):
        ys = np.where(crop[:, col])[0]
        if len(ys):
            top.append((x + col, y + int(ys.min())))
    if top:
        print("  top y range", min(p[1] for p in top), max(p[1] for p in top))
