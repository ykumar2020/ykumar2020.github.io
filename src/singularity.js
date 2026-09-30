import * as THREE from 'three';
import {horizonModel} from '../labs/horizon-core.mjs';
export function mountSingularity(stage,inspect){
  const $=id=>document.getElementById(id),host=$('horizon-scene');if(!host)return;
  let model=horizonModel(),scroll=0,sceneAPI;
  const panel=$('horizon-lab'),reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const onScroll=()=>{const b=panel.getBoundingClientRect();scroll=Math.max(0,Math.min(1,(innerHeight-b.top)/(innerHeight+b.height)));};
  addEventListener('scroll',onScroll,{passive:true});onScroll();
  sceneAPI=stage('horizon-scene',s=>{
    s.camera.position.set(0,.3,10);s.camera.lookAt(0,0,0);s.group=new THREE.Group();s.scene.add(s.group);inspect(s);
    s.onResize=(w,h)=>{s.camera.position.z=Math.max(10,4.2/(Math.tan(Math.PI/9)*(w/h)));};
    const glow=new THREE.Mesh(new THREE.PlaneGeometry(8,8),new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,uniforms:{phase:{value:0}},vertexShader:'varying vec2 p;void main(){p=uv*2.-1.;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec2 p;uniform float phase;void main(){float r=length(p);float a=atan(p.y,p.x);float rim=exp(-45.*abs(r-.205));float halo=exp(-10.*abs(r-.23))*.23;float rays=pow(.5+.5*sin(a*7.+phase*.3+r*18.),5.)*.16*exp(-r*3.);float alpha=(rim+halo+rays)*smoothstep(.155,.21,r);gl_FragColor=vec4(.65,.10,1.,min(.85,alpha));}'}));glow.position.z=-.5;s.group.add(glow);
    const core=new THREE.Mesh(new THREE.SphereGeometry(.64,32,24),new THREE.MeshBasicMaterial({color:0x05030a}));s.group.add(core);
    const gate=new THREE.Mesh(new THREE.TorusGeometry(1.24,.018,8,120),new THREE.MeshBasicMaterial({color:0xde79ff}));gate.rotation.x=.25;s.group.add(gate);
    const arcs=new THREE.Group();s.group.add(arcs);
    for(let j=0;j<5;j++){const pts=Array.from({length:180},(_,i)=>{const a=i/179*Math.PI*2,r=1.05+j*.16;return new THREE.Vector3(Math.cos(a)*r,Math.sin(a)*r,.1*Math.sin(a*3+j));});const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),new THREE.LineBasicMaterial({color:j%2?0xbb78ff:0xa64dff,transparent:true,opacity:.7-j*.08}));line.rotation.x=j*.31;line.rotation.y=j*.27;arcs.add(line);}
    const xyz=new Float32Array(256*3),edgeXYZ=new Float32Array(256*6);
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(xyz,3));
    const nodes=new THREE.Points(geometry,new THREE.PointsMaterial({color:0xd1a3ff,size:.065,sizeAttenuation:true}));s.group.add(nodes);
    const edgesGeometry=new THREE.BufferGeometry();edgesGeometry.setAttribute('position',new THREE.BufferAttribute(edgeXYZ,3));
    const edges=new THREE.LineSegments(edgesGeometry,new THREE.LineBasicMaterial({color:0xa64dff,transparent:true,opacity:.3}));s.group.add(edges);
    const loops=new THREE.Group();s.group.add(loops);
    for(let i=0;i<8;i++){const ring=new THREE.Mesh(new THREE.TorusGeometry(.23,.009,5,36),new THREE.MeshBasicMaterial({color:0xd9b3ff,transparent:true,opacity:.7}));loops.add(ring);}
    let last=0;
    s.update=(time=last)=>{last=time;const count=model.agents,k=model.k,progress=reduced.matches?0:scroll;
      s.group.rotation.set(s.userRotation.x*.6,s.userRotation.y*.5,0);
      glow.material.uniforms.phase.value=time;arcs.rotation.z=time*.055;
      gate.material.color.setHex(model.held?0xe391ff:0xb56cff);gate.material.opacity=model.gate?1:.25;gate.material.transparent=true;
      for(let i=0;i<count;i++){const a=i*2.399963+time*.055,z=Math.sin(i*1.17+time*.1)*1.3,r=1.65+(1-k/9)*1.1+(.5+.5*Math.cos(time*.17+i*.73))*.9-progress*.35;
        xyz[i*3]=Math.cos(a)*r;xyz[i*3+1]=Math.sin(a)*r*.7;xyz[i*3+2]=z;
      }
      for(let i=0;i<count;i++){const parent=i===0?0:Math.floor((i-1)/2);for(let d=0;d<3;d++){edgeXYZ[i*6+d]=xyz[i*3+d];edgeXYZ[i*6+3+d]=i===0?0:xyz[parent*3+d];}}
      geometry.setDrawRange(0,count);geometry.attributes.position.needsUpdate=true;geometry.computeBoundingSphere();edgesGeometry.setDrawRange(0,count*2);edgesGeometry.attributes.position.needsUpdate=true;edgesGeometry.computeBoundingSphere();
      loops.visible=k>=5;loops.children.forEach((ring,i)=>{const a=i*Math.PI/4-time*.09;ring.position.set(Math.cos(a)*2,Math.sin(a)*1.5,Math.sin(a)*.5);ring.rotation.set(time*.12+i,i*.3,time*.07);});
    };
  });
  function render(){model=horizonModel(Number($('horizon-depth').value),Number($('horizon-review').value),$('horizon-gate').checked);$('horizon-depth-value').textContent=String(model.k);$('horizon-review-value').textContent=model.reviewMs+' ms';$('horizon-status').textContent=model.status;$('horizon-status').dataset.held=String(model.held);$('horizon-reasons').textContent=model.reasons.join(' ')||'Both modeled policy checks pass. This is not a general safety finding.';
    const values=[['Proposed agents',model.agents],['Aggregate action interval',model.intervalMs.toFixed(1)+' ms'],['Offered token rate (assumed)',model.assumedTokenRate.toFixed(0)+' tokens/s'],['Review load',model.load.toFixed(2)+'×'],['Actions permitted by model',model.executedActionsPerSecond.toFixed(2)+'/s'],['Unreviewed queue growth',model.backlogPerSecond.toFixed(2)+'/s']];
    $('horizon-metrics').replaceChildren(...values.flatMap(([label,value])=>{const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=label;dd.textContent=value;return [dt,dd];}));
    host.dataset.depth=String(model.k);host.dataset.held=String(model.held);sceneAPI?.update();sceneAPI?.draw();
  }
  ['horizon-depth','horizon-review','horizon-gate'].forEach(id=>$(id).addEventListener('input',render));
  $('horizon-reset').onclick=()=>{$('horizon-depth').value='2';$('horizon-review').value='400';$('horizon-gate').checked=true;render();};
  $('horizon-export').onclick=()=>{const url=URL.createObjectURL(new Blob([JSON.stringify(model,null,2)],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download='singularity-horizon-model.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};render();
}
