import assert from 'node:assert/strict';
import {horizonModel} from '../labs/horizon-core.mjs';
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10);
const initial=horizonModel();assert.equal(initial.agents,4);near(initial.intervalMs,2000);near(initial.load,.2);assert.equal(initial.held,false);
const high=horizonModel(5,400);assert.equal(high.held,true);assert.equal(high.reasons.length,2);assert.equal(high.executedActionsPerSecond,0);assert.equal(high.backlogPerSecond,0);
const ungated=horizonModel(5,400,false);assert.equal(ungated.held,false);near(ungated.executedActionsPerSecond,4);near(ungated.backlogPerSecond,1.5);assert.ok(ungated.status.includes('UNGATED'));
const boundary=horizonModel(4,500);near(boundary.load,1);assert.equal(boundary.held,false);assert.equal(boundary.status,'AT REVIEW CAPACITY');
assert.equal(horizonModel(4,600).held,true);assert.equal(horizonModel(5,100).held,true);
for(let k=1;k<=8;k++){const a=horizonModel(k,400);near(a.assumedTokenRate,a.offeredActionsPerSecond*32);near(a.offeredActionsPerSecond*a.intervalMs,1000);assert.equal(a.held,k>=5);}
for(const args of [[0],[9],[2.5],[NaN],[2,0],[2,Infinity],[2,400,'true']])assert.throws(()=>horizonModel(...args));
console.log('Horizon checks passed: baseline, overload gate, ungated backlog, equality boundary, separate depth limit, all levels, invalid inputs.');
