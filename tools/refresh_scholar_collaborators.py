"""Refresh verified collaborator identities and portraits from Google Scholar.

The public coauthor rail on Yulia Kumar's Scholar profile is the primary source.
Jose Serra is included through his already-reviewed direct Scholar profile. The
script deliberately does not guess identities from name searches.
"""
from __future__ import annotations

from datetime import date
from hashlib import sha256
from html import unescape
from pathlib import Path
from urllib.parse import parse_qs, urlparse
from urllib.request import Request, urlopen
import json
import re

ROOT = Path(__file__).resolve().parents[1]
PROFILE = "https://scholar.google.com/citations?user=aVmqEKgAAAAJ&hl=en"
DIRECT_PROFILES = {"Jose Serra": "https://scholar.google.com/citations?user=NpJefRUAAAAJ&hl=en"}
CANONICAL_NAMES = {
    "Dr. J. Jenny Li": "Juan Jenny Li",
    "Prudence W.H. Wong": "Prudence W. H. Wong",
}
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; YuliaKumarPortfolio/1.0; +https://ykumar2020.github.io/)"}


def fetch(url: str) -> tuple[bytes, str]:
    with urlopen(Request(url, headers=HEADERS), timeout=30) as response:
        return response.read(), response.headers.get_content_type()


def text(url: str) -> str:
    body, _ = fetch(url)
    page = body.decode("utf-8", errors="replace")
    if "unusual traffic" in page.lower() or "recaptcha" in page.lower():
        raise RuntimeError("Google Scholar returned a traffic-verification page; existing evidence was not changed.")
    return page


def clean(value: str) -> str:
    return " ".join(unescape(re.sub(r"<[^>]+>", "", value)).split())


def profile_id(url: str) -> str:
    return parse_qs(urlparse(unescape(url)).query).get("user", [""])[0]


def scholar_image(user: str, citpid: str) -> str:
    return f"https://scholar.googleusercontent.com/citations?view_op=medium_photo&user={user}&citpid={citpid}"


def parse_coauthors(page: str) -> list[dict[str, str]]:
    people = []
    blocks = re.findall(r'<li[^>]*>\s*<div class="gsc_rsb_aa".*?</li>', page, flags=re.S)
    for block in blocks:
        link = re.search(r'<a[^>]+href="([^"]*citations\?[^"#]*user=[^"]+)"[^>]*>(.*?)</a>', block, flags=re.S)
        image = re.search(r'<img[^>]+(?:data-src|src)="([^"]+)"', block, flags=re.S)
        if not link or not image:
            continue
        scholar_name = clean(link.group(2))
        scholar = "https://scholar.google.com" + unescape(link.group(1)).replace("&amp;", "&")
        user = profile_id(scholar)
        raw_image = unescape(image.group(1)).replace("&amp;", "&")
        citpid = parse_qs(urlparse(raw_image).query).get("citpid", ["1"])[0]
        people.append({
            "canonicalName": CANONICAL_NAMES.get(scholar_name, scholar_name),
            "scholarName": scholar_name,
            "scholarId": user,
            "scholar": f"https://scholar.google.com/citations?user={user}&hl=en",
            "imageSource": scholar_image(user, citpid),
            "citpid": citpid,
            "relationSource": "Yulia Kumar Google Scholar public coauthor list",
        })
    return people


def parse_direct_profile(name: str, url: str) -> dict[str, str]:
    page = text(url)
    user = profile_id(url)
    image = re.search(r'<meta[^>]+property="og:image"[^>]+content="([^"]+)"', page)
    title = re.search(r'<meta[^>]+property="og:title"[^>]+content="([^"]+)"', page)
    if not image:
        raise RuntimeError(f"No public Scholar portrait was exposed for {name}.")
    raw_image = unescape(image.group(1)).replace("&amp;", "&")
    citpid = parse_qs(urlparse(raw_image).query).get("citpid", ["1"])[0]
    return {
        "canonicalName": name,
        "scholarName": clean(title.group(1)) if title else name,
        "scholarId": user,
        "scholar": f"https://scholar.google.com/citations?user={user}&hl=en",
        "imageSource": scholar_image(user, citpid),
        "citpid": citpid,
        "relationSource": "Reviewed direct Google Scholar profile",
    }


def safe_slug(name: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def download_portrait(person: dict[str, str]) -> None:
    body, mime = fetch(person["imageSource"])
    if len(body) < 500 or not (body.startswith(b"\xff\xd8") or body.startswith(b"\x89PNG")):
        raise RuntimeError(f"Scholar portrait for {person['canonicalName']} was not a valid image.")
    suffix = ".png" if mime == "image/png" or body.startswith(b"\x89PNG") else ".jpg"
    relative = Path("assets/collaborators") / f"scholar-{safe_slug(person['canonicalName'])}{suffix}"
    destination = ROOT / relative
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_bytes(body)
    person["image"] = relative.as_posix()
    person["sha256"] = sha256(body).hexdigest()
    person["photoAttribution"] = f"Google Scholar profile photo for {person['canonicalName']}"


def main() -> None:
    people = parse_coauthors(text(PROFILE))
    if len(people) < 5:
        raise RuntimeError(f"Expected a public Scholar coauthor rail; parsed only {len(people)} profiles.")
    known = {person["canonicalName"] for person in people}
    for name, url in DIRECT_PROFILES.items():
        if name not in known:
            people.append(parse_direct_profile(name, url))
    for person in people:
        download_portrait(person)
    snapshot = {
        "source": PROFILE,
        "sourceType": "Google Scholar public profile and verified Scholar identities",
        "fetchedAt": date.today().isoformat(),
        "policy": "Scholar is the primary identity and portrait source. No name-search result is accepted without a verified profile match.",
        "people": sorted(people, key=lambda person: person["canonicalName"]),
    }
    target = ROOT / "data/scholar-collaborators.json"
    target.write_text(json.dumps(snapshot, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Saved {len(people)} verified Scholar identities and portraits to {target.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
