"""Focused regression check for the prominent Julie applications section."""
from pathlib import Path
import json
import sys

from playwright.sync_api import sync_playwright


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "qa"
OUT.mkdir(exist_ok=True)
BASE = (sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8091/").rstrip("/") + "/"
EXPECTED = [
    "https://julie-teaching-studio.ykumar667598.chatgpt.site/",
    "https://weather-with-julie.vercel.app/",
    "https://weather-with-julie.vercel.app/news",
    "https://www.youtube.com/@yuliakumar8682",
]


results = []
with sync_playwright() as playwright:
    browser = playwright.chromium.launch(channel="chrome", headless=True)
    for label, viewport in (
        ("desktop", {"width": 1440, "height": 1000}),
        ("mobile", {"width": 390, "height": 844}),
    ):
        page = browser.new_page(viewport=viewport, reduced_motion="reduce")
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        response = page.goto(BASE, wait_until="networkidle")
        section = page.locator("#julie-apps")
        cards = section.locator(".julie-app-card")
        assert response and response.status == 200
        assert page.locator("main > section").first.get_attribute("id") == "julie-apps"
        assert cards.count() == 4
        assert cards.evaluate_all("xs => xs.map(x => x.href)") == EXPECTED
        assert section.locator("h2").inner_text().startswith("Built by Yulia")
        assert section.locator(".learn-yulia-feature").is_visible()
        assert page.locator("html").evaluate("el => el.scrollWidth <= el.clientWidth")
        assert not errors
        section.scroll_into_view_if_needed()
        section.screenshot(path=str(OUT / f"julie-apps-{label}.png"))
        results.append({"viewport": label, "cards": cards.count(), "pageErrors": errors})
        page.close()
    browser.close()

print(json.dumps(results, indent=2))
