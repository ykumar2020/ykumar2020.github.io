import * as THREE from 'three';

// An actual surface of revolution, with its symmetry axis (not a medial-axis claim).
export function createHeroWireframe(scene){
  const group=new THREE.Group();scene.add(group);
  const radius=y=>.65+.16*Math.cos(3*y)+.07*Math.sin(7*y);
  const point=(y,a)=>new THREE.Vector3(radius(y)*Math.cos(a),y,radius(y)*Math.sin(a));
  const edges=[];
  function segment(a,b){edges.push(...a.toArray(),...b.toArray());}
  for(let j=0;j<=36;j++){
    const y=-1.7+3.4*j/36;
    for(let i=0;i<40;i++){
      const a=2*Math.PI*i/40;
      segment(point(y,a),point(y,a+2*Math.PI/40));
      if(j<36)segment(point(y,a),point(y+3.4/36,a));
    }
  }
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(edges,3));
  const material=new THREE.LineBasicMaterial({color:0x00f0ff,transparent:true,opacity:.48});
  group.add(new THREE.LineSegments(geometry,material));
  const axisGeometry=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,-1.95,0),new THREE.Vector3(0,1.95,0)]);
  group.add(new THREE.Line(axisGeometry,new THREE.LineBasicMaterial({color:0xffb85c,transparent:true,opacity:.8})));
  const pointsGeometry=new THREE.BufferGeometry();const positions=[];
  for(let i=0;i<18;i++)positions.push(...point(-1.7+3.4*i/18,Math.PI*i*.4).toArray());
  pointsGeometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
  const packets=new THREE.Points(pointsGeometry,new THREE.PointsMaterial({color:0xffc878,size:.065,transparent:true,opacity:.9}));group.add(packets);
  let tiltX=.12,tiltY=-.4;
  return {update(t,px=0,py=0){
    tiltX+=(.12+py-tiltX)*.06;tiltY+=(-.4+px-tiltY)*.06;
    group.rotation.set(tiltX,t*.07+tiltY,.18);
    material.opacity=.46+.06*Math.sin(t*.65);
    const attribute=pointsGeometry.attributes.position;
    for(let i=0;i<18;i++){
      const y=-1.7+((i/18+t*.035)%1)*3.4,v=point(y,Math.PI*i*.4+t*.1);
      attribute.setXYZ(i,v.x,v.y,v.z);
    }
    attribute.needsUpdate=true;
  }};
}
