export function capsuleMetrics(radius,halfLength=1.1,reference=.6){
  if(!Number.isFinite(radius)||radius<=0)throw Error('Positive radius required');
  return {radius,halfLength,axisLength:2*halfLength,volume:Math.PI*radius**2*2*halfLength+4*Math.PI*radius**3/3,hausdorff:Math.abs(radius-reference),referenceRadius:reference};
}
