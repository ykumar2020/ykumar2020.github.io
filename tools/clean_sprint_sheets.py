"""Remove disconnected cross-cell debris from the 6x4 sprint sprite sheets."""
from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
SHEETS = {
    "julie-run-cycle-v2.webp": "julie-run-cycle-v3.webp",
    "cat-run-cycle-black-v3.webp": "cat-run-cycle-black-v4.webp",
    "cat-run-cycle-grey-v3.webp": "cat-run-cycle-grey-v4.webp",
}
COLS, ROWS = 6, 4
ALPHA_SEED = 24


def largest_component(mask: np.ndarray) -> np.ndarray:
    height, width = mask.shape
    seen = np.zeros_like(mask, dtype=bool)
    largest: list[tuple[int, int]] = []
    for start_y, start_x in zip(*np.nonzero(mask & ~seen)):
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
        if len(component) > len(largest):
            largest = component
    output = np.zeros_like(mask, dtype=np.uint8)
    for y, x in largest:
        output[y, x] = 255
    return output


def clean_sheet(source: Path, destination: Path) -> None:
    image = Image.open(source).convert("RGBA")
    if image.size[0] % COLS or image.size[1] % ROWS:
        raise ValueError(f"Expected a divisible 6x4 sprite sheet, got {image.size}: {source}")
    cell_width, cell_height = image.size[0] // COLS, image.size[1] // ROWS
    output = Image.new("RGBA", image.size, (0, 0, 0, 0))
    for row in range(ROWS):
        for col in range(COLS):
            box = (col * cell_width, row * cell_height, (col + 1) * cell_width, (row + 1) * cell_height)
            cell = np.array(image.crop(box))
            primary = largest_component(cell[:, :, 3] >= ALPHA_SEED)
            keep = np.array(Image.fromarray(primary).filter(ImageFilter.MaxFilter(5))) > 0
            cell[~keep] = 0
            cell[cell[:, :, 3] < 8] = 0
            output.paste(Image.fromarray(cell), box[:2])
    output.save(destination, format="WEBP", lossless=True, method=6)


if __name__ == "__main__":
    for source_name, destination_name in SHEETS.items():
        clean_sheet(ROOT / "assets" / source_name, ROOT / "assets" / destination_name)
        print(destination_name)
