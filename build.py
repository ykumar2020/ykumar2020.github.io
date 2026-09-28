"""Render the publication list into static HTML; no runtime dependencies."""
from pathlib import Path
import html, json
root=Path(__file__).parent
data=json.loads((root/'data/publications.json').read_text(encoding='utf-8'))
cards=[]
for i,p in enumerate(data):
    e=lambda key:html.escape(str(p[key]),quote=True)
    link=f'<a class="paper-link" href="{e("url")}" target="_blank" rel="noopener noreferrer">{e("linkLabel")} <span aria-hidden="true">↗</span></a>' if p['url'] else '<span class="paper-pending">No public link listed</span>'
    note=f'<p class="paper-note">{html.escape(p["note"])}</p>' if p.get('note') else ''
    related=''.join(f'<a class="paper-link" href="{html.escape(r["url"],quote=True)}" target="_blank" rel="noopener noreferrer">{html.escape(r["label"])} ↗</a>' for r in p.get('related',[]))
    citation=f'{p["authors"]}. ({p["year"]}). {p["title"]}. {p["venue"]}. {p["status"]}. {p["url"]}'.strip()
    cards.append(f'''<article class="paper" id="{e('id')}" data-topic="{e('topic')}" data-year="{p['year']}" data-status="{e('status')}">
<div class="paper-year">{p['year']}<span>{e('status')}</span></div>
<div class="paper-body"><p class="paper-topic">{e('topic')}</p><h3>{e('title')}</h3><p class="paper-authors">{e('authors')}</p><p class="paper-venue">{e('venue')}</p>{note}<div class="paper-actions">{link}{related}<button class="copy-citation" type="button" data-citation="{html.escape(citation,quote=True)}" aria-label="Copy citation for {e('title')}">Copy citation</button></div></div>
</article>''')
template=(root/'template.html').read_text(encoding='utf-8')
years=sorted({p['year'] for p in data},reverse=True)
year_options=''.join(f'<option value="{y}">{y}</option>' for y in years)
status_options=''.join(f'<option>{html.escape(s)}</option>' for s in ['Published','Accepted','To appear','Poster','Preprint','Work in progress','CV listing'] if any(p['status']==s for p in data))
template=template.replace('<!-- YEAR_OPTIONS -->',year_options).replace('<!-- STATUS_OPTIONS -->',status_options)
template=template.replace('<!-- BIBLIOGRAPHY_SUMMARY -->',f'{len(data)} bibliography records · {min(years)}–{max(years)}')
(root/'index.html').write_text(template.replace('<!-- PUBLICATIONS -->','\n'.join(cards)),encoding='utf-8')
print(f'Built index.html with {len(cards)} publication entries')
