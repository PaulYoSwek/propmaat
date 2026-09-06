from pathlib import Path

import cv2
import numpy as np
from PIL import Image

ROOT = Path(r"D:\Projects\PandFlow")
LOCKUP = ROOT / "public" / "brand" / "propmaat-lockup.png"
LETTERS = ROOT / "public" / "brand" / "propmaat-letters.png"
PIN_TS = ROOT / "src" / "components" / "brand" / "propmaat-official-pin.ts"
PIN_SVG = ROOT / "public" / "brand" / "propmaat-pin-official.svg"

LETTER = np.array([50.26, 52.80, 56.04], dtype=np.float32)
PIN = np.array([212.52, 41.42, 46.32], dtype=np.float32)


def defringe(arr: np.ndarray) -> np.ndarray:
    rgb = arr[:, :, :3].astype(np.float32)
    alpha = arr[:, :, 3].astype(np.float32) / 255.0
    r, g, b = rgb[:, :, 0], rgb[:, :, 1], rgb[:, :, 2]
    present = alpha > 0
    is_red = present & (r > 140) & (r > g + 50) & (r > b + 50)

    out = np.zeros_like(arr)
    letter_a = np.clip(
        np.maximum.reduce(
            [
                r / LETTER[0],
                g / LETTER[1],
                b / LETTER[2],
            ]
        ),
        0,
        1,
    )
    pin_a = np.clip(r / PIN[0], 0, 1)

    letter_mask = present & np.logical_not(is_red)
    out[letter_mask, 0] = 51
    out[letter_mask, 1] = 53
    out[letter_mask, 2] = 56
    out[letter_mask, 3] = np.clip(letter_a[letter_mask] * 255, 0, 255)

    out[is_red, 0] = 212
    out[is_red, 1] = 41
    out[is_red, 2] = 46
    out[is_red, 3] = np.clip(pin_a[is_red] * 255, 0, 255)
    return out


def main() -> None:
    src = np.array(Image.open(LOCKUP).convert("RGBA"))
    clean = defringe(src)
    Image.fromarray(clean).save(LOCKUP)

    pin = (clean[:, :, 3] > 0) & (clean[:, :, 0] > 140) & (
        clean[:, :, 0] > clean[:, :, 1] + 50
    )
    pin_u8 = (pin.astype(np.uint8)) * 255
    pin_dilated = cv2.dilate(pin_u8, np.ones((5, 5), np.uint8), iterations=1) > 0
    letters = clean.copy()
    letters[pin_dilated] = 0
    Image.fromarray(letters).save(LETTERS)

    svg = PIN_SVG.read_text(encoding="utf-8")
    start = svg.index('d="') + 3
    end = svg.index('"', start)
    path = svg[start:end]
    PIN_TS.write_text(
        f'''export const PROPMAAT_LOCKUP_WIDTH = 889;
export const PROPMAAT_LOCKUP_HEIGHT = 203;
export const PROPMAAT_PIN_X = 216;
export const PROPMAAT_PIN_Y = 24;
export const PROPMAAT_PIN_WIDTH = 119;
export const PROPMAAT_PIN_HEIGHT = 177;
export const PROPMAAT_PIN_RATIO = PROPMAAT_PIN_WIDTH / PROPMAAT_PIN_HEIGHT;
export const PROPMAAT_PIN_VIEWBOX = "216 24 119 177";
export const PROPMAAT_PIN_COLOR = "#D4292E";
export const PROPMAAT_LETTER_COLOR = "#333438";
export const PROPMAAT_PIN_PATH =
  "{path}";
''',
        encoding="utf-8",
    )
    print("wrote", LOCKUP, LETTERS, PIN_TS)


if __name__ == "__main__":
    main()
