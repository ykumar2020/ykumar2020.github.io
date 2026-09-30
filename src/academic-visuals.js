import * as THREE from 'three';
import {mountGraphicsGallery} from './graphics-work.js';
import {mountConnectomeImages} from './connectome-images.js';
import {createCollaborationNetwork} from './collaboration-network.js';

import {createHeroWireframe} from './hero-wireframe.js';
const CYAN=0xff344b, AMBER=0xff8066;

/** Drop-in entry point. Static HTML and CSS remain the no-WebGL fallback. */
export function mountAcademicVisuals(){
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const fine=matchMedia('(pointer: fine)');
  const stages=[];
  let paused=reduce.matches;
  const toggle=document.querySelector('#motion-toggle');
  function updateToggle(){document.querySelectorAll('#motion-toggle,[data-motion-toggle]').forEach(b=>{b.textContent=paused?'Resume ambient motion':'Pause ambient motion';b.setAttribute('aria-pressed',String(paused));});}
  toggle.hidden=false;updateToggle();
  toggle.addEventListener('click',()=>{paused=!paused;updateToggle();stages.forEach(s=>s.sync());});
  reduce.addEventListener('change',()=>{paused=reduce.matches;updateToggle();stages.forEach(s=>s.sync());});
  document.addEventListener('visibilitychange',()=>stages.forEach(s=>s.sync()));

  function stage(id,build){
    const host=document.getElementById(id);if(!host)return null;
    let renderer;
    try{renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});}
    catch{host.dataset.state='fallback';return null;}
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));
    renderer.setClearColor(0x05070b,0);
    const canvas=renderer.domElement;canvas.setAttribute('aria-hidden','true');host.append(canvas);
    const scene=new THREE.Scene(), camera=new THREE.PerspectiveCamera(40,1,.1,180);
    let visible=false,lost=false,raf=0,last=0,time=0,frames=0;
    const api={host,canvas,renderer,scene,camera,update:()=>{},sync,draw,resize,group:null};
    build(api);
    const controls=document.querySelector(`[data-controls="${id}"]`);
    if(controls){
      controls.hidden=false;
      const motionButton=document.createElement('button');motionButton.type='button';motionButton.dataset.motionToggle='';
      motionButton.addEventListener('click',()=>{paused=!paused;updateToggle();stages.forEach(s=>s.sync());});
      controls.append(motionButton);updateToggle();
    }
    host.dataset.state='ready';host.dataset.frames='0';
    function draw(){if(lost||document.hidden||!host.clientWidth||!host.clientHeight)return;renderer.render(scene,camera);host.dataset.frames=String(++frames);}
    function animate(now){
      raf=0;if(!visible||paused||lost||document.hidden)return;
      const delta=now-last;
      if(delta>=1000/30){time+=Math.min(delta/1000,.06);last=now;api.update(time);draw();}
      raf=requestAnimationFrame(animate);
    }
    function sync(){
      if(raf)cancelAnimationFrame(raf);raf=0;
      const running=visible&&!paused&&!lost&&!document.hidden;
      host.dataset.motion=running?'playing':'paused';host.dataset.visible=String(visible);
      if(running){last=performance.now();raf=requestAnimationFrame(animate);}
      else if(visible&&!lost&&!document.hidden){api.update(time);draw();}
    }
    function resize(){
      const w=host.clientWidth,h=host.clientHeight;if(!w||!h||lost)return;
      camera.aspect=w/h;camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));
      renderer.setSize(w,h,false);api.onResize?.(w,h);draw();
    }
    new ResizeObserver(resize).observe(host);
    new IntersectionObserver(([entry])=>{visible=entry.isIntersecting&&entry.intersectionRatio>=.05;sync();},{threshold:.05}).observe(host);
    canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;host.dataset.state='fallback';if(controls)controls.hidden=true;sync();});
    canvas.addEventListener('webglcontextrestored',()=>{lost=false;host.dataset.state='ready';if(controls)controls.hidden=false;resize();sync();});
    api.update(0);resize();stages.push(api);return api;
  }

  function inspect(s){
    let down=null,moved=false,rx=.12,ry=-.28;
    s.userRotation={x:rx,y:ry};
    const controls=document.querySelector(`[data-controls="${s.host.id}"]`);
    function move(x,y){s.userRotation.x=THREE.MathUtils.clamp(x,-1.1,1.1);s.userRotation.y=y;s.update();s.draw();}
    controls?.addEventListener('click',e=>{
      const action=e.target.closest('[data-turn]')?.dataset.turn;
      const r=s.userRotation;
      if(action==='left')move(r.x,r.y-.25);if(action==='right')move(r.x,r.y+.25);
      if(action==='up')move(r.x-.2,r.y);if(action==='down')move(r.x+.2,r.y);
      if(action==='reset')move(rx,ry);
    });
    s.canvas.addEventListener('pointerdown',e=>{if(e.button!==0)return;down={x:e.clientX,y:e.clientY,rx:s.userRotation.x,ry:s.userRotation.y};moved=false;});
    s.canvas.addEventListener('pointermove',e=>{
      if(!down)return;const dx=e.clientX-down.x,dy=e.clientY-down.y;
      if(Math.abs(dx)+Math.abs(dy)>5)moved=true;
      if(e.pointerType==='touch'&&Math.abs(dy)>Math.abs(dx))return;
      if(moved){s.canvas.setPointerCapture(e.pointerId);move(down.rx+dy*.005,down.ry+dx*.005);}
    });
    s.canvas.addEventListener('pointerup',e=>{if(down&&!moved)s.pick?.(e);down=null;if(s.canvas.hasPointerCapture(e.pointerId))s.canvas.releasePointerCapture(e.pointerId);});
    s.canvas.addEventListener('pointercancel',()=>{down=null;});
    s.canvas.addEventListener('pointerleave',()=>{if(!moved)down=null;});
  }

  stage('grid-scene',s=>{
    s.camera.position.set(0,6.8,15);s.camera.lookAt(0,0,-14);
    s.scene.fog=new THREE.FogExp2(0x05070b,.025);
    const grid=new THREE.GridHelper(160,80,0xff7180,0x7d172b);grid.position.z=-36;
    grid.material.transparent=true;grid.material.opacity=.85;s.scene.add(grid);
    // Long emissive routes make the grid read as a luminous environment.
    for(const x of [-12,-6,6,12]){
      const route=new THREE.Mesh(new THREE.BoxGeometry(.065,.02,100),new THREE.MeshBasicMaterial({color:x<0?0xff1838:0xff442c}));route.position.set(x,.04,-32);s.scene.add(route);
      const glow=new THREE.Mesh(new THREE.PlaneGeometry(.38,100),new THREE.MeshBasicMaterial({color:x<0?0xff1838:0xff442c,transparent:true,opacity:.12,depthWrite:false,blending:THREE.AdditiveBlending}));glow.rotation.x=-Math.PI/2;glow.position.copy(route.position);s.scene.add(glow);
    }
    const horizon=new THREE.Mesh(new THREE.PlaneGeometry(160,.055),new THREE.MeshBasicMaterial({color:CYAN,transparent:true,opacity:.6}));
    horizon.position.set(0,.04,-47);horizon.rotation.x=-Math.PI/2;s.scene.add(horizon);
    const packets=[];
    for(let i=0;i<22;i++){
      const p=new THREE.Mesh(new THREE.BoxGeometry(.045,.045,1.7+(i%4)*.5),new THREE.MeshBasicMaterial({color:i%7===0?AMBER:CYAN,transparent:true,opacity:.6}));
      p.position.set((i%13-6)*2,.07,-(i*7)%90);s.scene.add(p);packets.push(p);
    }
    let targetX=0,targetY=0,t=0;
    document.querySelector('.hero-shell').addEventListener('pointermove',e=>{if(paused||!fine.matches)return;targetX=(e.clientX/innerWidth-.5)*1.1;targetY=(e.clientY/innerHeight-.5)*.4;});
    document.querySelector('.hero-shell').addEventListener('pointerleave',()=>{targetX=targetY=0;});
    s.update=(time=t)=>{t=time;packets.forEach((p,i)=>{p.position.z=((t*1.8+i*7)%96)-84;p.material.opacity=.35+.25*Math.sin(t*.8+i);});s.camera.position.x+=(targetX-s.camera.position.x)*.025;s.camera.position.y+=(6.8+targetY-s.camera.position.y)*.025;s.camera.lookAt(0,0,-14);};
  });

  stage('hero-art-scene',s=>{
    s.camera.position.set(0,0,5.8);s.camera.lookAt(0,0,0);
    const loom=createHeroWireframe(s.scene);let t=0,px=0,py=0;
    s.onResize=(w,h)=>{s.camera.position.z=Math.max(5.8,2.15/(Math.tan(Math.PI/9)*(w/h)));};
    document.querySelector('#home').addEventListener('pointermove',e=>{if(paused||!fine.matches)return;const b=document.querySelector('#home').getBoundingClientRect();px=((e.clientX-b.left)/b.width-.5)*.25;py=((e.clientY-b.top)/b.height-.5)*.2;});
    document.querySelector('#home').addEventListener('pointerleave',()=>{px=py=0;});
    s.update=(time=t)=>{t=time;loom.update(t,px,py);};
  });
  mountGraphicsGallery(stage,inspect);
  mountConnectomeImages(stage);

  const collaboration=createCollaborationNetwork(stage);
  return {selectRecord(id){collaboration.highlight(id);},setRecords(records,onPick){collaboration.setRecords(records,onPick);}};
}
