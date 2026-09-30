import assert from 'node:assert/strict';
import {Group} from 'three';
import {build} from 'esbuild';
import {pathToFileURL} from 'node:url';
import {resolve} from 'node:path';

await build({entryPoints:['src/graphics-work.js'],bundle:true,platform:'node',format:'esm',outfile:'qa/collision-test-module.mjs'});
const {createWork}=await import(pathToFileURL(resolve('qa/collision-test-module.mjs')));
const group=new Group(),model=createWork('fireworks','normal',group);
let last=0,resurrections=0,prior=model.stats.balls,blankTime=0;
for(let frame=1;frame<=3600;frame++){
 model.update(frame/30,1/30);
 const stats=model.stats;
 if(stats.balls>prior)resurrections++;
 prior=stats.balls;
 blankTime=stats.balls===0&&stats.particles===0?blankTime+1/30:0;
 assert.ok(blankTime<1.3,'Animation remained empty');
 assert.ok(stats.particles<=760,'Particle count exceeded mobile budget');
 assert.ok(group.children.length<=776,'Scene objects leaked');
 if(frame===2700)last=stats.collisions;
}
assert.ok(resurrections>20,'Balls never returned after collisions');
assert.ok(model.stats.collisions>last,'Collisions stopped in the last 30 seconds');
const paused=JSON.stringify(model.stats);model.update(120,0);assert.equal(JSON.stringify(model.stats),paused);
for(let i=0;i<100;i++)model.burst(0,0);
assert.ok(model.stats.particles<=760);assert.ok(group.children.length<=776);
console.log('PASS: 120 simulated seconds, continuing collisions and respawns, pause, and bounded particle count after 100 taps.',model.stats);
