import {createAvatar} from './nova-avatar.js';
const $=s=>document.querySelector(s),reduce=matchMedia('(prefers-reduced-motion: reduce)');
let avatar, timer, walkTimer, active=false, paused=false;
const motion=()=>!reduce.matches&&!paused;
const lines=['Start with the question you want the visualization to answer.','Check the scales, missing values, and transformations before interpreting a pattern.','Defend your interpretation with evidence the audience can see.'];
function start(){stop();active=true;document.body.classList.add('presenting');$('#demo-state').textContent='Nova has the floor';$('#hand-off').disabled=true;avatar?.update({walking:motion(),motion:motion()});walkTimer=setTimeout(()=>{avatar?.update({walking:false,talking:motion(),level:.16});let i=0;$('#demo-caption').textContent=lines[0];timer=setInterval(()=>{i++;if(i>=lines.length){stop();return;}$('#demo-caption').textContent=lines[i];},4400);},reduce.matches?0:1800);}
function stop(){clearInterval(timer);clearTimeout(walkTimer);active=false;document.body.classList.remove('presenting');$('#demo-state').textContent='Instructor has the floor';$('#demo-caption').textContent='Select Give Nova the floor to preview its movement and a scripted teaching turn.';$('#hand-off').disabled=false;avatar?.update({walking:false,talking:false,motion:motion(),level:0});}
new IntersectionObserver(([e])=>{if(e.isIntersecting&&!avatar){avatar=createAvatar($('#avatar'));avatar.update({motion:motion()});}if(!e.isIntersecting&&active)stop();},{threshold:.05}).observe(document.body);
$('#hand-off').onclick=start;$('#take-back').onclick=stop;document.addEventListener('keydown',e=>{if(e.key==='Escape')stop();});reduce.addEventListener('change',()=>{avatar?.update({motion:motion()});});

$("#pause-motion").onclick=()=>{paused=!paused;document.body.classList.toggle('motion-paused',paused);$("#pause-motion").textContent=paused?"Resume motion":"Pause motion";$("#pause-motion").setAttribute("aria-pressed",String(paused));avatar?.update({motion:motion()});};
new ResizeObserver(()=>{if(window.parent!==window)window.parent.postMessage({type:'nova-preview-height',height:Math.ceil(document.querySelector('main').getBoundingClientRect().height)},location.origin);}).observe(document.querySelector('main'));
