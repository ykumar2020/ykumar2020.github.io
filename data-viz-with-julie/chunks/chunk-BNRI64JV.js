function r(l){let n=[...new Set(l.flatMap(e=>e.fields.map(([a])=>a)))],s=l.map(e=>{let a=new Map(e.fields);return{id:e.id,cells:n.map(t=>a.get(t)??"")}});return{columns:n,rows:s}}export{r as a};
