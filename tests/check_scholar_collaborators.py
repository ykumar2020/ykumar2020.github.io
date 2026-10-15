"""Validate the checked-in Google Scholar identity and portrait evidence."""
from hashlib import sha256
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
snapshot = json.loads((ROOT / 'data/scholar-collaborators.json').read_text(encoding='utf8'))
manifest = json.loads((ROOT / 'data/collaborators.json').read_text(encoding='utf8'))
by_name = {person['name']: person for person in manifest['people']}

assert snapshot['source'] == manifest['profileRequested']
assert manifest['scholarSnapshot'] == 'data/scholar-collaborators.json'
assert len(snapshot['people']) == 12
assert len({person['scholarId'] for person in snapshot['people']}) == len(snapshot['people'])
for scholar_person in snapshot['people']:
    name = scholar_person['canonicalName']
    assert name in by_name, name
    person = by_name[name]
    assert person['scholar'] == scholar_person['scholar']
    assert person['image'] == scholar_person['image']
    content = (ROOT / person['image']).read_bytes()
    assert sha256(content).hexdigest() == person['sha256'] == scholar_person['sha256']
    assert content.startswith((b'\xff\xd8', b'\x89PNG'))

jose = by_name['Jose Serra']
assert len(jose['papers']) == 3
assert len([person for person in manifest['people'] if person['name'] == 'Jose Serra']) == 1
assert by_name['Joseph Sarnoski']['id'] != jose['id']
assert manifest['aliases']['Jose Serra'] == ['J. Serra']
assert manifest['aliases']['Evan Weinman'] == ['E. Weinman']
print('PASS: 12 verified Scholar identities, local portrait hashes, and merged collaborator aliases.')
