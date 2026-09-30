from pathlib import Path
import json,re,hashlib
existing=json.loads(Path('data/collaborators.json').read_text(encoding='utf8'))
pubs=json.loads(Path('data/publications.json').read_text(encoding='utf8'))
groups=existing['aliases']
photos={p['id']:{k:p[k] for k in ['image','profile','imageSource'] if k in p} for p in existing['people'] if 'image' in p}
norm=lambda n:' '.join(n.replace('\xa0',' ').split())
alias={norm(n):name for name,variants in groups.items() for n in [name]+variants}
reviewed={p['id']:{k:p[k] for k in ['featured','identitySource'] if k in p} for p in existing['people']}
people={};skipped=[]
for p in pubs:
 names=[alias.get(norm(n),norm(n)) for n in re.split(r',\s*(?:and\s+)?|\s+and\s+',p['authors'])]
 if 'Yulia Kumar' not in names:skipped.append(p['id']);continue
 for name in set(names)-{'Yulia Kumar','et al.',''}:
  ident=re.sub('[^a-z0-9]+','-',name.lower()).strip('-')
  d=people.setdefault(ident,{'id':ident,'name':name,'papers':[],'topics':[]})
  d['papers'].append(p['id'])
  if p['topic'] not in d['topics']:d['topics'].append(p['topic'])
for d in people.values():
 d.update(reviewed.get(d['id'],{}))
 photoKey=d['id']
 if photoKey in photos:
  d.update(photos[photoKey]);d['photoAttribution']='Official university profile';d['sha256']=hashlib.sha256(Path(d['image']).read_bytes()).hexdigest()
 if d['id']=='juan-jenny-li':d['scholar']='https://scholar.google.com/citations?user=KX0EE1MAAAAJ&hl=en'
 d['papers'].sort()
result={'source':'data/publications.json','note':'Edges come from explicitly listed coauthors. Record counts include versions, accepted work and preprints; not a count of distinct studies. Unresolved initial-only names stay separate. Scholar profile access returned HTTP 429; portraits come from credited university profiles.','profileRequested':'https://scholar.google.com/citations?user=aVmqEKgAAAAJ&hl=en','verifiedAt':'2026-09-29','aliases':groups,'recordsWithoutExplicitJulie':skipped,'people':sorted(people.values(),key=lambda p:(-len(p['papers']),p['name']))}
Path('data/collaborators.json').write_text(json.dumps(result,indent=2,ensure_ascii=False),encoding='utf8');print('Entries',len(people),'photos',sum('image' in p for p in people.values()),'records skipped',skipped)
