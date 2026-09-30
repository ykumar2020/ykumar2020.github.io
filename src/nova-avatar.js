import * as THREE from 'three';
export function createAvatar(canvas){
 let renderer;try{renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});}catch{document.querySelector('#avatar-fallback').hidden=false;return {update(){},dispose(){}};}
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setSize(420,420,false);renderer.outputColorSpace=THREE.SRGBColorSpace;
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(31,1,.1,40);camera.position.set(0,1.4,7.2);camera.lookAt(0,1.35,0);
 scene.add(new THREE.HemisphereLight(0xffe3e9,0x34335a,3));let light=new THREE.DirectionalLight(0xffd5df,4);light.position.set(-3,5,4);scene.add(light);light=new THREE.PointLight(0xff244c,22,10);light.position.set(2,2,-1);scene.add(light);
 const rig=new THREE.Group();scene.add(rig);const pearl=new THREE.MeshStandardMaterial({color:0xeed8de,metalness:.35,roughness:.32}),dark=new THREE.MeshStandardMaterial({color:0x1b2039,metalness:.6,roughness:.35}),purple=new THREE.MeshStandardMaterial({color:0xff4e6d,emissive:0xcc183b,emissiveIntensity:.6,metalness:.45,roughness:.25}),glow=new THREE.MeshBasicMaterial({color:0xffd9e0});
 function part(geo,mat,parent,x,y,z=0){let m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);parent.add(m);return m;}
 part(new THREE.CapsuleGeometry(.35,.55,8,20),dark,rig,0,1.43);part(new THREE.SphereGeometry(.34,24,20),pearl,rig,0,2.23);const visor=part(new THREE.SphereGeometry(.295,24,16),dark,rig,0,2.24,.16);visor.scale.set(1,.65,.55);
 const eyes=[-.12,.12].map(x=>{const e=part(new THREE.CapsuleGeometry(.026,.058,4,8),glow,rig,x,2.26,.319);return e;});
 const mouth=part(new THREE.BoxGeometry(.10,.018,.012),purple,rig,0,2.14,.326);
 const ears=[-1,1].map(s=>part(new THREE.SphereGeometry(.09,12,12),purple,rig,s*.36,2.25));
 const emblem=part(new THREE.TorusGeometry(.12,.015,8,24),purple,rig,0,1.6,.35);part(new THREE.SphereGeometry(.04,12,12),glow,rig,0,1.6,.355);
 const arms=[],forearms=[],legs=[];
 for(const s of [-1,1]){const shoulder=new THREE.Group();shoulder.position.set(s*.39,1.75,0);rig.add(shoulder);part(new THREE.SphereGeometry(.115,12,12),purple,shoulder,0,0);part(new THREE.CapsuleGeometry(.09,.3,6,12),pearl,shoulder,0,-.22);const elbow=new THREE.Group();elbow.position.y=-.43;shoulder.add(elbow);part(new THREE.SphereGeometry(.087,12,12),dark,elbow,0,0);part(new THREE.CapsuleGeometry(.075,.25,6,12),pearl,elbow,0,-.19);part(new THREE.SphereGeometry(.095,12,12),purple,elbow,0,-.39);arms.push(shoulder);forearms.push(elbow);
 const hip=new THREE.Group();hip.position.set(s*.19,1.01,0);rig.add(hip);part(new THREE.CapsuleGeometry(.105,.30,6,12),pearl,hip,0,-.23);part(new THREE.SphereGeometry(.10,12,12),purple,hip,0,-.47);part(new THREE.CapsuleGeometry(.08,.29,6,12),dark,hip,0,-.68);let shoe=part(new THREE.SphereGeometry(.135,16,12),pearl,hip,0,-.91,.055);shoe.scale.set(1,.6,1.55);legs.push(hip);}
 const pad=part(new THREE.TorusGeometry(.56,.018,8,60),purple,scene,0,.025);pad.rotation.x=-Math.PI/2;
 let visible=true;new IntersectionObserver(([e])=>{visible=e.isIntersecting;},{threshold:.05}).observe(canvas);
 let state={talking:false,walking:false,motion:true,level:0},last=0,disposed=false,handle;
 function frame(t){if(disposed)return;handle=requestAnimationFrame(frame);if(t-last<1000/30||document.hidden||!visible)return;last=t;const s=t/1000;let moving=state.motion,walk=moving&&state.walking,voice=state.talking;
 rig.position.y=moving?Math.sin(s*2)*.014+(walk?Math.abs(Math.sin(s*9))*.035:0):0;rig.rotation.y=walk?-.45:(moving?Math.sin(s*.6)*.1:0);
 legs.forEach((p,i)=>p.rotation.x=walk?Math.sin(s*9+i*Math.PI)*.45:0);
 arms.forEach((p,i)=>{p.rotation.x=walk?-Math.sin(s*9+i*Math.PI)*.35:voice&&moving?-.25-Math.sin(s*1.7+i)*.2:0;p.rotation.z=(i?1:-1)*(voice&&moving?.35+Math.sin(s*2+i)*.18:.1);});
 forearms.forEach((p,i)=>p.rotation.x=voice&&moving?-.6+Math.sin(s*2+i)*.18:-.12);
 eyes.forEach(e=>e.scale.y=moving&&(s%4.7)<.13?.12:1);mouth.scale.y=voice&&moving?1+Math.min(6,state.level*25):1;emblem.rotation.z=moving?s*.3:0;renderer.render(scene,camera);
 }handle=requestAnimationFrame(frame);
 canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();document.querySelector('#avatar-fallback').hidden=false;});
 return {update(v){Object.assign(state,v);},dispose(){disposed=true;cancelAnimationFrame(handle);renderer.dispose();}};
}
