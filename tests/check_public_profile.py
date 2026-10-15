"""Public-profile regression checks for authorship-focused presentation."""
from pathlib import Path
import sys

from playwright.sync_api import sync_playwright


ROOT = Path(__file__).resolve().parents[1]
BASE = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8091/"
FORBIDDEN = (
    "different outfit derived",
    "wears proportional rectangular glasses",
    "motion boundary",
    "future 360",
    "live fourier reconstruction",
    "concept reference",
)


with sync_playwright() as playwright:
    browser = playwright.chromium.launch(channel="chrome", headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 1000}, reduced_motion="reduce")
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    response = page.goto(BASE, wait_until="networkidle")
    assert response and response.status == 200
    body = page.locator("body").inner_text().lower()
    assert all(phrase not in body for phrase in FORBIDDEN)
    assert page.locator("#fft-background").count() == 0
    assert page.locator("#singularity").count() == 0
    assert page.locator("#live-workbench").count() == 0
    assert page.locator("#connectomes:visible").count() == 0
    feature = page.locator(".learn-yulia-feature")
    assert feature.is_visible()
    assert feature.get_attribute("href") == "https://www.youtube.com/@yuliakumar8682"
    assert "Learn with Yulia" in feature.inner_text()
    assert page.locator("#flagships .flagship-card").count() == 4
    assert page.locator("#publication-list .paper").count() == 76
    assert page.locator("#knowledge-panel").is_visible()
    assert not errors, errors
    page.locator("#julie-apps").screenshot(path=str(ROOT / "qa" / "public-profile-teaching.png"))
    browser.close()

print("PASS: public profile emphasizes attributable teaching, research, and collaboration work.")
