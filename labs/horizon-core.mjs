// An illustrative queue/authorization model, not an AGI forecast or benchmark.
export function horizonModel(k=2,reviewMs=400,gate=true){
  if(!Number.isInteger(k)||k<1||k>8||!Number.isFinite(reviewMs)||reviewMs<100||reviewMs>2000||typeof gate!=='boolean')throw Error('Invalid horizon controls');
  const agents=2**k,intervalMs=8000/agents,offeredActionsPerSecond=agents/8;
  const reviewCapacityPerSecond=1000/reviewMs,load=reviewMs/intervalMs;
  const reasons=[];
  if(k>4)reasons.push('Requested depth exceeds the authorized maximum of 4.');
  if(load>1)reasons.push('Action arrival rate exceeds one reviewer\'s capacity.');
  const held=gate&&reasons.length>0;
  return {k,reviewMs,gate,agents,intervalMs,offeredActionsPerSecond,reviewCapacityPerSecond,load,reasons,held,
    executedActionsPerSecond:held?0:offeredActionsPerSecond,
    assumedTokenRate:32*offeredActionsPerSecond,
    backlogPerSecond:held?0:Math.max(0,offeredActionsPerSecond-reviewCapacityPerSecond),
    status:held?'HELD BY TRIPWIRE':reasons.length?'OUTSIDE POLICY / UNGATED':load===1?'AT REVIEW CAPACITY':'WITHIN MODELED BUDGET',
    assumptions:{branching:2,secondsPerAgentAction:8,tokensPerAction:32,maxAuthorizedDepth:4,reviewers:1},
    scope:'Deterministic teaching model. No LLM, compiler, sub-agent, or external tool is executed. No probability of singularity, containment proof, or safety guarantee.'};
}
