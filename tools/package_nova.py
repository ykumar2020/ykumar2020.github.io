"""Build a public starter from a local Nova checkout, excluding private material.
Usage: python tools/package_nova.py PATH_TO_NOVA
"""
from pathlib import Path
import json, shutil, subprocess, sys, zipfile, hashlib
root=Path(__file__).resolve().parents[1];source=Path(sys.argv[1]).resolve()
staging=root/'qa/nova-public';staging.mkdir(parents=True,exist_ok=True)
allowed=['package.json','package-lock.json','.env.example','.gitignore','server.mjs','session.mjs','launcher.mjs','Start Nova.cmd','Start Nova.command','src/app.js','src/avatar.js','src/floor.js','public/index.html','public/style.css','tools/import_lecture.py','tests/floor.test.mjs']
for name in allowed:
 target=staging/name;target.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(source/name,target)
p=staging/'src/app.js';s=p.read_text(encoding='utf8');s=s.replace("d.title='Lecture 2 · Visual Judgment & Data Engineering';",'');p.write_text(s,encoding='utf8')
demo={'title':'Nova starter lecture: explaining a visualization','warning':'Starter slides demonstrate the teaching workflow. Replace them with your own lecture.','slides':[
 {'title':'Start with the question','text':'Question first.\nWhat should the audience learn from this visualization?','notes':'A useful chart starts with an analytical question. Comparing categories, following change over time, and examining a distribution call for different visual forms. State the question before choosing the chart.'},
 {'title':'Check the data and encoding','text':'Check scales, missing values, and transformations before interpreting a pattern.','notes':'Read the axis labels and units. Check whether missing values are shown as gaps or estimates. Distinguish counts from rates and raw values from normalized values. A pattern can reflect a preparation choice rather than a real difference.'},
 {'title':'Defend the interpretation','text':'Explain what the display supports, and what it does not.','notes':'Tie the explanation to visible evidence. State uncertainty and limitations. Prefer an interpretation the audience can check in the data over a dramatic conclusion unsupported by the display.'}]}
p=staging/'public/lectures/sample/lecture.json';p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(demo,indent=2),encoding='utf8')
readme='''# Nova: virtual teaching assistant starter

A working classroom prototype by Julie Kumar. This public package contains three starter slides, application source, and unit checks. It excludes private teaching decks, credentials, local settings, and recordings.

Install Node.js 22.16+ and Python 3.11+. In this folder run:

```
npm ci
python -m pip install pymupdf
npm run build
```

Copy `.env.example` to `.env` and set your own `OPENAI_API_KEY`. Then run `npm start` and open http://localhost:4317 in Chrome or Edge. Live voice uses your project's paid OpenAI API access. Rehearsal can read notes without connecting.

Upload a PDF. On Windows with PowerPoint installed, install `pywin32` to import PPTX directly and retrieve speaker notes. On Mac, export to PDF first. Native slide animations and video are flattened on import.

Click Connect live audio and allow the microphone. Inform the class that audio is processed by OpenAI. Choose a handoff limit, then say 'Nova, continue my lecture.' Say 'Nova, stop' or press Esc to take back the floor. Typed questions and buttons are also supported. Anyone near the microphone can use the wake phrase. Disconnect releases the microphone.

The assistant uses the current slide image, extracted text, notes, and bounded recent transcript. It can make mistakes: review its explanations. Edit notes and export them before closing the tab. Imported files remain locally in public/lectures; the transcript is not saved by the app.

This is a browser lecture player, not a desktop PowerPoint overlay. Its 3D robot is procedurally animated, with amplitude-driven mouth movement. It is not a photorealistic or phoneme-accurate avatar.

Run `npm test` for the seven speech-permission and command checks. Real WebRTC and generated-audio wake/stop checks passed in the development environment. Actual classroom acoustics and long sessions remain unvalidated. See https://ykumar2020.github.io/labs/nova/guide.html for setup, capabilities, and boundaries.

The server binds to localhost. Do not publish an API key or expose this local prototype as a public voice service without appropriate authentication and usage controls.
'''
(staging/'README.md').write_text(readme,encoding='utf8')
# Build against the website's installed tools. Bundled output needs no network import.
esbuild=root/'node_modules/esbuild/bin/esbuild'
subprocess.run(['node',str(esbuild),str(staging/'src/app.js'),'--bundle','--format=esm','--minify','--outfile='+str(staging/'public/app.js')],cwd=root,check=True)
out=root/'assets/downloads/nova-virtual-ta.zip';out.parent.mkdir(parents=True,exist_ok=True)
files=allowed+['public/app.js','public/lectures/sample/lecture.json','README.md']
with zipfile.ZipFile(out,'w',zipfile.ZIP_DEFLATED) as z:
 for name in files:z.write(staging/name,'NovaVirtualTA/'+name)
with zipfile.ZipFile(out) as z:
 assert len(z.namelist())==len(files)
 for name in z.namelist():
  assert Path(name).name not in {'.env','local-settings.json'}
  assert not any(x in name for x in ['qa/','uploads/','sample/slide-'])
evidence={'updated':'2026-09-30','status':'Working prototype; supervised classroom rehearsal required','project':'Nova virtual teaching assistant','unitChecksPassed':7,'verifiedInDevelopment':['Browser handoff and bounded slide advancement','Stop rejects delayed completion','Editable notes and export','Mobile layout and reduced motion','Windows PowerPoint rendering and notes import','Real WebRTC response with a synthetic microphone','Generated classroom speech ignored until addressed; spoken wake and stop recognized'],'notVerified':['Physical classroom acoustics','Uninterrupted full-length teaching','Accuracy of every generated explanation','Desktop PowerPoint overlay (not implemented)'],'publicPreview':'Silent scripted movement demonstration, no microphone or AI connection','starterContents':'Three generic slides; private lecture files and credentials excluded','download':{'file':'assets/downloads/nova-virtual-ta.zip','bytes':out.stat().st_size,'sha256':hashlib.sha256(out.read_bytes()).hexdigest()}}
(root/'data/nova-verification.json').write_text(json.dumps(evidence,indent=2)+'\n',encoding='utf8')
print('Public starter:',out.stat().st_size,'bytes; explicit allowlist verified.')
