import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

// Actual EM-derived triangulated surfaces. No image displacement or theme tint.
export function mountConnectomeImages(stage){
 document.querySelectorAll('.connectome-scene').forEach(host=>{
  const observer=new IntersectionObserver(async([entry])=>{
   if(!entry.isIntersecting)return;observer.disconnect();
   const card=host.closest('.connectome-study'),select=card.querySelector('[data-neuron]');
   let tiltX=0,tiltY=0,zoom=1,clock=0,angle=0,rotating=true,drag,meshes=[];
   host.dataset.asset='loading';
   const s=stage(host.id,s=>{
    s.group=new THREE.Group();s.scene.add(s.group);s.camera.position.set(0,0,6.5);
    s.scene.add(new THREE.HemisphereLight(0xffffff,0x737373,2));
    const light=new THREE.DirectionalLight(0xffffff,2);light.position.set(-2,3,5);s.scene.add(light);
    s.onResize=(w,h)=>{s.camera.position.z=Math.max(6.5,2.5/(Math.tan(Math.PI/9)*(w/h)))/zoom;};
    s.update=(time=clock)=>{const dt=Math.max(0,Math.min(time-clock,.06));clock=time;if(rotating)angle=(angle+dt*Math.PI/30)%(Math.PI*2);s.group.rotation.set(tiltX,tiltY+angle,0);host.dataset.rotation=angle.toFixed(5);host.dataset.autoRotate=String(rotating);};
   });
   if(!s){host.dataset.asset='failed';return;}
   const spin=document.createElement('button');spin.type='button';spin.dataset.brainRotate='';
   function updateSpin(){spin.textContent=rotating?'Pause rotation':'Resume rotation';spin.setAttribute('aria-pressed',String(rotating));host.dataset.autoRotate=String(rotating);}
   updateSpin();card.querySelector('[data-controls]').prepend(spin);
   spin.addEventListener('click',()=>{rotating=!rotating;updateSpin();});
   function redraw(){s.update();s.resize();}
   try{
    const [gltf,manifest]=await Promise.all([new GLTFLoader().loadAsync(host.dataset.mesh),fetch('assets/connectomes/meshes.json').then(r=>{if(!r.ok)throw Error('Manifest unavailable');return r.json();})]);
    const dataset=manifest.datasets.find(d=>d.key===host.dataset.dataset);
    gltf.scene.traverse(node=>{if(node.isMesh){node.material.side=THREE.DoubleSide;node.material.roughness=.7;node.material.metalness=0;meshes.push(node);}});
    s.group.add(gltf.scene);
    let triangles=0;meshes.forEach(m=>triangles+=(m.geometry.index?.count||m.geometry.attributes.position.count)/3);
    host.dataset.triangles=String(triangles);host.dataset.meshCount=String(meshes.length);host.dataset.palette='multicolor';
    dataset.cells.forEach(cell=>{const option=document.createElement('option');option.value='seg_'+cell.id;option.textContent=cell.label;select.append(option);});
    select.addEventListener('change',()=>{meshes.forEach(m=>m.visible=select.value==='all'||m.name===select.value);host.dataset.selection=select.value;s.draw();});
    card.querySelector('[data-mesh-mode]').addEventListener('change',e=>{meshes.forEach(m=>m.material.wireframe=e.target.value==='wire');host.dataset.renderMode=e.target.value;s.draw();});
    host.dataset.asset='loaded';s.update();s.resize();
    card.querySelectorAll('.connectome-settings input,.connectome-settings select').forEach(el=>el.disabled=false);
   }catch(err){host.dataset.state='fallback';host.dataset.asset='failed';card.querySelector('[data-controls]').hidden=true;card.querySelector('[data-mesh-status]').textContent='3D loading unavailable. The reference illustration and downloadable mesh remain available.';}
   card.querySelector('[data-controls]').addEventListener('click',e=>{
    const action=e.target.closest('[data-tilt]')?.dataset.tilt;
    if(action==='left')tiltY-=.2;if(action==='right')tiltY+=.2;
    if(action==='reset'){tiltX=tiltY=angle=0;zoom=1;card.querySelector('[data-image-zoom]').value='100';}
    if(action)redraw();
   });
   card.querySelector('[data-image-zoom]').addEventListener('input',e=>{zoom=Number(e.target.value)/100;redraw();});
   s.canvas.addEventListener('pointerdown',e=>{if(e.button!==0)return;rotating=false;updateSpin();drag={x:e.clientX,y:e.clientY,tx:tiltX,ty:tiltY};});
   s.canvas.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(e.pointerType==='touch'&&Math.abs(dy)>Math.abs(dx))return;if(Math.abs(dx)+Math.abs(dy)>5)s.canvas.setPointerCapture(e.pointerId);tiltY=drag.ty+dx*.006;tiltX=THREE.MathUtils.clamp(drag.tx+dy*.006,-1.4,1.4);redraw();});
   for(const event of ['pointerup','pointercancel','lostpointercapture'])s.canvas.addEventListener(event,()=>{drag=null;});
   s.canvas.addEventListener('pointerleave',e=>{if(!s.canvas.hasPointerCapture(e.pointerId))drag=null;});
   s.canvas.addEventListener('webglcontextlost',()=>card.querySelectorAll('.connectome-settings input,.connectome-settings select').forEach(el=>el.disabled=true));
   s.canvas.addEventListener('webglcontextrestored',()=>card.querySelectorAll('.connectome-settings input,.connectome-settings select').forEach(el=>el.disabled=host.dataset.asset!=='loaded'));
  },{rootMargin:'200px'});observer.observe(host);
 });
}
