from pathlib import Path

svg = Path(r"D:/Projects/PandFlow/public/brand/propmaat-letters.svg").read_text(
    encoding="utf-8"
)
start = svg.index('d="') + 3
end = svg.index('"', start)
path = svg[start:end]
out = Path(r"D:/Projects/PandFlow/src/components/brand/propmaat-official-pin.ts")
text = out.read_text(encoding="utf-8").rstrip()
if "PROPMAAT_LETTER_PATH" not in text:
    text += f"""
export const PROPMAAT_LETTER_PATH =
  "{path}";
"""
    out.write_text(text + "\n", encoding="utf-8")
print("letter path", len(path))
