import * as THREE from 'three';

// Screen-relative quaternion increments have no tilt stop or Euler-angle poles.
export function inspectBma(s){
 const controls=document.querySelector(`[data-controls="${s.host.id}"]`);
 const initial=new THREE.Quaternion().setFromEuler(new THREE.Euler(.12,-.28,.13));
 s.viewQuaternion=initial.clone();
 const delta=new THREE.Quaternion(),axis=new THREE.Vector3();
 let down=null,touchRotate=false;
 function redraw(){s.host.dataset.viewRotation=JSON.stringify(s.viewQuaternion.toArray());s.update();s.draw();}
 function turn(x,y,z,angle){axis.set(x,y,z).normalize();delta.setFromAxisAngle(axis,angle);s.viewQuaternion.premultiply(delta).normalize();redraw();}
 for(const [action,label] of [['roll-left','Roll left'],['roll-right','Roll right']]){
  const button=document.createElement('button');button.type='button';button.dataset.turn=action;button.textContent=label;controls.querySelector('[data-turn="reset"]').before(button);
 }
 const touch=document.createElement('button');touch.type='button';touch.textContent='Touch rotation: off';touch.setAttribute('aria-pressed','false');touch.dataset.bmaTouch='';controls.append(touch);
 touch.addEventListener('click',()=>{touchRotate=!touchRotate;down=null;s.canvas.style.touchAction=touchRotate?'none':'pan-y';touch.textContent='Touch rotation: '+(touchRotate?'on':'off');touch.setAttribute('aria-pressed',String(touchRotate));});
 controls.addEventListener('click',e=>{
  const action=e.target.closest('[data-turn]')?.dataset.turn;
  const turns={left:[0,1,0,-.25],right:[0,1,0,.25],up:[1,0,0,-.2],down:[1,0,0,.2],'roll-left':[0,0,1,.2],'roll-right':[0,0,1,-.2]};
  if(turns[action])turn(...turns[action]);
  if(action==='reset'){s.viewQuaternion.copy(initial);redraw();}
 });
 s.canvas.addEventListener('pointerdown',e=>{if(e.button!==0||!e.isPrimary)return;down={id:e.pointerId,x:e.clientX,y:e.clientY};if(e.pointerType!=='touch'||touchRotate)s.canvas.setPointerCapture(e.pointerId);});
 s.canvas.addEventListener('pointermove',e=>{
  if(!down||e.pointerId!==down.id)return;
  const dx=e.clientX-down.x,dy=e.clientY-down.y;
  if(e.pointerType==='touch'&&!touchRotate&&Math.abs(dy)>Math.abs(dx))return;
  const distance=Math.hypot(dx,dy);if(!distance)return;
  s.canvas.setPointerCapture(e.pointerId);turn(dy,dx,0,distance*.006);down.x=e.clientX;down.y=e.clientY;
 });
 function release(e){if(down?.id===e.pointerId){down=null;if(s.canvas.hasPointerCapture(e.pointerId))s.canvas.releasePointerCapture(e.pointerId);}}
 s.canvas.addEventListener('pointerup',release);s.canvas.addEventListener('pointercancel',release);s.canvas.addEventListener('lostpointercapture',()=>{down=null;});
 s.canvas.addEventListener('keydown',e=>{if(['q','e'].includes(e.key.toLowerCase())){e.preventDefault();controls.querySelector(`[data-turn="roll-${e.key.toLowerCase()==='q'?'left':'right'}"]`).click();}});
 s.host.dataset.viewRotation=JSON.stringify(s.viewQuaternion.toArray());
}
