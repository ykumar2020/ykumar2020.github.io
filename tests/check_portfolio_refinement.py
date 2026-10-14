"""Focused release check for the October 2026 portfolio improvements."""
from playwright.sync_api import sync_playwright


BASE = "http://127.0.0.1:8091/"
with sync_playwright() as playwright:
    browser = playwright.chromium.launch(channel="chrome", headless=True, args=["--enable-unsafe-swiftshader"])
    context = browser.new_context(viewport={"width": 1440, "height": 1000}, reduced_motion="reduce")
    page = context.new_page()
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.goto(BASE, wait_until="networkidle")

    assert "trustworthy AI systems" in page.locator(".hero-headline").inner_text()
    assert page.locator(".julie-purpose-actions a").count() == 3
    assert page.locator("#flagships .flagship-card").count() == 3
    terms = page.locator("#flagships dt").all_text_contents()
    assert len(terms) == 12 and terms[:4] == [
        "Problem", "My contribution", "Supported result", "Limitation",
    ]
    assert page.locator("#work-with-me .opportunity-grid article").count() == 3
    assert page.locator("#photo-carousel").get_attribute("data-paused") == "true"
    assert page.locator(".portrait-slide img").first.get_attribute("src") == "assets/julie-amigo.webp"

    assert page.locator("#publication-list .paper").count() == 76
    assert page.locator("#cv-19 .earlier-versions").count() == 1
    action_text = page.locator("#cv-19 .paper-actions").all_text_contents()[0]
    assert "Paper" in action_text and "Data" in action_text and "Code" in action_text and "Demo" in action_text
    assert page.locator(".paper-request").count() > 0
    assert page.locator("#cv-75 .paper-note").inner_text().startswith("Author metadata differs")

    page.locator('[data-filter="Trustworthy AI"]').click()
    page.locator("#publication-year").select_option("2026")
    page.locator("#publication-search").fill("poison")
    shared = page.url
    assert "topic=Trustworthy+AI" in shared and "year=2026" in shared and "q=poison" in shared
    page.reload(wait_until="networkidle")
    assert page.locator('[data-filter="Trustworthy AI"]').get_attribute("aria-pressed") == "true"
    assert page.locator("#publication-year").input_value() == "2026"
    assert page.locator("#publication-search").input_value() == "poison"

    for width in (1440, 768, 390, 320):
        page.set_viewport_size({"width": width, "height": 850})
        assert page.evaluate("document.documentElement.scrollWidth <= innerWidth"), width
    assert not errors, errors
    browser.close()

print("PASS: concrete opening, flagship case studies, evidence actions, grouped versions, shareable filters, motion default, and 320-1440px reflow")
