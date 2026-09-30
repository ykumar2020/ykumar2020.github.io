import * as THREE from 'three';
export function createCapsuleLab(scene){
  const group=new THREE.Group();scene.add(group);
  const surface=new THREE.Points(new THREE.BufferGeometry(),new THREE.PointsMaterial({color:0xff6678,size:.025}));group.add(surface);
  const skeleton=new THREE.Group();group.add(skeleton);
  const axis=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,-1.1,0),new THREE.Vector3(0,1.1,0)]),new THREE.LineBasicMaterial({color:0xffc36d}));skeleton.add(axis);
  const ball=new THREE.Mesh(new THREE.SphereGeometry(1,16,10),new THREE.MeshBasicMaterial({color:0xffc36d,wireframe:true,transparent:true,opacity:.38}));skeleton.add(ball);
  const center=new THREE.Mesh(new THREE.SphereGeometry(.055,10,8),new THREE.MeshBasicMaterial({color:0xffefd3}));skeleton.add(center);
  function set(radius=.6,position=0,show=true){
    const xyz=[];
    for(let j=0;j<=32;j++)for(let i=0;i<48;i++){
      const theta=i*Math.PI*2/48,y=-1.1+2.2*j/32;
      xyz.push(radius*Math.cos(theta),y,radius*Math.sin(theta));
    }
    for(const sign of [-1,1])for(let j=1;j<=12;j++)for(let i=0;i<48;i++){
      const phi=j/12*Math.PI/2,theta=i*Math.PI*2/48,r=radius*Math.cos(phi);
      xyz.push(r*Math.cos(theta),sign*(1.1+radius*Math.sin(phi)),r*Math.sin(theta));
    }
    surface.geometry.dispose();surface.geometry=new THREE.BufferGeometry();surface.geometry.setAttribute('position',new THREE.Float32BufferAttribute(xyz,3));
    ball.scale.setScalar(radius);ball.position.y=center.position.y=position;skeleton.visible=show;
  }
  set();
  return {group,set,update(t,rotation={x:.1,y:0}){group.rotation.set(rotation.x,t*.065+rotation.y,.13);}};
}
