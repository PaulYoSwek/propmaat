import re
from pathlib import Path

text = Path(r"D:/Projects/PandFlow/src/components/brand/propmaat-official-pin.ts").read_text(
    encoding="utf-8"
)
match = re.search(r'PROPMAAT_LETTER_PATH =\s*"([^"]+)"', text)
if not match:
    raise SystemExit("path not found")
d = match.group(1)
nums = [float(x) for x in re.findall(r"-?\d+\.\d+|-?\d+", d)]
pts = list(zip(nums[0::2], nums[1::2]))
print("commands", d.count("M"), "C", d.count("C"), "L", d.count("L"), "points", len(pts))

# jitter: second differences on consecutive points
import statistics

def jitter(points):
    if len(points) < 4:
        return 0
    dx = [points[i + 1][0] - points[i][0] for i in range(len(points) - 1)]
    dy = [points[i + 1][1] - points[i][1] for i in range(len(points) - 1)]
    ddx = [dx[i + 1] - dx[i] for i in range(len(dx) - 1)]
    ddy = [dy[i + 1] - dy[i] for i in range(len(dy) - 1)]
    mag = [(a * a + b * b) ** 0.5 for a, b in zip(ddx, ddy)]
    return statistics.mean(mag), max(mag)

# split subpaths
subpaths = re.findall(r"M[^M]+", d)
for i, sub in enumerate(subpaths):
    n = [float(x) for x in re.findall(r"-?\d+\.\d+|-?\d+", sub)]
    p = list(zip(n[0::2], n[1::2]))
    xs = [x for x, _ in p]
    ys = [y for _, y in p]
    mean_j, max_j = jitter(p)
    print(
        f"sub{i}: pts={len(p)} x={min(xs):.1f}-{max(xs):.1f} y={min(ys):.1f}-{max(ys):.1f} "
        f"jitter mean={mean_j:.2f} max={max_j:.2f}"
    )
