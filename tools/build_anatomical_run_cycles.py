"""Build clean 24-tick sheets from the original anatomical gait cycles.

The source cycles contain eight human phases and twelve feline phases.  The
website advances 24 ticks, so the human cycle repeats three times and each cat
cycle repeats twice.  Repetition preserves a real gait instead of inventing
near-duplicate frames that only move the character vertically.
"""
from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
TARGET_COLS, TARGET_ROWS, TARGET_CELL = 6, 4, 256
SOURCES = (
    ("julie-run-cycle-source-v4.png", 4, 2, "julie-run-cycle-v5.webp"),
    ("cat-run-cycle-black-v2.webp", 4, 3, "cat-run-cycle-black-v5.webp"),
    ("cat-run-cycle-grey-v2.webp", 4, 3, "cat-run-cycle-grey-v5.webp"),
)


def largest_component(mask: np.ndarray) -> np.ndarray:
    height, width = mask.shape
    seen = np.zeros_like(mask, dtype=bool)
    best: list[tuple[int, int]] = []
    for start_y, start_x in zip(*np.nonzero(mask)):
        if seen[start_y, start_x]:
            continue
        queue = deque([(int(start_y), int(start_x))])
        seen[start_y, start_x] = True
        component: list[tuple[int, int]] = []
        while queue:
            y, x = queue.popleft()
            component.append((y, x))
            for dy in (-1, 0, 1):
                for dx in (-1, 0, 1):
                    ny, nx = y + dy, x + dx
                    if 0 <= ny < height and 0 <= nx < width and mask[ny, nx] and not seen[ny, nx]:
                        seen[ny, nx] = True
                        queue.append((ny, nx))
        if len(component) > len(best):
            best = component
    result = np.zeros_like(mask, dtype=np.uint8)
    for y, x in best:
        result[y, x] = 255
    return result


def isolate(cell: Image.Image) -> Image.Image:
    pixels = np.array(cell.convert("RGBA"))
    # Generated transparent PNG/WebP edges are stored below full opacity.  A
    # high seed rejects the faint painted backdrop; dilation restores fur,
    # hair, shoe and whisker antialiasing around the connected body.
    seed = Image.fromarray((pixels[:, :, 3] >= 160).astype(np.uint8) * 255)
    connected_seed = np.array(seed.filter(ImageFilter.MaxFilter(9))) > 0
    body = largest_component(connected_seed.astype(np.uint8))
    keep = np.array(Image.fromarray(body).filter(ImageFilter.MaxFilter(9))) > 0
    pixels[~keep] = 0
    pixels[pixels[:, :, 3] < 24] = 0
    return Image.fromarray(pixels)


def normalize(cell: Image.Image) -> Image.Image:
    bbox = cell.getbbox()
    if not bbox:
        raise ValueError("Empty gait frame after background extraction")
    subject = cell.crop(bbox)
    scale = min(238 / subject.width, 238 / subject.height)
    size = (max(1, round(subject.width * scale)), max(1, round(subject.height * scale)))
    subject = subject.resize(size, Image.Resampling.LANCZOS)
    frame = Image.new("RGBA", (TARGET_CELL, TARGET_CELL), (0, 0, 0, 0))
    frame.alpha_composite(subject, ((TARGET_CELL - size[0]) // 2, TARGET_CELL - size[1] - 5))
    return frame


def build(source_name: str, cols: int, rows: int, destination_name: str) -> None:
    source = Image.open(ASSETS / source_name).convert("RGBA")
    cycle = []
    for index in range(cols * rows):
        col, row = index % cols, index // cols
        bounds = (
            round(col * source.width / cols),
            round(row * source.height / rows),
            round((col + 1) * source.width / cols),
            round((row + 1) * source.height / rows),
        )
        cycle.append(normalize(isolate(source.crop(bounds))))

    sheet = Image.new(
        "RGBA",
        (TARGET_COLS * TARGET_CELL, TARGET_ROWS * TARGET_CELL),
        (0, 0, 0, 0),
    )
    for index in range(TARGET_COLS * TARGET_ROWS):
        sheet.alpha_composite(cycle[index % len(cycle)], ((index % TARGET_COLS) * TARGET_CELL, (index // TARGET_COLS) * TARGET_CELL))
    sheet.save(ASSETS / destination_name, format="WEBP", lossless=True, method=6)
    print(f"{destination_name}: {len(cycle)} anatomical phases across 24 playback ticks")


if __name__ == "__main__":
    for spec in SOURCES:
        build(*spec)
