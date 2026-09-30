import * as THREE from 'three';
import {mountGraphicsGallery} from './graphics-work.js';

import {createASILoom} from './asi-loom.js';
const CYAN=0xff344b, AMBER=0xff8066;
const TOPICS=['Trustworthy AI','Agentic AI','Multimodal AI','Education','AI Systems','Algorithms'];
const COLORS=[0xff324c,0xff705a,0xffa3ae,0xc94660,0xffc6bf,0xe57287];

/** Drop-in entry point. Static HTML and CSS remain the no-WebGL fallback. */
export function mountAcademicVisuals(){
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const fine=matchMedia('(pointer: fine)');
  const stages=[];
  let paused=reduce.matches, domain=0, network, activeId;
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
    const loom=createASILoom(s.scene,innerWidth<768);let t=0,px=0,py=0;
    s.onResize=(w,h)=>{s.camera.position.z=Math.max(5.8,2.15/(Math.tan(Math.PI/9)*(w/h)));};
    s.host.addEventListener('pointermove',e=>{if(paused||!fine.matches)return;const b=s.host.getBoundingClientRect();px=((e.clientX-b.left)/b.width-.5)*.25;py=((e.clientY-b.top)/b.height-.5)*.2;});
    s.host.addEventListener('pointerleave',()=>{px=py=0;});
    s.update=(time=t)=>{t=time;loom.update(t,px,py);};
  });
  mountGraphicsGallery(stage,inspect);

  const node=stage('node-scene',s=>{
    s.camera.position.set(0,.1,7.4);s.camera.lookAt(0,0,0);
    const group=new THREE.Group();s.scene.add(group);s.group=group;
    const geometry=new THREE.SphereGeometry(1,44,32),v=geometry.attributes.position;
    for(let i=0;i<v.count;i++){
      const x=v.getX(i),y=v.getY(i),z=v.getZ(i),theta=Math.atan2(z,x);
      const radial=1.15+.22*Math.cos(y*5)+.13*Math.sin(theta*3+y*2);
      v.setXYZ(i,x*radial,y*1.8,z*radial);
    }
    geometry.computeVertexNormals();
    const surface=new THREE.Mesh(geometry,new THREE.MeshBasicMaterial({color:0x3b0617,transparent:true,opacity:.2,side:THREE.DoubleSide,depthWrite:false}));group.add(surface);
    const wire=new THREE.LineSegments(new THREE.WireframeGeometry(geometry),new THREE.LineBasicMaterial({color:CYAN,transparent:true,opacity:.43}));group.add(wire);
    const points=new THREE.Points(geometry,new THREE.PointsMaterial({color:0xffb8bf,size:.025,transparent:true,opacity:.65}));group.add(points);
    const axisPoints=[new THREE.Vector3(0,-1.65,0),new THREE.Vector3(.16,-.75,0),new THREE.Vector3(-.12,.2,.08),new THREE.Vector3(.04,1.55,0)];
    const axisCurve=new THREE.CatmullRomCurve3(axisPoints);
    group.add(new THREE.Mesh(new THREE.TubeGeometry(axisCurve,64,.014,6,false),new THREE.MeshBasicMaterial({color:AMBER})));
    for(let i=0;i<7;i++){
      const y=-1.25+i*.4,origin=axisCurve.getPoint(i/8+.08);
      const theta=i*2.4,end=new THREE.Vector3(Math.cos(theta)*.82,y+.15,Math.sin(theta)*.82);
      group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([origin,end]),new THREE.LineBasicMaterial({color:0xff7b6b,transparent:true,opacity:.7})));
      const marker=new THREE.Mesh(new THREE.SphereGeometry(.035,8,6),new THREE.MeshBasicMaterial({color:AMBER}));marker.position.copy(origin);group.add(marker);
    }
    const ring=new THREE.Mesh(new THREE.TorusGeometry(2.2,.006,4,120),new THREE.MeshBasicMaterial({color:0x742536}));ring.rotation.x=Math.PI/2;ring.position.y=-1.9;s.scene.add(ring);
    let t=0;const parallax=new THREE.Vector2();
    s.canvas.addEventListener('pointermove',e=>{if(paused||!fine.matches||e.buttons)return;const r=s.canvas.getBoundingClientRect();parallax.set((e.clientX-r.left)/r.width-.5,(e.clientY-r.top)/r.height-.5);});
    s.canvas.addEventListener('pointerleave',()=>parallax.set(0,0));
    s.update=(time=t)=>{t=time;const r=s.userRotation||{x:.12,y:-.28};group.rotation.set(r.x+(paused?0:parallax.y*.04),r.y+t*.035+(paused?0:parallax.x*.07),0);wire.material.color.setHex(COLORS[domain]);};
    inspect(s);
  });

  const api={setDomain(index){domain=index;node?.update();node?.draw();},selectRecord(id){activeId=id;network?.highlight(id);},setRecords(records,onPick){
    if(!network){
      const s=stage('network-scene',s=>{
        s.camera.position.set(0,0,11.2);s.camera.lookAt(0,0,0);s.group=new THREE.Group();s.scene.add(s.group);
        s.onResize=(w,h)=>{s.camera.position.z=Math.max(11.2,5.1/(Math.tan(Math.PI/9)*(w/h)));};
        let t=0;s.update=(time=t)=>{t=time;const r=s.userRotation||{x:.12,y:-.28};s.group.rotation.set(r.x,r.y+t*.018,0);};inspect(s);
      });
      if(!s)return;
      network=s;network.highlight=(id)=>{for(const n of network.nodes||[]){n.scale.setScalar(n.userData.id===id?1.8:1);n.material.color.setHex(n.userData.id===id?0xffffff:n.userData.color);}network.draw();};
      network.pick=e=>{
        const rect=s.canvas.getBoundingClientRect(),mouse=new THREE.Vector2((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);
        const ray=new THREE.Raycaster();ray.setFromCamera(mouse,s.camera);
        const hit=ray.intersectObjects(network.nodes||[],false)[0];if(hit)network.onPick?.(hit.object.userData.id);
      };
    }
    network.onPick=onPick;
    // Dispose replaced geometries/materials when filters change.
    network.group.traverse(o=>{o.geometry?.dispose();if(o.material) o.material.dispose();});network.group.clear();network.nodes=[];
    const legend=document.querySelector('#network-legend');legend.replaceChildren();
    TOPICS.forEach((topic,topicIndex)=>{
      const cluster=records.filter(r=>r.topic===topic);if(!cluster.length)return;
      const color=COLORS[topicIndex],angle=topicIndex/6*Math.PI*2;
      const center=new THREE.Vector3(Math.cos(angle)*2.9,Math.sin(angle)*1.85,Math.sin(angle*2)*.65);
      const hub=new THREE.Mesh(new THREE.OctahedronGeometry(.16),new THREE.MeshBasicMaterial({color,wireframe:true}));hub.position.copy(center);network.group.add(hub);
      const span=document.createElement('span'),dot=document.createElement('i');dot.style.setProperty('--topic-color','#'+color.toString(16).padStart(6,'0'));dot.setAttribute('aria-hidden','true');span.append(dot,document.createTextNode(topic+' · '+['sphere','cube','tetrahedron','octahedron','icosahedron','cone'][topicIndex]+' · '+cluster.length));legend.append(span);
      cluster.forEach((record,i)=>{
        const a=i*2.399963,rr=.48+Math.sqrt(i)*.14;
        const position=center.clone().add(new THREE.Vector3(Math.cos(a)*rr,Math.sin(a)*rr,Math.sin(i*1.7)*.55));
        const point=new THREE.Mesh([()=>new THREE.SphereGeometry(.085,8,6),()=>new THREE.BoxGeometry(.14,.14,.14),()=>new THREE.TetrahedronGeometry(.12),()=>new THREE.OctahedronGeometry(.12),()=>new THREE.IcosahedronGeometry(.1),()=>new THREE.ConeGeometry(.09,.18,6)][topicIndex](),new THREE.MeshBasicMaterial({color}));point.position.copy(position);point.userData={id:record.id,color};network.group.add(point);network.nodes.push(point);
        const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints([center,position]),new THREE.LineBasicMaterial({color,transparent:true,opacity:.3}));network.group.add(line);
      });
    });
    network.host.dataset.records=String(records.length);
    network.resize();network.highlight(activeId);network.sync();
  }};
  return api;
}
