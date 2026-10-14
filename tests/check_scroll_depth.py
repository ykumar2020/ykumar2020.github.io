"""Focused regression check for scroll-driven 3D depth and motion preferences."""
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright


BASE = next((arg for arg in sys.argv[1:] if arg.startswith("http")), "http://127.0.0.1:8091/")
CAPTURE = "--capture" in sys.argv

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(channel="chrome", headless=True)

    context = browser.new_context(viewport={"width": 1440, "height": 900})
    context.add_init_script("localStorage.setItem('julie-site-motion', 'playing')")
    page = context.new_page()
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    assert page.goto(BASE, wait_until="networkidle").status == 200
    page.wait_for_function("document.querySelector('#scroll-depth-canvas')?.dataset.motion === 'playing'")

    canvas = page.locator("#scroll-depth-canvas")
    assert canvas.evaluate("el => el.width > 300 && el.height > 300")
    assert page.locator(".depth-plane").count() > 80
    before = canvas.evaluate("el => el.toDataURL()")

    page.locator("#flagships").scroll_into_view_if_needed()
    page.wait_for_timeout(950)
    card = page.locator("#flagships .flagship-card").first
    assert card.evaluate("el => el.classList.contains('depth-visible')")
    assert float(card.evaluate("el => getComputedStyle(el).opacity")) > .95
    assert card.evaluate("el => getComputedStyle(el).transform") != "none"
    after = canvas.evaluate("el => el.toDataURL()")
    assert before != after

    if CAPTURE:
        output = Path(__file__).resolve().parents[1] / "qa" / "scroll-depth.png"
        output.parent.mkdir(exist_ok=True)
        page.screenshot(path=str(output), full_page=False)

    page.evaluate("""() => {
      document.documentElement.dataset.motion = 'paused';
      document.dispatchEvent(new CustomEvent('site-motion-change', {detail:{paused:true}}));
    }""")
    page.wait_for_timeout(80)
    assert canvas.get_attribute("data-motion") == "paused"
    assert card.evaluate("el => getComputedStyle(el).transform") == "none"
    assert not errors, errors

    context.close()

    reduced = browser.new_context(viewport={"width": 900, "height": 700}, reduced_motion="reduce")
    reduced_page = reduced.new_page()
    assert reduced_page.goto(BASE, wait_until="networkidle").status == 200
    assert reduced_page.locator("html").get_attribute("data-scroll-depth") == "reduced"
    assert reduced_page.locator("#scroll-depth-canvas").evaluate("el => getComputedStyle(el).display") == "none"
    assert reduced_page.locator(".depth-plane").first.evaluate("el => getComputedStyle(el).transform") == "none"
    reduced.close()
    browser.close()

print("PASS: scroll changes the 3D constellation, content enters in perspective, pause clears motion, and reduced motion stays static.")
