import * as THREE from 'three';
import {createRecursiveStudy} from './recursive-studies.js';

// Browser adaptations of Julie Kumar's supplied Processing / C++ graphics studies.
// Original files and their attribution comments are retained in graphics/sources.
export const WORKS={
  torus:{title:'One torus. Four ways to see it.',tag:'05 / C++ · OpenGL · Parametric geometry',description:'A surface built from two angles. Compare the triangle wireframe, interpolated vertex colors with and without an index buffer, and a checker texture.',note:'Browser adaptation of Torus.cpp and torus_demo.cc. The source radii, 64 × 40 subdivision grid, periodic RGB formula and vertex-lighting calculation are retained. The supplied project uses a checkerboard when its texture file is absent.',source:'graphics/sources/torus-source.zip',label:'Download C++ source',options:[['wire','Wireframe'],['nonindexed','Gouraud · non-indexed'],['indexed','Gouraud · indexed'],['texture','Checker texture']]},
  swirl:{title:'A sphere written in light.',tag:'04 / C++ · OpenGL · GLSL',description:'Latitude and longitude become a living color field. Change point density to reveal how sampling changes the surface, while the original swirl shader varies color over time.',note:'Browser adaptation of SwirlSphere and swirl.frag. Preserves the spherical point construction, sinusoidal RGB channels, grid mask and hashed reveal. Density is manually controlled here instead of increasing automatically.',source:'graphics/sources/swirl-source.zip',label:'Download C++ / GLSL source',options:[['30','30 × 60 points'],['90','90 × 180 points'],['150','150 × 300 points']]},
  fractal:{title:'Small rules. Intricate worlds.',tag:'03 / Processing · Recursion · 3D',description:'Inspect the Sierpiński tetrahedron, Koch snowflake, and branching fern study. Each repeated rule grows a different geometric structure.',note:'Browser adaptation of the three acts in hw3_JK_pde.pde. Recursion is bounded for browser performance. The fern is a branching construction; the source identifies it as a work in progress, not a finished Barnsley IFS implementation.',source:'graphics/sources/recursive-fractals.pde',label:'Download Processing source',options:[['pyramid','Sierpiński tetrahedron'],['snowflake','Koch snowflake'],['fern','Branching fern · WIP']]},
  solar:{title:'Motion within motion.',tag:'02 / Processing · Hierarchical transforms',description:'Follow Mercury, Venus, Earth and the Moon. The Earth–Moon hierarchy combines revolution with local motion; speed controls expose the different periods.',note:'Stylized browser adaptation of JK_HW2.pde. Uses the source periods and eccentric-orbit formulas with exaggerated object sizes and distances. Smooth materials replace the original image textures. This is a teaching model, not an ephemeris or a scale model.',source:'graphics/sources/solar-system-source.zip',label:'Download Processing source',options:[['2','2 simulated days / second'],['20','20 simulated days / second'],['60','60 simulated days / second']]},
  fireworks:{title:'Collision becomes color.',tag:'01 / Processing · Collision detection · Particles',description:'Neon balls rebound from the boundary. When two touch, both disappear into rainbow particles. Restart the excerpt to replay the collision sequence.',note:'Browser excerpt from JulieK_HW1.pde: ball collisions and particle bursts. This compact preview starts with 16 balls; the full source also includes gradual spawning, configuration and the steering Golden Snitch game.',source:'graphics/sources/collision-fireworks.pde',label:'Download full Processing game',options:[['normal','Normal speed'],['slow','Slow motion']]},
  raytrace:{title:'Light, traced one ray at a time.',tag:'06 / C++ · Ray tracing · Colab',description:'A saved Bézier camera preview from my ray-tracing project. The linked notebook provides a C++ renderer with sphere materials, a BVH, OpenMP, camera-path controls and FFmpeg output.',note:'Saved project render, not a fresh execution of the linked notebook. The notebook retains Peter Shirley / Ray Tracing in One Weekend attribution and CC0 notices in its foundation code. Video is silent; use the native player to play, pause or scrub.',source:'https://colab.research.google.com/drive/19o2yg5X8a--gTWolkI2SMQD2h-O9rJ0W?usp=sharing',label:'Open my Colab notebook',options:[]}
};

