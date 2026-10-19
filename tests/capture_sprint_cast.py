"""Capture the four scroll-sprint cast states for visual regression review."""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

base = next((arg for arg in sys.argv[1:] if arg.startswith("http")), "http://127.0.0.1:8091/")
output = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("qa/sprint-cast")
output.mkdir(parents=True, exist_ok=True)
stages = [
    ("julie-apps", "julie"),
    ("research", "black-cat"),
    ("projects", "grey-cat"),
    ("teaching", "julie-cats"),
]

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(channel="chrome", headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900}, reduced_motion="no-preference")
    assert page.goto(base, wait_until="domcontentloaded").status == 200
    runner = page.locator(".julie-runner-track")
    page.wait_for_function("document.querySelector('.julie-runner-track').classList.contains('is-ready')")
    for index, (section_id, cast) in enumerate(stages, 1):
        page.locator(f"#{section_id}").scroll_into_view_if_needed()
        page.wait_for_function(
            "cast => { const el=document.querySelector('.julie-runner-track'); return el.classList.contains('is-running') && el.dataset.cast===cast; }",
            arg=cast,
        )
        page.wait_for_timeout(1900)
        page.screenshot(path=str(output / f"{index}-{cast}.png"), full_page=False)
        page.wait_for_function("document.querySelector('.julie-runner-track').classList.contains('is-resting')", timeout=7000)
    browser.close()

print(f"Captured {len(stages)} sprint states in {output}")
