"""Regression check: Julie always travels and faces left-to-right while her legs animate."""
import sys
from playwright.sync_api import sync_playwright


base = next((arg for arg in sys.argv[1:] if arg.startswith("http")), "http://127.0.0.1:8091/")

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(channel="chrome", headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 800}, reduced_motion="no-preference")
    assert page.goto(base, wait_until="domcontentloaded").status == 200
    page.wait_for_function("document.querySelector('.julie-runner-track')?.dataset.spriteState === 'ready'")
    page.evaluate("scrollTo(0, 0)")
    page.wait_for_timeout(100)
    page.mouse.wheel(0, 1400)
    page.wait_for_function("document.querySelector('.julie-runner-track')?.classList.contains('is-running')")
    page.evaluate("document.querySelector('.julie-runner-track').dataset.cast = 'julie'")

    samples = []
    for _ in range(10):
        page.wait_for_timeout(170)
        samples.append(page.evaluate("""() => {
          const runner = document.querySelector('.julie-runner-track');
          const canvas = document.querySelector('.julie-runner-sprite');
          const pixels = canvas.getContext('2d', {willReadFrequently:true})
            .getImageData(0, canvas.height * .48, canvas.width, canvas.height * .52).data;
          let hash = 2166136261;
          for (let i = 0; i < pixels.length; i += 4) {
            hash ^= pixels[i] + (pixels[i + 1] << 8) + (pixels[i + 2] << 16) + (pixels[i + 3] << 24);
            hash = Math.imul(hash, 16777619);
          }
          return {
            x: Number.parseFloat(getComputedStyle(runner).getPropertyValue('--julie-runner-x')),
            direction: runner.dataset.direction,
            transform: getComputedStyle(canvas).transform,
            legs: hash >>> 0
          };
        }"""))

    assert all(sample["direction"] == "right" for sample in samples), samples
    assert all(sample["transform"] == "none" for sample in samples), samples
    assert all(samples[index]["x"] > samples[index - 1]["x"] for index in range(1, len(samples))), samples
    assert len({sample["legs"] for sample in samples}) >= 4, samples
    browser.close()

print("PASS: Julie remains right-facing, moves only left-to-right, and changes leg frames.")
