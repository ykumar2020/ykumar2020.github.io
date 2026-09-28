"""Render the publication list into static HTML; no runtime dependencies."""
from pathlib import Path
import html, json
root=Path(__file__).parent
data=json.loads((root/'data/publications.json').read_text(encoding='utf-8'))
cards=[]
for i,p in enumerate(data):
    e=lambda key:html.escape(str(p[key]),quote=True)
    link=f'<a class="paper-link" href="{e("url")}" target="_blank" rel="noopener noreferrer">{e("linkLabel")} <span aria-hidden="true">↗</span></a>' if p['url'] else '<span class="paper-pending">Publication link forthcoming</span>'
    citation=f'{p["authors"]}. ({p["year"]}). {p["title"]}. {p["venue"]}. {p["status"]}. {p["url"]}'.strip()
    cards.append(f'''<article class="paper" data-topic="{e('topic')}" data-year="{p['year']}">
<div class="paper-year">{p['year']}<span>{e('status')}</span></div>
<div class="paper-body"><p class="paper-topic">{e('topic')}</p><h3>{e('title')}</h3><p class="paper-authors">{e('authors')}</p><p class="paper-venue">{e('venue')}</p><div class="paper-actions">{link}<button class="copy-citation" type="button" data-citation="{html.escape(citation,quote=True)}" aria-label="Copy citation for {e('title')}">Copy citation</button></div></div>
</article>''')
template=(root/'template.html').read_text(encoding='utf-8')
(root/'index.html').write_text(template.replace('<!-- PUBLICATIONS -->','\n'.join(cards)),encoding='utf-8')
print(f'Built index.html with {len(cards)} publication entries')
