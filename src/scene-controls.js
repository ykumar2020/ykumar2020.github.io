// Shared controls are siblings of the visual, so they remain readable without
// WebGL and do not turn scientific labels into pointer-only controls.
export function prepareControls(host){
 let controls=document.querySelector(`[data-controls="${host.id}"]`);
 if(!controls){controls=document.createElement('div');controls.className='scene-controls';controls.dataset.controls=host.id;controls.hidden=true;host.after(controls);}
 controls.setAttribute('role','group');
 if(!controls.hasAttribute('aria-label'))controls.setAttribute('aria-label',(host.getAttribute('aria-label')||'Animation')+' controls');
 if(controls.querySelector('[data-turn="left"]')&&!controls.querySelector('[data-turn="up"]')){
  for(const [action,text] of [['up','Tilt up'],['down','Tilt down']]){const b=document.createElement('button');b.type='button';b.dataset.turn=action;b.textContent=text;controls.querySelector('[data-turn="reset"]')?.before(b);}
 }
 return controls;
}

export function attachSceneControls(api,controls,isPaused,setPaused){
 const {host,canvas,camera}=api;
 const motion=document.createElement('button');motion.type='button';motion.dataset.sceneMotion='';
 function reflect(){motion.textContent=isPaused()?'Play animation':'Pause animation';motion.setAttribute('aria-pressed',String(!isPaused()));}
 motion.addEventListener('click',()=>{setPaused(!isPaused());api.sync();});controls.append(motion);
 const speedLabel=document.createElement('label');speedLabel.textContent='Animation speed ';
 const speed=document.createElement('select');speed.dataset.sceneSpeed='';
 for(const rate of [.25,.5,1,2]){const o=document.createElement('option');o.value=String(rate);o.textContent=rate+'×';o.selected=rate===1;speed.append(o);}
 speedLabel.append(speed);controls.append(speedLabel);
 speed.addEventListener('change',()=>{api.speed=Number(speed.value);host.dataset.speed=speed.value;});
 let zoom;
 if(!host.classList.contains('connectome-scene')){
  const label=document.createElement('label');label.textContent=host.id==='grid-scene'?'Grid scale ':'Zoom ';
  zoom=document.createElement('input');zoom.type='range';zoom.min='70';zoom.max='160';zoom.step='5';zoom.value='100';zoom.dataset.sceneZoom='';label.append(zoom);controls.append(label);
  zoom.addEventListener('input',()=>{camera.zoom=Number(zoom.value)/100;camera.updateProjectionMatrix();host.dataset.zoom=zoom.value;api.update();api.draw();});
 }
 controls.addEventListener('click',e=>{if(e.target.closest('[data-turn="reset"],[data-tilt="reset"]')){if(zoom){zoom.value='100';camera.zoom=1;camera.updateProjectionMatrix();host.dataset.zoom='100';}api.update();api.draw();}});
 if(host.id!=='grid-scene'){
  host.setAttribute('role','group');canvas.removeAttribute('aria-hidden');canvas.tabIndex=0;canvas.setAttribute('role','img');
  canvas.setAttribute('aria-label',host.dataset.work==='fireworks'?'Interactive particles. Click or press Enter to add a burst; plus and minus zoom; Space pauses. Controls follow.':'Interactive view. Arrow keys rotate or tilt; plus and minus zoom; Space pauses; Home resets. Controls follow.');
  const hint=document.createElement('p');hint.className='scene-interaction-hint';hint.textContent=host.dataset.work==='fireworks'?'Click to add a burst. Use Add burst below with a keyboard.':'Drag to inspect · Arrow keys to rotate · Space to pause · Home to reset';
  controls.after(hint);
  if(host.id==='hero-art-scene'){
   hint.textContent='Full 360° rotation: drag in any direction · Arrow keys rotate · Q / E roll · Home resets. On mobile, turn on Touch rotation for vertical drags; turn it off to scroll over the model.';
   canvas.setAttribute('aria-label','BMA with unrestricted rotation. Arrow keys rotate; Q and E roll; plus and minus zoom; Space pauses; Home resets. Touch rotation toggle and other controls follow.');
  }
  canvas.addEventListener('keydown',e=>{
   const direction={ArrowLeft:'left',ArrowRight:'right',ArrowUp:'up',ArrowDown:'down',Home:'reset'}[e.key];
   if(direction){const button=controls.querySelector(`[data-turn="${direction}"],[data-tilt="${direction}"]`);if(button){e.preventDefault();button.click();}}
   if(e.code==='Space'){e.preventDefault();motion.click();}
   if(['+','=','-','_'].includes(e.key)){const input=zoom||host.closest('.connectome-study')?.querySelector('[data-image-zoom]');if(input){e.preventDefault();input.value=String(Math.max(Number(input.min),Math.min(Number(input.max),Number(input.value)+(['-','_'].includes(e.key)?-5:5))));input.dispatchEvent(new Event('input',{bubbles:true}));}}
  });
 }
 return reflect;
}
