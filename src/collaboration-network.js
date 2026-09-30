import * as THREE from 'three';
import collaborators from '../data/collaborators.json';
import publications from '../data/publications.json';

export function createCollaborationNetwork(stage){
  let scene,records=[],people=[],page=0,selected='',onPick,activePaper;
  const panel=document.querySelector('#knowledge-panel'),host=document.querySelector('#network-scene');
  const picker=panel.querySelector('#collaborator-select'),detail=panel.querySelector('#collaborator-detail');
  const overlay=document.createElement('div');overlay.className='collaboration-overlay';host.append(overlay);
  let labels=[];
  const mobile=matchMedia('(max-width:767px)');
  const pageSize=()=>mobile.matches?1:8;
  const short={'Trustworthy AI':'Trustworthy AI','Agentic AI':'Agentic AI','Multimodal AI':'Multimodal AI','Education':'Computing education','AI Systems':'AI systems','Algorithms':'Algorithms'};
  function el(tag,text,className){const e=document.createElement(tag);if(text)e.textContent=text;if(className)e.className=className;return e;}
  function position(){
    if(!scene)return;scene.group.updateMatrixWorld(true);scene.camera.updateMatrixWorld();
    for(const item of labels){const v=item.point.clone().applyMatrix4(scene.group.matrixWorld).project(scene.camera);item.element.style.left=(v.x*.5+.5)*100+'%';item.element.style.top=(-v.y*.5+.5)*100+'%';}
  }
  function ensure(){
    if(scene)return;
    scene=stage('network-scene',s=>{
      s.camera.position.set(0,0,11.8);s.group=new THREE.Group();s.scene.add(s.group);
      s.onResize=(w,h)=>{s.camera.position.z=mobile.matches?14:Math.max(11.8,5.8/(Math.tan(Math.PI/9)*(w/h)));position();};
      let t=0,y=0;
      s.update=(time=t)=>{t=time;s.group.rotation.y=y+Math.sin(t*.13)*.035;position();};
      panel.querySelector('[data-controls=network-scene]').addEventListener('click',e=>{const turn=e.target.closest('[data-turn]')?.dataset.turn;if(turn==='left')y=Math.max(-.25,y-.08);if(turn==='right')y=Math.min(.25,y+.08);if(turn==='reset')y=0;if(turn){s.update();s.draw();}});
    });
  }
  function label(element,point){overlay.append(element);labels.push({element,point});return element;}
  function face(person,point,center=false){
    const button=el('button',null,'collaborator-face'+(center?' central-person':''));button.type='button';
    const disc=el('span',null,'face-disc');
    if(person.image){const image=new Image();image.src=person.image;image.alt='';image.addEventListener('error',()=>{image.remove();disc.textContent=person.name.split(' ').map(n=>n[0]).slice(0,2).join('');});disc.append(image);}
    else disc.textContent=person.name.split(' ').filter(n=>n.length>0).map(n=>n[0]).slice(0,2).join('');
    button.append(disc,el('span',person.name,'face-name'));button.setAttribute('aria-label',center?'Julie Kumar, central coauthor':`${person.name}: ${person.papers.length} matching bibliography records`);
    if(!center){button.dataset.person=person.id;button.setAttribute('aria-pressed',String(person.id===selected));button.addEventListener('click',()=>choose(person.id));}
    else button.addEventListener('click',()=>document.querySelector('#home').scrollIntoView({behavior:'auto'}));
    label(button,point);
  }
  function showDetail(){
    detail.replaceChildren();const person=people.find(p=>p.id===selected);if(!person){detail.textContent='No explicitly listed coauthors match these filters.';return;}
    const title=el('h4',person.name);detail.append(title,el('p',`${person.papers.length} matching bibliography records · ${person.topics.map(t=>short[t]).join(' / ')}`));
    if(person.profile){const a=el('a','Portrait source / university profile');a.href=person.profile;a.target='_blank';a.rel='noopener';detail.append(a);}
    else if(person.image) detail.append(el('p',person.photoAttribution||'Portrait attached.'));
    else detail.append(el('p','Initials shown: no verified portrait is attached.'));
    if(person.scholar){const a=el('a','Google Scholar profile');a.href=person.scholar;a.target='_blank';a.rel='noopener';detail.append(a);}
    const list=el('ul');for(const id of person.papers){const record=publications.find(p=>p.id===id);if(!record)continue;const li=el('li'),button=el('button',`${record.year} · ${record.title}`);button.type='button';button.addEventListener('click',()=>{onPick?.(id);highlight(id);});li.append(button);list.append(li);}detail.append(list);
  }
  function choose(id){selected=id;picker.value=id;overlay.querySelectorAll('[data-person]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.person===id)));showDetail();}
  function render(){
    ensure();overlay.replaceChildren();labels=[];
    if(scene){scene.group.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});scene.group.clear();}
    const slice=people.slice(page*pageSize(),page*pageSize()+pageSize());
    host.dataset.records=String(records.length);host.dataset.people=String(people.length);host.dataset.visiblePeople=String(slice.length);
    panel.querySelector('#network-legend').textContent='Edge labels: topics shared with Julie in the matching bibliography records.';
    panel.querySelector('#collaboration-count').textContent=people.length?`Showing ${page*pageSize()+1}–${page*pageSize()+slice.length} of ${people.length} coauthor entries. Counts refer to bibliography records, including versions. Initial-only names remain separate when identity is unresolved.`:'No matching coauthor entries.';
    panel.querySelector('[data-people=previous]').disabled=page===0;panel.querySelector('[data-people=next]').disabled=(page+1)*pageSize()>=people.length;
    if(!scene){showDetail();return;}
    face({name:'Julie Kumar',image:'assets/julie-atrium.webp'},new THREE.Vector3(0,mobile.matches?-3.4:0,.35),true);
    slice.forEach((person,i)=>{
      const side=i<(mobile.matches?1:4)?-1:1,row=i%4,y=mobile.matches?3.4:2.75-row*1.82,x=mobile.matches?0:side*4.7;
      const end=new THREE.Vector3(x,y,.1*Math.sin(i));face(person,end);
      const start=new THREE.Vector3(mobile.matches?0:side*.5,mobile.matches?-3.4:(1.5-row)*.14,0),bend=new THREE.Vector3(mobile.matches?0:side*2.5,y*.8,.25);
      const curve=new THREE.QuadraticBezierCurve3(start,bend,end);
      const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(32)),new THREE.LineBasicMaterial({color:0xa64dff,transparent:true,opacity:.6}));scene.group.add(line);
      const topic=el('span',person.topics.map(t=>short[t]).join(' · '),'collaboration-edge-label');topic.title=person.topics.join(', ');label(topic,new THREE.Vector3(mobile.matches?0:side*2.65,mobile.matches?0:y*.82,.3));
    });
    scene.resize();scene.update();scene.draw();highlight(activePaper);showDetail();
  }
  function highlight(id){activePaper=id;overlay.querySelectorAll('[data-person]').forEach(b=>b.classList.toggle('paper-coauthor',people.find(p=>p.id===b.dataset.person)?.papers.includes(id)));}
  picker.addEventListener('change',()=>{selected=picker.value;page=Math.floor(Math.max(0,people.findIndex(p=>p.id===selected))/pageSize());render();});
  panel.querySelectorAll('[data-people]').forEach(button=>button.addEventListener('click',()=>{page+=button.dataset.people==='next'?1:-1;selected=people[page*pageSize()]?.id||'';picker.value=selected;render();}));
  mobile.addEventListener('change',()=>{page=Math.floor(Math.max(0,people.findIndex(p=>p.id===selected))/pageSize());render();});
  return{highlight,setRecords(matches,callback){
    records=matches;onPick=callback;const ids=new Set(matches.map(p=>p.id));
    people=collaborators.people.map(person=>{const papers=person.papers.filter(id=>ids.has(id));return{...person,papers,topics:[...new Set(papers.map(id=>publications.find(p=>p.id===id)?.topic).filter(Boolean))]};}).filter(p=>p.papers.length).sort((a,b)=>Number(!!b.image||!!b.featured)-Number(!!a.image||!!a.featured)||b.papers.length-a.papers.length||a.name.localeCompare(b.name));
    if(!people.some(p=>p.id===selected))selected=people[0]?.id||'';
    picker.replaceChildren(...people.map(person=>{const option=el('option',`${person.name} (${person.papers.length})`);option.value=person.id;return option;}));picker.value=selected;
    page=Math.floor(Math.max(0,people.findIndex(p=>p.id===selected))/pageSize());render();
  }};
}
