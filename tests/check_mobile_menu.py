"""Verify the phone header exposes a visible, usable CSS hamburger menu."""
import sys
from playwright.sync_api import sync_playwright


base = next((arg for arg in sys.argv[1:] if arg.startswith("http")), "http://127.0.0.1:8091/")

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(channel="chrome", headless=True)
    for width in (320, 390, 768):
        page = browser.new_page(viewport={"width": width, "height": 760})
        assert page.goto(base, wait_until="domcontentloaded").status == 200
        toggle = page.locator(".menu-toggle")
        assert toggle.is_visible(), f"hamburger hidden at {width}px"
        box = toggle.bounding_box()
        assert box and box["width"] >= 44 and box["height"] >= 44, (width, box)
        assert page.locator(".menu-icon").evaluate("el => getComputedStyle(el).borderTopWidth === '2px'")
        assert page.locator("#site-nav").is_hidden()
        toggle.click()
        assert toggle.get_attribute("aria-expanded") == "true"
        assert toggle.get_attribute("aria-label") == "Close navigation menu"
        assert page.locator("#site-nav").is_visible()
        page.keyboard.press("Escape")
        assert toggle.get_attribute("aria-expanded") == "false"
        assert page.locator("#site-nav").is_hidden()
        page.close()
    browser.close()

print("PASS: hamburger is visible and functional at 320px, 390px, and 768px.")
