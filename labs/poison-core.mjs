export function poisonExperiment(epsilon=1,fraction=.35){
  if(!Number.isFinite(epsilon)||epsilon<0||epsilon>2||!Number.isFinite(fraction)||fraction<0||fraction>.7)throw Error('Invalid experiment controls');
  const count=80,k=Math.round(count*fraction),query=-.12;
  const a=Array.from({length:count},(_,i)=>[-.55+.1*Math.sin(i*2.17),.55*Math.sin(i*1.3),.55*Math.cos(i*.79)]);
  const cleanB=Array.from({length:count},(_,i)=>[.55+.1*Math.cos(i*2.17),.55*Math.cos(i*1.3),.55*Math.sin(i*.79)]);
  const b=cleanB.map((p,i)=>[p[0]-(i<k?epsilon:0),p[1],p[2]]);
  const mean=xs=>xs.reduce((s,x)=>s+x,0)/xs.length;
  const median=xs=>{const s=[...xs].sort((a,b)=>a-b);return (s[39]+s[40])/2;};
  const boundary=(mean(a.map(p=>p[0]))+mean(b.map(p=>p[0])))/2;
  const defended=(median(a.map(p=>p[0]))+median(b.map(p=>p[0])))/2;
  const probability=x=>1/(1+Math.exp(-20*(query-x)));
  return {epsilon,fraction,poisoned:k,count,query,a,b,cleanB,boundary,defended,meanProbability:probability(boundary),medianProbability:probability(defended)};
}
