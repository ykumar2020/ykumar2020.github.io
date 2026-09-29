import * as THREE from 'three';

/** THE LOOM: original, speculative ASI artwork. No model telemetry or sentience claims. */
export function createASILoom(scene,compact=false){
  const root=new THREE.Group();scene.add(root);
  const count=compact?6500:13500;
  const position=new Float32Array(count*3),seed=new Float32Array(count),size=new Float32Array(count);
  let state=9327;const random=()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/4294967296;};
  for(let i=0;i<count;i++){
    const t=i/count,angle=i*2.3999632297,y=(t*2-1)*1.6;
    const radius=(.64+.25*Math.cos(y*2.8))*(.72+random()*.4);
    position.set([Math.cos(angle)*radius,y,Math.sin(angle)*radius],i*3);
    seed[i]=random();size[i]=random();
  }
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(position,3));geometry.setAttribute('seed',new THREE.BufferAttribute(seed,1));geometry.setAttribute('sparkSize',new THREE.BufferAttribute(size,1));
  const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,
    uniforms:{time:{value:0},density:{value:compact?.8:1}},
    vertexShader:`attribute float seed;attribute float sparkSize;uniform float time;uniform float density;varying float heat;varying float alpha;
      void main(){vec3 p=position;float a=atan(p.z,p.x);float breathe=.5+.5*sin(time*.26);float weave=sin(p.y*4.+a*3.+time*.19);
      float open=.12+.28*breathe;p.xz*=1.+open*sin(p.y*2.8+time*.12);p.y+=.08*sin(time*.3+seed*6.28);
      p.x+=.12*sin(p.y*3.+time*.16);p.z+=.12*cos(p.y*3.+time*.16);
      float rotation=time*.065+weave*.12;mat2 rot=mat2(cos(rotation),-sin(rotation),sin(rotation),cos(rotation));p.xz=rot*p.xz;
      vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp((2.+sparkSize*6.)*density*3.5/(-mv.z),1.,12.);
      float band=pow(.5+.5*sin(p.y*4.5-time*.55),10.);heat=clamp(seed*.55+band*.5,0.,1.);alpha=.32+seed*.45;}`,
    fragmentShader:`varying float heat;varying float alpha;void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;float core=exp(-d*d*20.);float halo=pow(1.-d,2.);vec3 c=mix(vec3(.7,.015,.035),vec3(1.,.19,.12),heat);c=mix(c,vec3(1.,.75,.64),core*heat*.65);gl_FragColor=vec4(c,(core+.36*halo)*alpha);}`});
  root.add(new THREE.Points(geometry,material));

  // A dark faceted void gives the particle field a legible center.
  const core=new THREE.Mesh(new THREE.OctahedronGeometry(.53),new THREE.MeshBasicMaterial({color:0x030305}));core.scale.y=1.6;root.add(core);
  const outline=new THREE.LineSegments(new THREE.EdgesGeometry(core.geometry),new THREE.LineBasicMaterial({color:0xff273c,transparent:true,opacity:.78}));outline.scale.copy(core.scale);root.add(outline);
  const paths=[],signals=[];
  for(let i=0;i<12;i++){
    const a=i/12*Math.PI*2,points=[];
    for(let j=0;j<=32;j++){
      const f=j/32,r=.6+f*1.3,theta=a+f*.75;
      points.push(new THREE.Vector3(Math.cos(theta)*r,(i%2?1:-1)*(.4+Math.sin(f*1.8)*.72)+Math.sin(a)*.15,Math.sin(theta)*r*.65));
    }
    const curve=new THREE.CatmullRomCurve3(points);paths.push(curve);
    root.add(new THREE.Mesh(new THREE.TubeGeometry(curve,48,.0045,3,false),new THREE.MeshBasicMaterial({color:0xff243c,transparent:true,opacity:.36})));
    const signal=new THREE.Mesh(new THREE.SphereGeometry(.023,6,5),new THREE.MeshBasicMaterial({color:0xffbdab}));root.add(signal);signals.push(signal);
  }
  // Separated, asymmetrical arc segments suggest a changing boundary, not a planet.
  const arcs=new THREE.Group();root.add(arcs);
  for(let i=0;i<5;i++){
    const points=[];for(let j=0;j<=100;j++){const a=j/100*Math.PI*(1.05+i*.12)+i;points.push(new THREE.Vector3(Math.cos(a)*(1.18+i*.16),Math.sin(a)*(1.18+i*.16),0));}
    const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),new THREE.LineBasicMaterial({color:i%2?0xff563b:0x922638,transparent:true,opacity:i%2?.65:.5}));line.rotation.set(.5+i*.46,i*.37,0);arcs.add(line);
  }
  // One instanced draw call for drifting fragments of the outer structure.
  const shards=new THREE.InstancedMesh(new THREE.OctahedronGeometry(.026),new THREE.MeshBasicMaterial({color:0xae2538}),compact?130:260);
  const transform=new THREE.Object3D(),origins=[];
  for(let i=0;i<shards.count;i++){const a=random()*Math.PI*2,r=1.1+random()*.6;origins.push({a,r,y:(random()-.5)*3.3,s:.5+random()*1.6});}
  root.add(shards);
  // A restrained glow is generated locally; no raster artwork or heavy bloom pipeline.
  const haloMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,uniforms:{time:{value:0}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec2 vUv;uniform float time;void main(){vec2 p=(vUv-.5)*2.;float glow=exp(-dot(p,p)*3.8)*.1*(.9+.1*sin(time*.26));gl_FragColor=vec4(.9,.012,.028,glow);}'});
  const halo=new THREE.Mesh(new THREE.PlaneGeometry(5,5),haloMaterial);halo.position.z=-.75;scene.add(halo);
  return{root,update(t,px=0,py=0){
    material.uniforms.time.value=t;haloMaterial.uniforms.time.value=t;
    root.rotation.set(py,.18+px+Math.sin(t*.1)*.14,0);core.rotation.y=t*.1;outline.rotation.copy(core.rotation);arcs.rotation.y=-t*.035;
    paths.forEach((p,i)=>signals[i].position.copy(p.getPoint((t*.065+i/12)%1)));
    origins.forEach((o,i)=>{const a=o.a+t*.025;transform.position.set(Math.cos(a)*o.r,o.y+Math.sin(t*.23+i)*.06,Math.sin(a)*o.r*.65);transform.rotation.set(a,t*.09+i,a*.3);transform.scale.set(.6*o.s,2.8*o.s,.65*o.s);transform.updateMatrix();shards.setMatrixAt(i,transform.matrix);});shards.instanceMatrix.needsUpdate=true;
  }};
}
