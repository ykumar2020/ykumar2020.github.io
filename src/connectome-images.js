import * as THREE from 'three';

// Image-based relief, not recovered anatomy. Source pixels remain available unchanged.
export function mountConnectomeImages(stage){
  document.querySelectorAll('.connectome-scene').forEach(host=>{
    const observer=new IntersectionObserver(([entry])=>{
      if(!entry.isIntersecting)return;observer.disconnect();
      const card=host.closest('.connectome-study');
      let uniforms,tiltX=0,tiltY=0,zoom=1,clock=0,angle=0,rotating=true,drag;
      const s=stage(host.id,s=>{
        s.group=new THREE.Group();s.scene.add(s.group);s.camera.position.set(0,0,5.2);
        s.onResize=(w,h)=>{s.camera.position.z=Math.max(5.2,2.5/(Math.tan(Math.PI/9)*(w/h)))/zoom;};
        s.update=(time=clock)=>{const dt=Math.max(0,Math.min(time-clock,.06));clock=time;if(rotating)angle=(angle+dt*Math.PI/30)%(Math.PI*2);if(uniforms)uniforms.time.value=time;s.group.rotation.set(tiltX,tiltY+angle,0);host.dataset.rotation=angle.toFixed(5);host.dataset.autoRotate=String(rotating);};
      });
      if(!s)return;
      const spin=document.createElement('button');spin.type='button';spin.dataset.brainRotate='';
      function updateSpin(){spin.textContent=rotating?'Pause rotation':'Resume rotation';spin.setAttribute('aria-pressed',String(rotating));host.dataset.autoRotate=String(rotating);}
      updateSpin();card.querySelector('[data-controls]').prepend(spin);
      spin.addEventListener('click',()=>{rotating=!rotating;updateSpin();});
      const texture=new THREE.TextureLoader().load(host.dataset.image,()=>{
        const ratio=texture.image.width/texture.image.height;
        uniforms={source:{value:texture},time:{value:0},depth:{value:.22},original:{value:0}};
        // Gentle relief displaces an image surface; it does not reconstruct hidden neurons.
        const material=new THREE.ShaderMaterial({transparent:true,side:THREE.DoubleSide,depthWrite:false,uniforms,
          vertexShader:`uniform sampler2D source;uniform float depth;varying vec2 imageUV;
          void main(){imageUV=uv;vec4 pixel=texture2D(source,uv);float light=max(pixel.r,max(pixel.g,pixel.b));vec3 p=position;p.z=depth*(light-.3);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,
          fragmentShader:`uniform sampler2D source;uniform float original,time;varying vec2 imageUV;
          void main(){vec4 pixel=texture2D(source,imageUV);float light=max(pixel.r,max(pixel.g,pixel.b));float mask=smoothstep(.035,.12,light)*pixel.a;if(mask<.015)discard;
          float sweep=pow(.5+.5*sin(imageUV.x*5.+imageUV.y*3.-time*.55),12.);
          vec3 purple=vec3(light*.65,light*.18,light);purple+=vec3(.10,.025,.16)*sweep*light;
          gl_FragColor=vec4(mix(purple,pixel.rgb,original),mask);}`});
        const surface=new THREE.Mesh(new THREE.PlaneGeometry(4.6,4.6/ratio,220,150),material);s.group.add(surface);
        // A sparse layer of source-pixel lights makes the depth treatment legible in motion.
        const canvas=document.createElement('canvas');canvas.width=600;canvas.height=Math.round(600/ratio);
        const context=canvas.getContext('2d',{willReadFrequently:true});context.drawImage(texture.image,0,0,canvas.width,canvas.height);
        const pixels=context.getImageData(0,0,canvas.width,canvas.height).data,points=[];
        for(let y=0;y<canvas.height;y+=3)for(let x=0;x<canvas.width;x+=3){
          const i=(y*canvas.width+x)*4,light=Math.max(pixels[i],pixels[i+1],pixels[i+2])/255;
          if(light<.22||pixels[i+3]<100)continue;
          points.push((x/canvas.width-.5)*4.6,(.5-y/canvas.height)*4.6/ratio,.22*(light-.3)+.015);
        }
        const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(points,3));
        const sparks=new THREE.Points(geometry,new THREE.PointsMaterial({color:0xd9b3ff,size:.009,transparent:true,opacity:.32,depthWrite:false,blending:THREE.AdditiveBlending}));s.group.add(sparks);
        card.querySelector('[data-image-colors]').addEventListener('change',e=>{uniforms.original.value=e.target.value==='source'?1:0;sparks.visible=e.target.value!=='source'&&uniforms.depth.value>0;host.dataset.palette=e.target.value;s.draw();});
        card.querySelector('[data-image-depth]').addEventListener('input',e=>{uniforms.depth.value=Number(e.target.value)/100*.5;sparks.visible=uniforms.depth.value>0&&uniforms.original.value===0;sparks.scale.z=uniforms.depth.value/.22;s.draw();});
        host.dataset.asset='loaded';host.dataset.palette='purple';s.update();s.resize();
        card.querySelectorAll('.connectome-settings input,.connectome-settings select').forEach(el=>el.disabled=false);
      },undefined,()=>{host.dataset.state='fallback';host.dataset.asset='failed';card.querySelector('[data-controls]').hidden=true;});
      texture.minFilter=THREE.LinearFilter;
      function redraw(){s.update();s.resize();}
      card.querySelector('[data-controls]').addEventListener('click',e=>{
        const action=e.target.closest('[data-tilt]')?.dataset.tilt;
        if(action==='left')tiltY=Math.max(-.45,tiltY-.15);
        if(action==='right')tiltY=Math.min(.45,tiltY+.15);
        if(action==='reset'){tiltX=tiltY=angle=0;zoom=1;card.querySelector('[data-image-zoom]').value='100';}
        if(action)redraw();
      });
      card.querySelector('[data-image-zoom]').addEventListener('input',e=>{zoom=Number(e.target.value)/100;redraw();});
      s.canvas.addEventListener('pointerdown',e=>{if(e.button!==0)return;rotating=false;updateSpin();drag={x:e.clientX,y:e.clientY,tx:tiltX,ty:tiltY};});
      s.canvas.addEventListener('pointermove',e=>{
        if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;
        if(e.pointerType==='touch'&&Math.abs(dy)>Math.abs(dx))return;
        if(Math.abs(dx)+Math.abs(dy)>5)s.canvas.setPointerCapture(e.pointerId);
        tiltY=THREE.MathUtils.clamp(drag.ty+dx*.003,-.45,.45);tiltX=THREE.MathUtils.clamp(drag.tx+dy*.003,-.25,.25);redraw();
      });
      for(const event of ['pointerup','pointercancel','lostpointercapture'])s.canvas.addEventListener(event,()=>{drag=null;});
      s.canvas.addEventListener('pointerleave',e=>{if(!s.canvas.hasPointerCapture(e.pointerId))drag=null;});
      s.canvas.addEventListener('webglcontextlost',()=>card.querySelectorAll('.connectome-settings input,.connectome-settings select').forEach(el=>el.disabled=true));
      s.canvas.addEventListener('webglcontextrestored',()=>card.querySelectorAll('.connectome-settings input,.connectome-settings select').forEach(el=>el.disabled=host.dataset.asset!=='loaded'));
    },{rootMargin:'200px'});observer.observe(host);
  });
}