export function torusGeometry(indexed=true){
  const positions=[],colors=[],uvs=[],indices=[];
  for(let i=0;i<=64;i++)for(let j=0;j<=40;j++){
    const u=i/64*Math.PI*2,v=j/40*Math.PI*2,R=.72,r=.24;
    positions.push((R+r*Math.cos(v))*Math.cos(u),(R+r*Math.cos(v))*Math.sin(u),r*Math.sin(v));
    colors.push(.65+.35*Math.cos(u),.045+.15*(.5+.5*Math.cos(v+2.0943951)),.08+.16*(.5+.5*Math.cos(u+v+4.1887902)));uvs.push(i/64,j/40);
  }
  for(let i=0;i<64;i++)for(let j=0;j<40;j++){const a=i*41+j,b=(i+1)*41+j;indices.push(a,b,a+1,a+1,b,b+1);}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));g.setIndex(indices);g.computeVertexNormals();
  if(indexed)return g;const expanded=g.toNonIndexed();g.dispose();return expanded;
}

export function createHeroDisc(scene){
  const group=new THREE.Group();scene.add(group);
  const g=torusGeometry();
  const mesh=new THREE.Mesh(g,new THREE.MeshBasicMaterial({color:0x07121b}));group.add(mesh);
  const lattice=new THREE.LineSegments(new THREE.WireframeGeometry(g),new THREE.LineBasicMaterial({color:0x00eeff,transparent:true,opacity:.22}));group.add(lattice);
  for(const radius of [.49,.72,.95]){
    const curve=new THREE.EllipseCurve(0,0,radius,radius,0,Math.PI*2);
    const points=curve.getPoints(160).map(p=>new THREE.Vector3(p.x,p.y,.12));
    for(const [size,opacity] of [[.017,1],[.041,.13],[.075,.04]]){
      const path=new THREE.CatmullRomCurve3(points,true);
      group.add(new THREE.Mesh(new THREE.TubeGeometry(path,160,size,5,true),new THREE.MeshBasicMaterial({color:radius===.72?0xff9900:0xff344c,transparent:opacity<1,opacity,blending:THREE.AdditiveBlending,depthWrite:false})));
    }
  }
  const ticks=[];
  for(let i=0;i<64;i++){const a=i/64*Math.PI*2;for(const r of [1.08,1.08+(i%4===0?.075:.027)])ticks.push(Math.cos(a)*r,Math.sin(a)*r,0);}
  const geom=new THREE.BufferGeometry();geom.setAttribute('position',new THREE.Float32BufferAttribute(ticks,3));group.add(new THREE.LineSegments(geom,new THREE.LineBasicMaterial({color:0x65bbc8})));
  return group;
}

export function mountGraphicsGallery(stage,inspect){
  const root=document.querySelector('#graphics');if(!root)return;
  root.querySelectorAll('.embedded-scene').forEach(host=>{
    const initialize=()=>{
    const article=host.closest('article'),key=host.dataset.work;
    let mode=host.dataset.mode,controller;
    const s=stage(host.id,s=>{
      s.camera.position.set(0,0,4.1);s.camera.lookAt(0,0,0);
      s.group=new THREE.Group();s.scene.add(s.group);
      s.onResize=(w,h)=>{s.camera.position.z=Math.max(4.1,2.2/(Math.tan(Math.PI/9)*(w/h)));};
      let t=0;s.update=(time=t)=>{const dt=Math.max(0,Math.min(time-t,.06));t=time;const r=s.userRotation||{x:.12,y:-.28};s.group.rotation.set(key==='fireworks'?0:r.x+.22,key==='fireworks'?0:r.y+(key==='fractal'?0:t*.09),0);controller?.update(t,dt);if(key==='fractal'&&controller){article.querySelector('.graphics-readout').textContent=controller.readout;host.dataset.recursion=controller.phase.toFixed(3);const slider=article.querySelector('[data-recursion-depth]');if(slider&&controller.automatic)slider.value=String(controller.phase);}};
      inspect(s);
    });
    function build(){
      if(!s)return;
      s.group.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});s.group.clear();
      controller=createWork(key,mode,s.group);article.querySelector('.graphics-readout').textContent=controller.readout;
      host.dataset.mode=mode;s.update();s.resize();
    }
    const select=article.querySelector('select');
    if(select){select.disabled=!s;select.addEventListener('change',()=>{mode=select.value;build();});}
    article.querySelector('[data-restart]')?.addEventListener('click',build);
    s?.canvas.addEventListener('webglcontextlost',()=>{if(select)select.disabled=true;});
    s?.canvas.addEventListener('webglcontextrestored',()=>{if(select)select.disabled=false;});
    build();
    if(key==='fractal'&&s&&controller){
      const label=document.createElement('label');label.className='embedded-mode';label.textContent='Recursion depth';
      const slider=document.createElement('input');slider.type='range';slider.min='0';slider.max=controller.max;slider.step='0.01';slider.value=controller.max;slider.dataset.recursionDepth='';label.append(slider);
      const play=document.createElement('button');play.type='button';play.className='button secondary';play.textContent='Hold recursion';play.setAttribute('aria-pressed','true');
      slider.addEventListener('input',()=>{controller.setLevel(Number(slider.value));play.textContent='Animate recursion';play.setAttribute('aria-pressed','false');s.update();s.draw();});
      play.addEventListener('click',()=>{controller.toggle();play.textContent=controller.automatic?'Hold recursion':'Animate recursion';play.setAttribute('aria-pressed',String(controller.automatic));});
      const controls=document.createElement('div');controls.className='recursion-controls';controls.append(label,play);article.querySelector('.embedded-copy').prepend(controls);
      s.canvas.addEventListener('webglcontextlost',()=>{slider.disabled=true;play.disabled=true;});
      s.canvas.addEventListener('webglcontextrestored',()=>{slider.disabled=false;play.disabled=false;});
    }
    };
    const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){observer.disconnect();initialize();}},{rootMargin:'200px'});observer.observe(host);
  });
  const video=root.querySelector('video');
  new IntersectionObserver(([e])=>{if(!e.isIntersecting)video.pause();},{threshold:.05}).observe(video);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)video.pause();});
}

