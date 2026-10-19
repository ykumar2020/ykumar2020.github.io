"""Browser acceptance checks for the local, site-grounded Ask Julie assistant."""
from pathlib import Path
import sys
from playwright.sync_api import sync_playwright


base = next((arg for arg in sys.argv[1:] if arg.startswith("http")), "http://127.0.0.1:8091/")
qa = Path("qa")
qa.mkdir(exist_ok=True)

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(channel="chrome", headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900}, reduced_motion="no-preference")
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    assert page.goto(base, wait_until="networkidle").status == 200
    page.wait_for_function("window.__julieRag && window.__julieRag.corpusSize > 30")
    assert page.locator(".julie-greeting").get_attribute("aria-haspopup") == "dialog"
    page.locator(".julie-greeting").click()
    dialog = page.locator(".julie-rag-dialog")
    assert dialog.get_attribute("aria-hidden") == "false"
    assert "LOCAL RAG" in dialog.inner_text()
    page.locator(".julie-rag-input").fill("What does Yulia research?")
    page.locator(".julie-rag-send").click()
    page.wait_for_function("document.querySelectorAll('.julie-rag-message').length >= 3")
    answer = page.locator('.julie-rag-message[data-speaker="julie"]').last
    answer_text = answer.inner_text()
    assert len(answer_text) > 80
    assert "Moscow Academy" not in answer_text
    assert any(term in answer_text.lower() for term in ("testfails", "llm story", "trustworthy", "agentic", "multimodal", "evaluation")), answer_text
    assert answer.locator(".julie-rag-sources a").count() >= 1
    direct = page.evaluate("window.__julieRag.answer('What does Yulia teach?')")
    assert direct["sources"] and any(source["href"] == "#teaching" for source in direct["sources"]), direct
    dialog.screenshot(path=str(qa / "julie-local-rag-desktop.png"))
    page.locator(".julie-rag-close").click()
    assert dialog.get_attribute("aria-hidden") == "true"
    assert not errors, errors

    mobile = browser.new_page(viewport={"width": 390, "height": 844}, reduced_motion="no-preference")
    mobile_errors = []
    mobile.on("pageerror", lambda error: mobile_errors.append(str(error)))
    assert mobile.goto(base, wait_until="domcontentloaded").status == 200
    mobile.locator(".julie-greeting").click()
    box = mobile.locator(".julie-rag-dialog").bounding_box()
    assert box and box["x"] >= 0 and box["width"] <= 390 and box["height"] <= 844, box
    mobile.screenshot(path=str(qa / "julie-local-rag-mobile.png"), full_page=False)
    assert not mobile_errors, mobile_errors

    reduced = browser.new_page(viewport={"width": 900, "height": 700}, reduced_motion="reduce")
    assert reduced.goto(base, wait_until="domcontentloaded").status == 200
    reduced_trigger = reduced.locator(".julie-greeting")
    reduced.wait_for_function("getComputedStyle(document.querySelector('.julie-runner-track')).display !== 'none'")
    reduced_trigger.click()
    assert reduced.locator(".julie-rag-dialog").get_attribute("aria-hidden") == "false"
    browser.close()

print("PASS: Ask Julie opens from the avatar, retrieves grounded site evidence, cites sources, and fits desktop/mobile viewports.")
