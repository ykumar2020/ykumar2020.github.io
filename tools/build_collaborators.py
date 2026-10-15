from pathlib import Path
import hashlib
import json
import re

existing = json.loads(Path('data/collaborators.json').read_text(encoding='utf8'))
pubs = json.loads(Path('data/publications.json').read_text(encoding='utf8'))
scholar_path = Path('data/scholar-collaborators.json')
scholar = json.loads(scholar_path.read_text(encoding='utf8')) if scholar_path.exists() else {'people': []}
groups = existing['aliases']
photos = {p['id']: {k: p[k] for k in ['image', 'profile', 'imageSource', 'photoAttribution', 'portraitUpdatedAt'] if k in p} for p in existing['people'] if 'image' in p}
norm = lambda n: ' '.join(n.replace('\xa0', ' ').split())
alias = {norm(n): name for name, variants in groups.items() for n in [name] + variants}
reviewed = {p['id']: {k: p[k] for k in ['featured', 'identitySource', 'scholar', 'scholarSource'] if k in p} for p in existing['people']}
scholar_by_name = {p['canonicalName']: p for p in scholar['people']}
people = {}
skipped = []

for publication in pubs:
    names = [alias.get(norm(name), norm(name)) for name in re.split(r',\s*(?:and\s+)?|\s+and\s+', publication['authors'])]
    if 'Yulia Kumar' not in names:
        skipped.append(publication['id'])
        continue
    for name in set(names) - {'Yulia Kumar', 'et al.', ''}:
        ident = re.sub('[^a-z0-9]+', '-', name.lower()).strip('-')
        person = people.setdefault(ident, {'id': ident, 'name': name, 'papers': [], 'topics': []})
        person['papers'].append(publication['id'])
        if publication['topic'] not in person['topics']:
            person['topics'].append(publication['topic'])

for person in people.values():
    person.update(reviewed.get(person['id'], {}))
    if person['id'] in photos:
        person.update(photos[person['id']])
        person['photoAttribution'] = person.get('photoAttribution', 'Official university profile')
        person['sha256'] = hashlib.sha256(Path(person['image']).read_bytes()).hexdigest()
    if person['name'] in scholar_by_name:
        verified = scholar_by_name[person['name']]
        person.update({
            'identitySource': verified['relationSource'],
            'scholar': verified['scholar'],
            'scholarSource': scholar['source'],
            'image': verified['image'],
            'imageSource': verified['imageSource'],
            'photoAttribution': verified['photoAttribution'],
            'portraitUpdatedAt': scholar['fetchedAt'],
            'sha256': verified['sha256'],
        })
    person['papers'].sort()

result = {
    'source': 'data/publications.json',
    'note': 'Edges and shared-record counts come from explicitly listed coauthors in the bibliography. Google Scholar is the primary identity, profile, and portrait source when a verified match is available; reviewed institutional or user-supplied sources remain fallbacks. Record counts include versions, accepted work and preprints and are not a count of distinct studies. Unresolved initial-only names stay separate.',
    'profileRequested': 'https://scholar.google.com/citations?user=aVmqEKgAAAAJ&hl=en',
    'verifiedAt': scholar.get('fetchedAt', existing.get('verifiedAt')),
    'aliases': groups,
    'scholarSnapshot': 'data/scholar-collaborators.json' if scholar_path.exists() else None,
    'recordsWithoutExplicitJulie': skipped,
    'people': sorted(people.values(), key=lambda p: (-len(p['papers']), p['name'])),
}
Path('data/collaborators.json').write_text(json.dumps(result, indent=2, ensure_ascii=False) + '\n', encoding='utf8')
print('Entries', len(people), 'photos', sum('image' in p for p in people.values()), 'Scholar identities', len(scholar_by_name), 'records skipped', skipped)