function createWork(key,mode,group){
  if(key==='torus'){
    const g=torusGeometry(mode!=='nonindexed');
    let material;
    if(mode==='wire')material=new THREE.MeshBasicMaterial({color:0xff344c,wireframe:true});
    else if(mode==='texture')material=new THREE.ShaderMaterial({side:THREE.DoubleSide,vertexShader:'varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec2 vUv;void main(){float a=mod(floor(vUv.x*16.)+floor(vUv.y*8.),2.);gl_FragColor=vec4(mix(vec3(.09,.015,.035),vec3(1.,.15,.25),a),1.);}' });
    else material=new THREE.ShaderMaterial({vertexColors:true,side:THREE.DoubleSide,vertexShader:'varying vec3 lit;void main(){vec3 n=normalize(normalMatrix*normal);float d=max(dot(n,normalize(vec3(.6,-.85,-.5))),0.);lit=color*(.25+.75*d);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec3 lit;void main(){gl_FragColor=vec4(lit,1.);}' });
    group.add(new THREE.Mesh(g,material));return{update(){},readout:`5,120 triangles · ${g.attributes.position.count.toLocaleString()} vertex records · ${g.index?'15,360 indices':'no index buffer'}`};
  }
  if(key==='swirl'){
    const lat=Number(mode),lon=lat*2,p=[];
    for(let j=1;j<lat;j++){const a=-Math.PI/2+j*Math.PI/lat;for(let i=0;i<lon;i++){const b=i*2*Math.PI/lon;p.push(Math.cos(a)*Math.cos(b),Math.cos(a)*Math.sin(b),Math.sin(a));}}p.push(0,0,-1,0,0,1);
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));
    const material=new THREE.ShaderMaterial({uniforms:{time:{value:14},complexity:{value:lat/400},size:{value:lat===30?5:3}},vertexShader:'varying vec3 vPos;uniform float size;void main(){vPos=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=size;}',fragmentShader:`varying vec3 vPos;uniform float time,complexity;
      float hash(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
      void main(){if(length(gl_PointCoord-.5)>.5)discard;float theta=atan(vPos.y,vPos.x);float phi=acos(clamp(vPos.z/length(vPos),-1.,1.));float freq=15.+complexity*25.;float mask=smoothstep(0.,.15,abs(sin(phi*freq)))*smoothstep(0.,.15,abs(sin(theta*freq)));float r=.5+.5*sin(vPos.x*10.*complexity+time);float g=.5+.5*sin(vPos.y*15.*complexity+time*1.2);float b=.5+.5*sin(vPos.z*20.*complexity+time*1.5);float glow=step(.5,complexity)*abs(sin(time*2.5+vPos.y*5.));float h=hash(floor(vec2(theta,phi)*(freq/3.14159)));float reveal=smoothstep(h*10.,h*10.+2.,time);gl_FragColor=vec4(vec3(.4+.6*r+glow,.025+.12*g,.06+.18*b)*mask*reveal,1.);}`});
    group.add(new THREE.Points(g,material));return{update(t){material.uniforms.time.value=t+14;},readout:`${(p.length/3).toLocaleString()} spherical samples · red palette / original sampling and mask`};
  }
  if(key==='fractal')return createRecursiveStudy(mode,group);
  if(key==='solar'){
    const orbits=[{name:'Mercury',a:.65,e:.2056,period:87.97,size:.044,color:0xffb4bf},{name:'Venus',a:1.05,e:0,period:224.7,size:.08,color:0xff6076},{name:'Earth',a:1.6,e:.0167,period:365.26,size:.087,color:0xff3752}];
    const sun=new THREE.Mesh(new THREE.SphereGeometry(.2,24,16),new THREE.MeshBasicMaterial({color:0xff243d}));group.add(sun);
    for(const [i,o] of orbits.entries()){
      const path=[];for(let j=0;j<=150;j++){const a=j/150*Math.PI*2,r=o.a*(1-o.e*o.e)/(1+o.e*Math.cos(a));path.push(new THREE.Vector3(Math.cos(a)*r,Math.sin(a)*r,0));}
      group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(path),new THREE.LineBasicMaterial({color:0x8d2b46})));o.mesh=new THREE.Mesh(new THREE.SphereGeometry(o.size,20,12),new THREE.MeshBasicMaterial({color:o.color}));group.add(o.mesh);o.offset=i*1.8;
    }
    const moon=new THREE.Mesh(new THREE.SphereGeometry(.027,12,8),new THREE.MeshBasicMaterial({color:0xdce5ed}));group.add(moon);
    return{update(t){const days=t*Number(mode);orbits.forEach(o=>{const a=days*2*Math.PI/o.period+o.offset,r=o.a*(1-o.e*o.e)/(1+o.e*Math.cos(a));o.mesh.position.set(Math.cos(a)*r,Math.sin(a)*r,0);});const earth=orbits[2].mesh.position,a=days*2*Math.PI/27.32;moon.position.copy(earth).add(new THREE.Vector3(Math.cos(a)*.23,Math.sin(a)*.23,0));},readout:'Sun · Mercury · Venus · Earth + Moon | sizes and distances exaggerated'};
  }
  // The bounded HW1 excerpt shares its collision predicate and disappearing-ball rule.
  if(key==='fireworks'){
    const balls=[],bursts=[];let seed=2026;const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
    for(let i=0;i<16;i++){const radius=.035+rand()*.035,color=new THREE.Color().setHSL(.97+rand()*.045,1,.45+rand()*.25);const mesh=new THREE.Mesh(new THREE.CircleGeometry(radius,16),new THREE.MeshBasicMaterial({color}));mesh.position.set((rand()-.5)*2.5,(rand()-.5)*1.5,0);group.add(mesh);balls.push({mesh,r:radius,v:new THREE.Vector2((rand()-.5)*.8,(rand()-.5)*.8),alive:true});}
    function explode(ball){ball.alive=false;ball.mesh.visible=false;for(let i=0;i<38;i++){const angle=i/38*Math.PI*2,mesh=new THREE.Mesh(new THREE.CircleGeometry(.012,5),new THREE.MeshBasicMaterial({color:new THREE.Color().setHSL(.97+i/38*.045,1,.5+i/38*.2),transparent:true,blending:THREE.AdditiveBlending}));mesh.position.copy(ball.mesh.position);group.add(mesh);bursts.push({mesh,v:new THREE.Vector2(Math.cos(angle)*(.3+rand()),Math.sin(angle)*(.3+rand())),life:1.5});}}
    return{update(t,dt){dt*=mode==='slow'?.3:1;for(const b of balls){if(!b.alive)continue;b.mesh.position.x+=b.v.x*dt;b.mesh.position.y+=b.v.y*dt;if(Math.abs(b.mesh.position.x)>1.45-b.r){b.mesh.position.x=Math.sign(b.mesh.position.x)*(1.45-b.r);b.v.x*=-1;}if(Math.abs(b.mesh.position.y)>.85-b.r){b.mesh.position.y=Math.sign(b.mesh.position.y)*(.85-b.r);b.v.y*=-1;}}
      for(let i=0;i<balls.length;i++)for(let j=i+1;j<balls.length;j++){const a=balls[i],b=balls[j];if(a.alive&&b.alive&&a.mesh.position.distanceToSquared(b.mesh.position)<=(a.r+b.r)**2){explode(a);explode(b);}}
      for(let i=bursts.length-1;i>=0;i--){const p=bursts[i];p.life-=dt;p.v.y-=dt*.35;p.mesh.position.x+=p.v.x*dt;p.mesh.position.y+=p.v.y*dt;p.mesh.material.opacity=Math.max(0,p.life/1.5);if(p.life<=0){group.remove(p.mesh);p.mesh.geometry.dispose();p.mesh.material.dispose();bursts.splice(i,1);}}},readout:'16-ball collision excerpt · disappearing balls + crimson particles'};
  }
  return{update(){},readout:''};
}
