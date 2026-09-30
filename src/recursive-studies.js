import * as THREE from 'three';

export function recursiveMorph(mode,level){
  const start=[],end=[];
  if(mode==='pyramid'){
    let cells=[[[0,1,0],[-1,-1,1],[1,-1,1],[0,-1,-1]]];
    for(let n=0;n<level;n++)cells=cells.flatMap(v=>v.map(corner=>v.map(p=>p.map((x,j)=>(x+corner[j])/2))));
    for(const v of cells)for(const corner of v)for(const face of [[0,1,2],[0,1,3],[0,2,3],[1,2,3]])for(const k of face){start.push(...v[k]);end.push(...v[k].map((x,j)=>(x+corner[j])/2));}
  }else{
    let vertices=[[0,1.15,0],[.9959,-.575,0],[-.9959,-.575,0],[0,1.15,0]];
    const split=(a,b)=>{const dx=(b[0]-a[0])/3,dy=(b[1]-a[1])/3;return[a,[a[0]+dx,a[1]+dy,0],[a[0]+1.5*dx-dy*.8660254,a[1]+1.5*dy+dx*.8660254,0],[a[0]+2*dx,a[1]+2*dy,0],b];};
    for(let n=0;n<level;n++)vertices=vertices.slice(0,-1).flatMap((a,i)=>split(a,vertices[i+1]).slice(0,4)).concat([vertices[0]]);
    for(let i=0;i<vertices.length-1;i++){
      const a=vertices[i],b=vertices[i+1],next=split(a,b),flat=[0,1/3,.5,2/3,1].map(f=>a.map((x,j)=>x+(b[j]-x)*f));
      for(let k=0;k<4;k++){start.push(...flat[k],...flat[k+1]);end.push(...next[k],...next[k+1]);}
    }
  }
  return{start,end};
}

export function createRecursiveStudy(mode,group){
  const max=mode==='fern'?7:4,uniform={value:1};let phase=max,direction=-1,automatic=true,level=-1;
  const root=new THREE.Group();group.add(root);
  function clear(){root.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});root.clear();}
  function material(line=false){return new THREE.ShaderMaterial({uniforms:{progress:uniform},side:THREE.DoubleSide,vertexShader:`attribute vec3 target;uniform float progress;varying float light;void main(){vec3 p=mix(position,target,progress);light=.22+.78*abs(dot(normalize(normalMatrix*normal),normalize(vec3(.4,.6,1.))));gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,fragmentShader:line?'void main(){gl_FragColor=vec4(.74,.42,1.,1.);}':'varying float light;void main(){gl_FragColor=vec4(vec3(.55,.08,.95)*light,1.);}' });}
  if(mode==='fern'){
    const pos=[],target=[],birth=[];
    function branch(x,y,a,h,n){if(n>=7)return;const xx=x+Math.sin(a)*h*.15,yy=y+Math.cos(a)*h*.15;pos.push(x,y,0,x,y,0);target.push(x,y,0,xx,yy,0);birth.push(n,n);branch(xx,yy,a+.035,h*.85,n+1);branch(xx,yy,a+.785,h*.35,n+1);branch(xx,yy,a-.785,h*.35,n+1);branch(xx,yy,a+.017,h*.1,n+1);}
    branch(0,-1.1,0,3.5,0);
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('target',new THREE.Float32BufferAttribute(target,3));g.setAttribute('birth',new THREE.Float32BufferAttribute(birth,1));
    const m=new THREE.ShaderMaterial({uniforms:{progress:uniform},vertexShader:'attribute vec3 target;attribute float birth;uniform float progress;void main(){float f=clamp(progress-birth,0.,1.);f=f*f*(3.-2.*f);gl_Position=projectionMatrix*modelViewMatrix*vec4(mix(position,target,f),1.);}',fragmentShader:'void main(){gl_FragColor=vec4(.7,.35,1.,1.);}'});
    const line=new THREE.LineSegments(g,m);line.frustumCulled=false;root.add(line);
  }
  function render(){
    if(mode==='fern'){uniform.value=phase;return;}
    const n=Math.min(max-1,Math.floor(phase));
    if(n!==level){
      clear();level=n;const {start,end}=recursiveMorph(mode,n),g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(start,3));g.setAttribute('target',new THREE.Float32BufferAttribute(end,3));g.computeVertexNormals();
      const mesh=mode==='pyramid'?new THREE.Mesh(g,material()):new THREE.LineSegments(g,material(true));mesh.frustumCulled=false;root.add(mesh);
      if(mode==='pyramid'){
        const a=[],b=[];for(let i=0;i<start.length;i+=9)for(const [x,y] of [[0,1],[1,2],[2,0]]){a.push(...start.slice(i+x*3,i+x*3+3),...start.slice(i+y*3,i+y*3+3));b.push(...end.slice(i+x*3,i+x*3+3),...end.slice(i+y*3,i+y*3+3));}
        const wire=new THREE.BufferGeometry();wire.setAttribute('position',new THREE.Float32BufferAttribute(a,3));wire.setAttribute('target',new THREE.Float32BufferAttribute(b,3));wire.setAttribute('normal',new THREE.Float32BufferAttribute(a.map(()=>1),3));const lines=new THREE.LineSegments(wire,material(true));lines.frustumCulled=false;root.add(lines);
      }
    }
    const f=phase-level;uniform.value=f*f*(3-2*f);
  }
  render();
  return{max,get automatic(){return automatic;},get phase(){return phase;},setLevel(n){automatic=false;phase=THREE.MathUtils.clamp(n,0,max);render();},toggle(){automatic=!automatic;},
    get readout(){const lo=Math.floor(phase+1e-6),hi=Math.min(max,Math.ceil(phase-1e-6));const levels=lo===hi?String(lo):`${lo} → ${hi}`;const count=n=>mode==='fern'?(4**n-1)/3:mode==='pyramid'?4**n:3*4**n;return`Recursion ${levels} · ${count(lo).toLocaleString()}${lo===hi?'':' → '+count(hi).toLocaleString()} ${mode==='pyramid'?'tetrahedra':'segments'}`;},
    update(t,dt){if(automatic&&dt>0){phase+=direction*dt*.38;if(phase<=0){phase=0;direction=1;}if(phase>=max){phase=max;direction=-1;}render();}}
  };
}
