export const DIM=8;
export function softmax(xs){const m=Math.max(...xs),e=xs.map(x=>Math.exp(x-m)),s=e.reduce((a,b)=>a+b,0);return e.map(x=>x/s);}
export function weights(seed,rows=8,cols=8){return Array.from({length:rows},(_,i)=>Array.from({length:cols},(_,j)=>Math.sin((i+1)*13.7+(j+1)*9.3+seed)*.35));}
export function project(x,w){return x.map(row=>w[0].map((_,j)=>row.reduce((s,v,k)=>s+v*w[k][j],0)));}
const add=(a,b)=>a.map((r,i)=>r.map((v,j)=>v+b[i][j]));
function norm(x){return x.map(r=>{const m=r.reduce((a,b)=>a+b,0)/r.length,v=r.reduce((s,x)=>s+(x-m)**2,0)/r.length;return r.map(x=>(x-m)/Math.sqrt(v+1e-5));});}
export function attentionExperiment(text){
  const tokens=Array.from(text).slice(0,12);if(!tokens.length)return {tokens,layers:[],weights:[]};
  let x=tokens.map((c,i)=>Array.from({length:DIM},(_,j)=>Math.sin(c.codePointAt(0)*(j+1)*.017)+.2*Math.cos(i*(j+1)*.3)));
  const layers=[],allWeights=[];
  for(let l=0;l<2;l++){
    const input=x.map(r=>[...r]),u=norm(x),WQ=weights(11+l*20),WK=weights(12+l*20),WV=weights(13+l*20),WO=weights(14+l*20),W1=weights(15+l*20,8,16),W2=weights(16+l*20,16,8);
    const Q=project(u,WQ),K=project(u,WK),V=project(u,WV);
    const attention=Q.map((q,i)=>softmax(K.map((k,j)=>j>i?-Infinity:q.reduce((s,v,d)=>s+v*k[d],0)/Math.sqrt(DIM))));
    const context=attention.map(a=>Array.from({length:DIM},(_,d)=>a.reduce((s,v,j)=>s+v*V[j][d],0)));
    x=add(x,project(context,WO));
    const hidden=project(norm(x),W1).map(r=>r.map(v=>.5*v*(1+Math.tanh(Math.sqrt(2/Math.PI)*(v+.044715*v**3)))));
    x=add(x,project(hidden,W2));
    layers.push({input,Q,K,V,attention,context,output:x.map(r=>[...r])});allWeights.push({WQ,WK,WV,WO,W1,W2});
  }
  return {tokens,layers,weights:allWeights,configuration:{layers:2,heads:1,width:8,ffn:16,tokenization:'Unicode characters; first 12',weights:'Deterministic demonstration weights; not trained',normalization:'Pre-layer normalization; epsilon 1e-5',position:'Deterministic cosine position features',mask:'Causal'}};
}
