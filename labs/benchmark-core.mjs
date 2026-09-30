export function validateBenchmark(data){
  if(!data||!Array.isArray(data.records)||!data.records.length||data.records.length>500)throw Error('Expected 1–500 benchmark records.');
  for(const r of data.records){if(typeof r.model!=='string'||!r.model.trim()||r.model.length>80||!['English','Spanish','Chinese'].includes(r.language))throw Error('Each record needs a model and English, Spanish, or Chinese language.');
    for(const [key,max] of [['arss',6],['refusalPercent',100],['latencySeconds',1000000]])if(typeof r[key]!=='number'||!Number.isFinite(r[key])||r[key]<0||r[key]>max)throw Error(`Invalid ${key}.`);
    if(!Number.isInteger(r.prompts)||r.prompts<1)throw Error('Each record needs a positive integer prompt count.');}
  return data;
}
