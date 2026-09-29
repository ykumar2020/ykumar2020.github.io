import * as THREE from 'three';

// An artistic metaphor for distributed intelligence, not a model of ASI.
export function mountPlanets(root) {
  const host = root.querySelector('.planet-viewport');
  const buttons = root.querySelector('.planet-controls');
  const toggle = root.querySelector('[data-orbit="pause"]');
  const status = root.querySelector('.planet-status');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-14, 14, 9, -9, .1, 100);
  camera.position.z = 30;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
  } catch {
    root.dataset.state = 'fallback'; status.textContent = 'Still intelligence field'; return;
  }
  renderer.setClearColor(0x090b12, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  host.append(canvas);

  const vertex = `varying vec3 p; varying vec3 n;
    void main(){ p=position; n=normalize(normalMatrix*normal);
      gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`;
  const plasma = `uniform float time; uniform float phase; uniform vec3 tint;
    varying vec3 p; varying vec3 n;
    float hash(vec3 q){return fract(sin(dot(q,vec3(127.1,311.7,74.7)))*43758.5453);}
    float noise(vec3 q){vec3 i=floor(q),f=fract(q);f=f*f*(3.0-2.0*f);
      return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
      mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
    float fbm(vec3 q){float v=0.0,a=.55;for(int i=0;i<4;i++){v+=a*noise(q);q=q*2.07+vec3(1.7,3.1,2.3);a*=.48;}return v;}
    void main(){
      float t=time*.085+phase;
      vec3 q=p*3.1+vec3(t*.18,-t*.24,t*.13);
      q+=.42*sin(q.yzx*1.8+vec3(t,-t,t*.7));
      float mist=fbm(q),detail=fbm(q*3.4+mist*2.1);
      float front=max(n.z,0.0),rim=pow(1.0-front,2.7);
      float cloud=smoothstep(.27,.72,mist)*(.4+.6*front);
      float threads=pow(1.0-abs(sin(detail*21.0+mist*8.0+t*.35)),15.0);
      float drift=sin(p.x*2.6+t*.42)*.14;
      float heart=exp(-8.0*(n.x*n.x*.78+pow(n.y+drift,2.0)*2.8));
      float sparks=pow(smoothstep(.64,.86,detail),3.0);
      vec3 violet=vec3(.43,.10,.94),cyan=vec3(.04,.66,1.0);
      vec3 hue=mix(violet,cyan,smoothstep(-.6,.8,-p.x+p.y*.65));
      hue=mix(hue,tint,.18);
      vec3 color=hue*(.18+cloud*.9)+vec3(.72,.51,1.0)*cloud*cloud*.6;
      color+=mix(hue,vec3(.76,.85,1.0),.45)*threads*(.13+.55*rim);
      color+=mix(vec3(.58,.46,1.0),vec3(1.0,.91,1.0),cloud)*heart*(.5+cloud*2.5);
      color+=hue*rim*1.6+vec3(.6,.84,1.0)*sparks*.9;
      float pulse=.92+.08*sin(time*.65+phase);
      gl_FragColor=vec4(color*pulse,.76+rim*.22);
      #include <colorspace_fragment>
    }`;
  function glowTexture() {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const ctx = c.getContext('2d'); const g = ctx.createRadialGradient(64,64,0,64,64,64);
    g.addColorStop(0,'#ffffffa0'); g.addColorStop(.2,'#ffffff65');
    g.addColorStop(.42,'#ffffff26'); g.addColorStop(.7,'#ffffff09'); g.addColorStop(1,'#ffffff00');
    ctx.fillStyle=g;ctx.fillRect(0,0,128,128);return new THREE.CanvasTexture(c);
  }
  const glowMap=glowTexture();
  function glow(color,size,opacity) {
    const s=new THREE.Sprite(new THREE.SpriteMaterial({map:glowMap,color,opacity,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending}));
    s.scale.setScalar(size);return s;
  }
  let seed=1909;
  const random=()=>{seed=(seed*16807)%2147483647;return (seed-1)/2147483646;};
  const geometry=new THREE.SphereGeometry(1,48,32);
  const specifications=[
    {size:2.05,x:.78,y:.27,tint:0xbb73ff,speed:.017},
    {size:1.45,x:.17,y:.73,tint:0x55dcff,speed:.021},
    {size:1.12,x:.86,y:.85,tint:0xcf88ff,speed:.015},
    {size:.96,x:.24,y:.2,tint:0x679fff,speed:.019},
    {size:.70,x:.57,y:.57,tint:0xffa5e5,speed:.024}
  ];
  const fields=specifications.map((spec,index)=>{
    const group=new THREE.Group();scene.add(group);
    const surface=new THREE.Mesh(geometry,new THREE.ShaderMaterial({
      uniforms:{time:{value:0},phase:{value:index*2.31},tint:{value:new THREE.Color(spec.tint)}},
      vertexShader:vertex,fragmentShader:plasma,transparent:true,depthWrite:false
    }));group.add(surface);
    const aura=glow(spec.tint,4.3,.30);group.add(aura);
    // Fine energy paths cross the sphere rather than becoming planetary orbit rings.
    const filaments=[];
    for(let j=0;j<4;j++){
      const points=[];
      for(let k=0;k<=96;k++){
        const a=k/96*Math.PI*2,latitude=.15*Math.sin(a*3+j)+.18*Math.sin(a*5-j);
        points.push(new THREE.Vector3(Math.cos(a)*Math.cos(latitude),Math.sin(latitude),Math.sin(a)*Math.cos(latitude)).multiplyScalar(1.012));
      }
      const line=new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(points),new THREE.LineBasicMaterial({color:j%2?0xbc91ff:0x8deeff,transparent:true,opacity:.20,blending:THREE.AdditiveBlending,depthWrite:false}));
      line.rotation.set(j*.81+.2,j*.53,.48+j*.9);group.add(line);filaments.push(line);
    }
    const positions=new Float32Array(140*3);
    for(let i=0;i<140;i++){
      const z=random()*2-1,a=random()*Math.PI*2,r=Math.sqrt(1-z*z)*(1+random()*.08);
      positions.set([r*Math.cos(a),r*Math.sin(a),z],i*3);
    }
    const sparksGeometry=new THREE.BufferGeometry();sparksGeometry.setAttribute('position',new THREE.BufferAttribute(positions,3));
    const sparks=new THREE.Points(sparksGeometry,new THREE.ShaderMaterial({
      uniforms:{time:{value:0},tint:{value:new THREE.Color(spec.tint)}},
      vertexShader:`uniform float time; varying float light;
        void main(){light=.2+.8*pow(.5+.5*sin(time*.8+position.x*27.0+position.y*19.0),3.0);
          gl_PointSize=1.3+light*1.8;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
      fragmentShader:`uniform vec3 tint;varying float light;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(mix(tint,vec3(1),.65),smoothstep(.5,.05,d)*light*.85);}`,
      transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
    }));group.add(sparks);
    return {...spec,index,group,surface,aura,filaments,sparks,phaseX:Math.asin(spec.x*2-1),phaseY:Math.asin(1-spec.y*2)};
  });
  const links=[];
  for(let a=0;a<fields.length;a++)for(let b=a+1;b<fields.length;b++){
    const points=new Float32Array(25*3),g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(points,3));
    const line=new THREE.Line(g,new THREE.LineBasicMaterial({color:0x9773fa,transparent:true,opacity:0,blending:THREE.AdditiveBlending,depthWrite:false}));
    const signal=glow(0xc3c3ff,.22,0);scene.add(line,signal);links.push({a,b,line,signal});
  }
  const starPositions=new Float32Array(320*3);
  for(let i=0;i<320;i++)starPositions.set([(random()-.5)*65,(random()-.5)*25,-8-random()*10],i*3);
  const starGeometry=new THREE.BufferGeometry();starGeometry.setAttribute('position',new THREE.BufferAttribute(starPositions,3));
  const stars=new THREE.Points(starGeometry,new THREE.ShaderMaterial({
    uniforms:{time:{value:0}},
    vertexShader:`uniform float time;varying float light;void main(){light=.15+.6*pow(.5+.5*sin(time*.6+position.x*8.0),2.0);gl_PointSize=1.2+light*1.8;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1);}`,
    fragmentShader:`varying float light;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(.65,.73,1.0,smoothstep(.5,.05,d)*light);}`,
    transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
  }));scene.add(stars);

  let paused=motion.matches,visible=false,lost=false,elapsed=0,frame=0,previous=0;
  let halfWidth=14,zoom=1,offset=0;
  function render(){
    if(lost)return;
    const compact=halfWidth<7;
    fields.forEach(f=>{
      f.group.visible=!compact||f.index<3;
      const size=f.size*zoom*(compact?.64:1);
      f.group.scale.setScalar(size);
      const bx=Math.max(.5,halfWidth-size*1.25),by=Math.max(.5,9-size*1.25);
      // Independent bounded paths slow naturally before reversing at the edges.
      const tx=elapsed*f.speed+f.phaseX+offset;
      const ty=elapsed*f.speed*.73+f.phaseY;
      f.group.position.set(bx*Math.sin(tx),by*Math.sin(ty),Math.sin(elapsed*.026+f.index)*1.1);
      f.surface.material.uniforms.time.value=elapsed;
      f.surface.rotation.y=elapsed*.024+f.index*.7;
      f.sparks.rotation.y=-elapsed*.019;f.sparks.rotation.z=elapsed*.011;
      f.sparks.material.uniforms.time.value=elapsed+f.index;
      f.aura.material.opacity=.24+.06*Math.sin(elapsed*.6+f.index);
      f.filaments.forEach((line,i)=>{line.rotation.y=f.index*.2+i*.53+elapsed*.015*(i%2?-1:1);});
    });
    links.forEach(({a,b,line,signal})=>{
      const A=fields[a],B=fields[b],distance=A.group.position.distanceTo(B.group.position);
      const strength=Math.max(0,1-distance/10)*.19;
      line.visible=signal.visible=A.group.visible&&B.group.visible&&strength>.008;
      if(!line.visible)return;
      const buffer=line.geometry.attributes.position;
      const bend=.7*Math.sin(elapsed*.07+a+b);
      for(let i=0;i<25;i++){
        const t=i/24;buffer.setXYZ(i,THREE.MathUtils.lerp(A.group.position.x,B.group.position.x,t),THREE.MathUtils.lerp(A.group.position.y,B.group.position.y,t)+Math.sin(t*Math.PI)*bend,-2);
      }
      buffer.needsUpdate=true;line.geometry.computeBoundingSphere();line.material.opacity=strength;
      const t=(elapsed*.055+a*.27+b*.13)%1;
      signal.position.set(THREE.MathUtils.lerp(A.group.position.x,B.group.position.x,t),THREE.MathUtils.lerp(A.group.position.y,B.group.position.y,t)+Math.sin(t*Math.PI)*bend,-1.9);
      signal.material.opacity=strength*2.2*Math.sin(t*Math.PI);
    });
    stars.material.uniforms.time.value=elapsed;renderer.render(scene,camera);
  }
  function tick(now){
    frame=0;
    if(paused||!visible||document.hidden||lost)return;
    if(now-previous>=1000/30){elapsed+=Math.min((now-previous)/1000,.10);previous=now;render();}
    frame=requestAnimationFrame(tick);
  }
  function sync(){
    cancelAnimationFrame(frame);frame=0;previous=performance.now();
    toggle.textContent=paused?'Play motion':'Pause motion';toggle.setAttribute('aria-pressed',String(paused));
    root.dataset.motion=paused?'paused':'playing';
    status.textContent=paused?'Intelligence field paused':'Intelligence field drifting';
    if(!paused&&visible&&!document.hidden&&!lost)frame=requestAnimationFrame(tick);
  }
  function resize(){
    const {width,height}=host.getBoundingClientRect();if(!width||!height)return;
    halfWidth=9*width/height;camera.left=-halfWidth;camera.right=halfWidth;camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(devicePixelRatio,1.5,Math.sqrt(1600000/(width*height))));
    renderer.setSize(width,height);render();
  }
  new ResizeObserver(resize).observe(host);
  new IntersectionObserver(([e])=>{visible=e.isIntersecting;sync();},{threshold:.05}).observe(host);
  document.addEventListener('visibilitychange',sync);
  motion.addEventListener('change',()=>{paused=motion.matches;sync();render();});
  buttons.addEventListener('click',e=>{
    const action=e.target.closest('[data-orbit]')?.dataset.orbit;
    if(action==='pause'){paused=!paused;sync();}
    if(action==='left')offset-=.16;
    if(action==='right')offset+=.16;
    if(action==='in')zoom=Math.min(1.35,zoom+.12);
    if(action==='out')zoom=Math.max(.65,zoom-.12);
    if(action==='reset'){offset=0;zoom=1;elapsed=0;}
    render();
  });
  canvas.addEventListener('webglcontextlost',e=>{
    e.preventDefault();lost=true;sync();root.dataset.state='fallback';buttons.hidden=true;status.textContent='Still intelligence field';
  });
  canvas.addEventListener('webglcontextrestored',()=>{
    lost=false;root.dataset.state='ready';buttons.hidden=false;resize();sync();
  });
  root.dataset.scene='intelligence-field';root.dataset.state='ready';buttons.hidden=false;resize();sync();
}
