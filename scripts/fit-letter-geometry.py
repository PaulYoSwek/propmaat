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
is_letter[:, 200:345] = False


def row_spans(crop):
    spans = []
    for y, row in enumerate(crop):
        xs = np.where(row)[0]
        if len(xs) == 0:
            spans.append([])
            continue
        runs = []
        start = xs[0]
        prev = xs[0]
        for x in xs[1:]:
            if x != prev + 1:
                runs.append((start, prev))
                start = x
            prev = x
        runs.append((start, prev))
        spans.append(runs)
    return spans


def describe(name, x, y, w, h):
    crop = is_letter[y : y + h, x : x + w]
    print(f"\n=== {name} {x},{y} {w}x{h} ===")
    print("left profile every 8px:")
    for yy in range(0, h, max(1, h // 12)):
        xs = np.where(crop[yy])[0]
        if len(xs) == 0:
            print(f"  y={y+yy} empty")
            continue
        print(
            f"  y={y+yy:3d} left={x+xs[0]:3d} right={x+xs[-1]:3d} "
            f"width={xs[-1]-xs[0]+1:3d} runs={len(np.split(xs, np.where(np.diff(xs)!=1)[0]+1))}"
        )
    # rightmost x per row for bowl
    rights = []
    for yy, row in enumerate(crop):
        xs = np.where(row)[0]
        if len(xs):
            rights.append((y + yy, x + xs[-1]))
    if rights:
        max_r = max(rights, key=lambda p: p[1])
        print("max right", max_r)


describe("P", 0, 0, 121, 164)
describe("r", 131, 50, 68, 114)
describe("p", 350, 49, 100, 154)
describe("m", 460, 49, 151, 114)
describe("a1", 620, 49, 94, 116)
describe("a2", 723, 49, 95, 117)
describe("t", 822, 21, 67, 143)
