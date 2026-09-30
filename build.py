"""Render the publication list into static HTML; no runtime dependencies."""
from pathlib import Path
import html, json, re
root=Path(__file__).parent
data=json.loads((root/'data/publications.json').read_text(encoding='utf-8'))
cards=[]
focus=json.loads((root/'data/research-focus.json').read_text(encoding='utf8'))
artifacts=json.loads((root/'data/artifacts.json').read_text(encoding='utf8'))
def bib_escape(value):
    replacements={'\\':r'\textbackslash{}','&':r'\&','%':r'\%','_':r'\_','#':r'\#','$':r'\$','{':r'\{','}':r'\}'}
    return ''.join(replacements.get(c,c) for c in str(value))

def bibtex(p):
    # Generic misc entries avoid inventing a journal/type for incomplete CV records.
    names=re.split(r',\s*(?:and\s+)?|\s+and\s+',p['authors'])
    author=' and '.join('others' if n.strip()=='et al.' else bib_escape(n.strip()) for n in names if n.strip())
    fields={'author':author,'title':'{'+bib_escape(p['title'])+'}','year':str(p['year']),
            'howpublished':bib_escape(p['venue']),'note':bib_escape(p['status'])}
    if p.get('url'): fields['url']=bib_escape(p['url'])
    return '@misc{kumar-'+p['id']+',\n'+',\n'.join('  '+k+' = {'+v+'}' for k,v in fields.items())+'\n}'

for i,p in enumerate(data):
    tags=[tag for tag,entry in focus.items() if p['id'] in entry['ids']]
    tag_data=' '.join(tags)
    tag_html='<div class="paper-focus-tags">'+''.join('<span>#'+html.escape(tag)+'</span>' for tag in tags)+'</div>' if tags else ''
    e=lambda key:html.escape(str(p[key]),quote=True)
    link=f'<a class="paper-link" href="{e("url")}" target="_blank" rel="noopener noreferrer">{e("linkLabel")} <span aria-hidden="true">↗</span></a>' if p['url'] else '<span class="paper-pending">No public link listed</span>'
    note=f'<p class="paper-note">{html.escape(p["note"])}</p>' if p.get('note') else ''
    related=''.join(f'<a class="paper-link" href="{html.escape(r["url"],quote=True)}" target="_blank" rel="noopener noreferrer">{html.escape(r["label"])} ↗</a>' for r in p.get('related',[]))
    citation=f'{p["authors"]}. ({p["year"]}). {p["title"]}. {p["venue"]}. {p["status"]}. {p["url"]}'.strip()
    bib=html.escape(bibtex(p))
    drawer=f'<details class="bibtex-drawer"><summary>BibTeX</summary><p>Exported from the listed metadata. Publication type and missing fields are not inferred.</p><pre tabindex="0" aria-label="BibTeX for {e("title")}"><code>{bib}</code></pre></details>'
    artifact=artifacts.get(p['id'],{})
    artifact_links=''.join('<li><a href="'+html.escape(a['url'],quote=True)+'">'+html.escape(a['label'])+'</a></li>' for a in artifact.get('links',[]))
    artifact_note=artifact.get('note','No public code, dataset, or model weights have been verified for this bibliography record. The publication link and BibTeX citation remain available where listed.')
    artifact_drawer='<details class="artifact-drawer"><summary>Artifacts &amp; evidence'+(' / '+str(len(artifact['links']))+' links' if artifact_links else '')+'</summary><ul>'+artifact_links+'</ul><p>'+html.escape(artifact_note)+'</p></details>'
    cards.append(f'''<article class="paper" id="{e('id')}" data-focus="{tag_data}" data-topic="{e('topic')}" data-year="{p['year']}" data-status="{e('status')}">
<div class="paper-year">{p['year']}<span>{e('status')}</span></div>
<div class="paper-body"><p class="paper-topic">{e('topic')}</p><h3>{e('title')}</h3>{tag_html}<p class="paper-authors">{e('authors')}</p><p class="paper-venue">{e('venue')}</p>{note}<div class="paper-actions">{link}{related}<button class="copy-citation" type="button" data-citation="{html.escape(citation,quote=True)}" aria-label="Copy citation for {e('title')}">Copy citation</button></div>{artifact_drawer}{drawer}</div>
</article>''')
template=(root/'template.html').read_text(encoding='utf-8')
template=template.replace('<!-- SINGULARITY_PILLAR -->',(root/'labs/singularity.html').read_text(encoding='utf8'))
template=template.replace('<!-- LIVE_WORKBENCH -->',(root/'labs/workbench.html').read_text(encoding='utf8'))
attack=(root/'labs/attack-template.html').read_text(encoding='utf8').replace('/* POISON_CORE */',(root/'labs/poison-core.mjs').read_text(encoding='utf8').replace('export function','function'))
(root/'labs/attack-inspector.html').write_text(attack,encoding='utf8')
# Featured summaries are editorial; titles, authors, dates and links use the bibliography.
frontier_summaries={
 'cv-10':('ASI / Risks & human oversight','Analyzes AGI and ASI risk scenarios, the role of human oversight, and vulnerabilities in safeguards. The work connects present-day adversarial testing with preparation for more capable systems.'),
 'cv-38':('AGI / Capability evaluation','Introduces testFAILS-2 to evaluate AI systems across dimensions such as multimodality, accessibility, cost, and agent capabilities. The review examines progress and limitations in the pursuit of AGI.')
}
frontier=[]
for ident,(label,summary) in frontier_summaries.items():
    p=next(p for p in data if p['id']==ident)
    esc=lambda value:html.escape(str(value),quote=True)
    frontier.append(f'''<article class="frontier-paper" data-publication="{ident}"><p class="eyebrow">{esc(label)}</p><h3><a href="{esc(p['url'])}" target="_blank" rel="noopener">{esc(p['title'])}</a></h3><p class="frontier-meta">{p['year']} &middot; {esc(p['status'])} &middot; {esc(p['venue'])}</p><p class="frontier-authors">{esc(p['authors'])}</p><p class="frontier-summary">{esc(summary)}</p><a class="text-link" href="{esc(p['url'])}" target="_blank" rel="noopener">{esc(p['linkLabel'])} &#8599;</a></article>''')
template=template.replace('<!-- FRONTIER_PAPERS -->','\n'.join(frontier))

years=sorted({p['year'] for p in data},reverse=True)
year_options=''.join(f'<option value="{y}">{y}</option>' for y in years)
status_options=''.join(f'<option>{html.escape(s)}</option>' for s in ['Published','Accepted','To appear','Poster','Preprint','Work in progress','CV listing'] if any(p['status']==s for p in data))
template=template.replace('<!-- YEAR_OPTIONS -->',year_options).replace('<!-- STATUS_OPTIONS -->',status_options)
template=template.replace('<!-- BIBLIOGRAPHY_SUMMARY -->',f'{len(data)} bibliography records · {min(years)}–{max(years)}')
(root/'index.html').write_text(template.replace('<!-- PUBLICATIONS -->','\n'.join(cards)),encoding='utf-8')
print(f'Built index.html with {len(cards)} publication entries')
