import {validateBenchmark} from '../labs/benchmark-core.mjs';
import * as THREE from 'three';
import {attentionExperiment} from '../labs/attention-core.mjs';
const $=id=>document.getElementById(id);
const node=(tag,text)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;return e;};
function download(value,name){const u=URL.createObjectURL(new Blob([JSON.stringify(value,null,2)],{type:'application/json'})),a=node('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);}
function table(head,rows){const t=node('table'),th=node('thead'),hr=node('tr');head.forEach(x=>{const c=node('th',x);c.scope='col';hr.append(c);});th.append(hr);t.append(th);const body=node('tbody');rows.forEach(r=>{const tr=node('tr');r.forEach((x,i)=>{const c=node(i===0?'th':'td',x);if(i===0)c.scope='row';tr.append(c);});body.append(tr);});t.append(body);return t;}

export function mountResearchWorkbench(stage,inspect){
  if(!$('live-workbench'))return;
  const input=$('attention-input'),layerPicker=$('attention-layer'),queryPicker=$('attention-query');let trace,attentionScene,barMesh;
  const tokenLabel=(c,i)=>`${i+1}: ${c===' '?'space':c}`;
  attentionScene=stage('attention-scene',s=>{
    s.camera.position.set(0,6,7);s.camera.lookAt(0,0,0);s.group=new THREE.Group();s.scene.add(s.group);
    const light=new THREE.HemisphereLight(0xffffff,0x132333,2);s.scene.add(light);
    let t=0;inspect(s);s.update=(time=t)=>{t=time;s.group.rotation.y=s.userRotation.y;};
  });
  function renderAttention(){
    trace=attentionExperiment(input.value);const {tokens}=trace,layer=Number(layerPicker.value);
    const selected=Math.min(Number(queryPicker.value)||0,Math.max(0,tokens.length-1));queryPicker.replaceChildren(...tokens.map((t,i)=>{const o=node('option',tokenLabel(t,i));o.value=String(i);return o;}));queryPicker.value=String(selected);queryPicker.disabled=!tokens.length;
    $('attention-message').textContent=tokens.length?`${tokens.length} character tokens, two blocks, one attention head per block, width 8. Inspecting layer ${layer+1}.`:'Type a short string to compute the matrices.';
    const holder=$('attention-heatmap');holder.replaceChildren();$('attention-matrices').replaceChildren();
    if(attentionScene){if(barMesh){attentionScene.group.remove(barMesh);barMesh.geometry.dispose();barMesh.material.dispose();barMesh=null;}}
    if(!tokens.length){$('attention-query-result').textContent='';attentionScene?.draw();return;}
    const result=trace.layers[layer],n=tokens.length;
    const heat=table(['Query / key',...tokens.map(tokenLabel)],result.attention.map((r,i)=>[tokenLabel(tokens[i],i),...r.map(v=>v.toFixed(3))]));
    heat.setAttribute('aria-label',`Layer ${layer+1} causal self-attention probabilities`);
    heat.querySelectorAll('tbody tr').forEach((tr,i)=>tr.querySelectorAll('td').forEach((td,j)=>{const p=result.attention[i][j];td.style.background=j>i?'#090d15':`rgb(${Math.round(12+p*20)},${Math.round(25+p*72)},${Math.round(40+p*78)})`;td.title=`Query ${i+1}, key ${j+1}: ${p.toFixed(6)}${j>i?' (future position masked)':''}`;}));holder.append(heat);
    const probs=result.attention[selected];$('attention-query-result').textContent=`Query ${tokenLabel(tokens[selected],selected)}: sum of attention weights = ${probs.reduce((a,b)=>a+b,0).toFixed(6)}. Future keys receive zero weight.`;
    for(const matrix of ['Q','K','V']){const section=node('div');section.append(node('h5',`${matrix} = normalized input × W${matrix}`),table(['Token',...Array.from({length:8},(_,i)=>`d${i+1}`)],result[matrix].map((r,i)=>[tokenLabel(tokens[i],i),...r.map(v=>v.toFixed(3))])));$('attention-matrices').append(section);}
    if(attentionScene){barMesh=new THREE.InstancedMesh(new THREE.BoxGeometry(.9,1,.9),new THREE.MeshStandardMaterial({roughness:.5}),n*n);const dummy=new THREE.Object3D();
      result.attention.forEach((r,i)=>r.forEach((v,j)=>{dummy.position.set((j-(n-1)/2)*3.7/n,v*.8,(i-(n-1)/2)*3.7/n);dummy.scale.set(3.7/n,Math.max(.012,v*1.6),3.7/n);dummy.updateMatrix();barMesh.setMatrixAt(i*n+j,dummy.matrix);barMesh.setColorAt(i*n+j,new THREE.Color(j>i?0x182435:0xea001c));}));attentionScene.group.add(barMesh);attentionScene.draw();}
  }
  [input,layerPicker,queryPicker].forEach(e=>e.addEventListener(e===input?'input':'change',renderAttention));$('attention-export').onclick=()=>download(trace,'attention-trace.json');renderAttention();

  mountBenchmarks();
  fetch('data/workbench-checks.json').then(r=>{if(!r.ok)throw Error();return r.json();}).then(report=>{
    $('workbench-checks').textContent=`Local calculation checks: ${report.passed}/${report.total} passed. Run: ${report.testedAt}. These checks cover the browser demos, not the linked papers or production security.`;
  }).catch(()=>{$('workbench-checks').textContent='Check report unavailable. Use the linked test source to reproduce the checks.';});
}

function mountBenchmarks(){
  let data=null,imported=false;const select=$('benchmark-language');
  function render(){if(!data)return;const rows=data.records.filter(r=>select.value==='All'||r.language===select.value);
    $('benchmark-status').textContent=`${rows.length} recorded results displayed. ${imported?'User-supplied import; provenance not independently verified.':'Author-manuscript pilot snapshot; not a live API benchmark.'}`;
    $('benchmark-provenance').textContent=`${String(data.sourceTitle||'User-supplied file').slice(0,200)}. Run dates: ${String(data.runDates||'Not supplied').slice(0,100)}. ${String(data.limitations||'No limitations supplied with this file.').slice(0,1000)}`;
    $('benchmark-table').replaceChildren(table(['Model','Language','ARSS ↑ worse','Latency (s)','Refusal (%)','Prompts'],rows.map(r=>[r.model,r.language,r.arss.toFixed(1),r.latencySeconds.toFixed(1),r.refusalPercent.toFixed(0),String(r.prompts)])));
    const ns='http://www.w3.org/2000/svg',svg=document.createElementNS(ns,'svg');svg.setAttribute('viewBox','0 0 720 380');svg.setAttribute('role','img');svg.setAttribute('aria-label','Recorded latency versus ARSS. Lower ARSS means less severe responses; lower latency means faster responses. Exact values follow in the table.');
    function el(tag,attrs,text){const e=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,v));if(text)e.textContent=text;svg.append(e);return e;}
    const max=Math.max(10,...rows.map(r=>r.latencySeconds))*1.1;const x=v=>60+v/max*610,y=v=>310-v/6*270;
    for(let v=0;v<=6;v++){el('line',{x1:60,y1:y(v),x2:670,y2:y(v),stroke:'#5c3439'});el('text',{x:42,y:y(v)+5,fill:'#f0e2e4','font-size':14},String(v));}
    for(let i=0;i<=4;i++){const v=max*i/4;el('text',{x:x(v),y:333,fill:'#f0e2e4','font-size':13,'text-anchor':'middle'},v.toFixed(0));}
    el('text',{x:360,y:370,fill:'#f0e2e4','font-size':16,'text-anchor':'middle'},'Mean latency (seconds)');el('text',{x:60,y:22,fill:'#ffc18c','font-size':15},'ARSS 0–6 · higher = less secure');
    const labelPositions=[];
    const color={English:'#ff8f9c',Spanish:'#ffb76b',Chinese:'#ff8ca3'};
    rows.forEach(r=>{const dot=el(r.language==='Spanish'?'rect':'circle',r.language==='Spanish'?{x:x(r.latencySeconds)-5,y:y(r.arss)-5,width:10,height:10,fill:color[r.language]}:{cx:x(r.latencySeconds),cy:y(r.arss),r:r.language==='Chinese'?7:5,fill:r.language==='Chinese'?'none':color[r.language],stroke:color[r.language],'stroke-width':2});const t=document.createElementNS(ns,'title');t.textContent=`${r.model} · ${r.language}: ARSS ${r.arss}, ${r.latencySeconds}s, refusal ${r.refusalPercent}%`;dot.append(t);if(rows.length<=5){const lx=x(r.latencySeconds)+10;let ly=y(r.arss)-8;while(labelPositions.some(p=>Math.abs(p.x-lx)<110&&Math.abs(p.y-ly)<18))ly+=18;labelPositions.push({x:lx,y:ly});if(Math.abs(ly-y(r.arss))>12)el('line',{x1:x(r.latencySeconds),y1:y(r.arss),x2:lx,y2:ly-4,stroke:color[r.language]});el('text',{x:lx,y:ly,fill:'#f0e2e4','font-size':12},r.model);}});
    $('benchmark-chart').replaceChildren(svg);
  }
  async function load(){try{const r=await fetch('data/drag-pilot.json',{cache:'no-store'});if(!r.ok)throw Error('Snapshot unavailable.');data=validateBenchmark(await r.json());imported=false;$('benchmark-error').textContent='';render();}catch(e){$('benchmark-error').textContent=e.message;}}
  select.onchange=render;$('benchmark-refresh').onclick=load;$('benchmark-import').onchange=async e=>{const file=e.target.files[0];if(!file)return;try{if(file.size>1000000)throw Error('File exceeds the 1 MB limit.');const next=validateBenchmark(JSON.parse(await file.text()));data=next;imported=true;$('benchmark-error').textContent='';render();}catch(error){$('benchmark-error').textContent='Import rejected: '+error.message;}};load();
}
