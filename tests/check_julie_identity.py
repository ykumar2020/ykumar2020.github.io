"""Focused no-screenshot regression check for Julie's shared website identity."""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

base = next((arg for arg in sys.argv[1:] if arg.startswith("http")), "http://127.0.0.1:8091/")
capture = "--capture" in sys.argv
with sync_playwright() as playwright:
    browser = playwright.chromium.launch(channel="chrome", headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 1000})
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    assert page.goto(base, wait_until="domcontentloaded").status == 200
    portraits = page.locator("#julie-apps .julie-app-visual img")
    assert portraits.count() == 4
    assert portraits.evaluate_all("xs => xs.map(x => x.getAttribute('src'))") == ["assets/julie-role-studio-v2.webp", "assets/julie-role-weather-v2.webp", "assets/julie-role-news-v2.webp", "assets/julie-role-learn-v2.webp"]
    page.wait_for_function("[...document.querySelectorAll('#julie-apps .julie-app-visual img')].every(x => x.complete && x.naturalWidth > 0)")
    assert portraits.evaluate_all("xs => xs.every(x => x.complete && x.naturalWidth > 0 && x.naturalHeight > 0)")
    assert page.locator("#julie-apps .julie-role-glasses").count() == 0
    assert len(set(portraits.evaluate_all("xs => xs.map(x => x.currentSrc)"))) == 4
    glasses_layer = page.locator(".welcome-character").evaluate("el => getComputedStyle(el, '::after')")
    assert glasses_layer["content"] in ("none", "normal")
    assert glasses_layer["backgroundImage"] == "none"
    assert page.locator("#avatar-fallback").get_attribute("src").endswith("neutral-glasses-v3.png")
    page.wait_for_function("document.querySelector('[data-welcome-julie] canvas')?.dataset.state === 'ready'")
    assert page.locator("[data-welcome-julie] canvas").get_attribute("data-renderer") == "layered-lecture-presenter"
    assert "wearing glasses" in page.locator("[data-welcome-julie] canvas").get_attribute("aria-label")
    assert page.locator(".julie-runner-track").count() == 1
    assert page.locator(".julie-runner-sprite").evaluate("el => getComputedStyle(el).backgroundImage.includes('julie-run-cycle-v1.webp')")
    assert page.locator(".julie-context-portrait").get_attribute("src") == "assets/julie-role-studio-v2.webp"
    assert page.locator(".julie-hi").inner_text() == "Hi! Let me know if you need help."
    assert not errors, errors
    if capture:
        output = Path(__file__).resolve().parents[1] / "qa" / "julie-identity.png"
        output.parent.mkdir(exist_ok=True)
        page.locator("#julie-apps").screenshot(path=str(output))
        page.locator(".hero").screenshot(path=str(output.with_name("julie-identity-hero.png")))
    browser.close()

print("PASS: Julie uses four distinct role wardrobes, integrated glasses, and a contextual corner greeting.")
