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
    assert page.goto(base, wait_until="networkidle").status == 200
    portraits = page.locator("#julie-apps .julie-app-visual img:not(.julie-role-glasses)")
    glasses = page.locator("#julie-apps .julie-role-glasses")
    assert portraits.count() == glasses.count() == 4
    assert portraits.evaluate_all("xs => xs.map(x => x.getAttribute('src'))") == ["julie/presenter/present_body.png", "julie/presenter/point_body.png", "julie/presenter/compare_body.png", "julie/presenter/neutral.png"]
    assert portraits.evaluate_all("xs => xs.every(x => x.complete && x.naturalWidth > 0 && x.naturalHeight > 0)")
    assert glasses.evaluate_all("xs => xs.every(x => x.complete && x.naturalWidth > 0 && x.naturalHeight > 0)")
    boxes = page.evaluate("""() => [...document.querySelectorAll('#julie-apps .julie-app-visual')].map(card => {
      const p = card.querySelector('img:not(.julie-role-glasses)').getBoundingClientRect();
      const g = card.querySelector('.julie-role-glasses').getBoundingClientRect();
      return {portrait:[p.x,p.y,p.width,p.height], glasses:[g.x,g.y,g.width,g.height]};
    })""")
    assert all(max(abs(a-b) for a,b in zip(item["portrait"], item["glasses"])) < 1 for item in boxes), boxes
    assert "julie-glasses-stage.svg" in page.locator(".welcome-character").evaluate("el => getComputedStyle(el, '::after').backgroundImage")
    assert "wearing glasses" in page.locator("[data-welcome-julie] canvas").get_attribute("aria-label")
    assert page.locator(".julie-runner-track").count() == 1
    assert page.locator(".julie-runner-sprite").evaluate("el => getComputedStyle(el).backgroundImage.includes('julie-run-cycle-v1.webp')")
    assert not errors, errors
    if capture:
        output = Path(__file__).resolve().parents[1] / "qa" / "julie-identity.png"
        output.parent.mkdir(exist_ok=True)
        page.locator("#julie-apps").screenshot(path=str(output))
        page.locator(".hero").screenshot(path=str(output.with_name("julie-identity-hero.png")))
    browser.close()

print("PASS: Julie uses the Learn with Yulia denim wardrobe and aligned glasses in all website avatar roles.")
