import{a as Ne,d as qe}from"./chunk-2O2JURZU.js";import{$ as ne,B as Te,L as me,M as Ie,N as ye,O as We,P as Re,S as Fe,T as Ge,U as He,V as je,W as te,Z as ke,aa as ie,ba as Ve,f as Ue,g as De,i as E,j as N,k as Le,m as Be,n as Pe,o as ee,p as pe,q as re,r as Ce,s as R,x as he,y as q,z as Oe}from"./chunk-V6ON5PBL.js";import"./chunk-6DHFEWGX.js";var Ke=new ee,se=new E,K=class extends je{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],i=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new pe(e,3)),this.setAttribute("uv",new pe(i,2))}applyMatrix4(e){let i=this.attributes.instanceStart,n=this.attributes.instanceEnd;return i!==void 0&&(i.applyMatrix4(e),n.applyMatrix4(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));let n=new te(i,6,1);return this.setAttribute("instanceStart",new R(n,3,0)),this.setAttribute("instanceEnd",new R(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));let n=new te(i,6,1);return this.setAttribute("instanceColorStart",new R(n,3,0)),this.setAttribute("instanceColorEnd",new R(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Ie(e.geometry)),this}fromLineSegments(e){let i=e.geometry;return this.setPositions(i.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ee);let e=this.attributes.instanceStart,i=this.attributes.instanceEnd;e!==void 0&&i!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Ke.setFromBufferAttribute(i),this.boundingBox.union(Ke))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new re),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,i=this.attributes.instanceEnd;if(e!==void 0&&i!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let t=0;for(let c=0,s=e.count;c<s;c++)se.fromBufferAttribute(e,c),t=Math.max(t,n.distanceToSquared(se)),se.fromBufferAttribute(i,c),t=Math.max(t,n.distanceToSquared(se));this.boundingSphere.radius=Math.sqrt(t),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};ne.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new De},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ie.line={uniforms:ye.merge([ne.common,ne.fog,ne.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = perspective ? normalize( mix( start.xyz, end.xyz, 0.5 ) ) : vec3( 0.0, 0.0, - 1.0 );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;

				// only shift the depth of vertices in front of the camera (#35137)
				if ( clip.w > 0.0 ) clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				float len;

				if ( isOrthographic ) {

					// View rays are parallel to the z axis so the distance reduces to camera-space XY
					vec2 lineDir = worldEnd.xy - worldStart.xy;
					float t = clamp( dot( worldPos.xy - worldStart.xy, lineDir ) / dot( lineDir, lineDir ), 0.0, 1.0 );
					len = length( worldStart.xy + lineDir * t - worldPos.xy );

				} else {

					// Find the closest points on the view ray and the line segment
					vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
					vec3 lineDir = worldEnd - worldStart;
					vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

					vec3 p1 = worldStart + lineDir * params.x;
					vec3 p2 = rayEnd * params.y;
					vec3 delta = p1 - p2;
					len = length( delta );

				}

				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var F=class extends We{constructor(e){super({type:"LineMaterial",uniforms:ye.clone(ie.line.uniforms),vertexShader:ie.line.vertexShader,fragmentShader:ie.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var ge=new N,Ye=new E,Xe=new E,S=new N,b=new N,P=new N,we=new E,ve=new Le,_=new ke,$e=new E,ae=new ee,le=new re,C=new N,O,j;function Je(r,e,i){return C.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),C.multiplyScalar(1/C.w),C.x=j/i.width,C.y=j/i.height,C.applyMatrix4(r.projectionMatrixInverse),C.multiplyScalar(1/C.w),Math.abs(Math.max(C.x,C.y))}function st(r,e){let i=r.matrixWorld,n=r.geometry,t=n.attributes.instanceStart,c=n.attributes.instanceEnd,s=Math.min(n.instanceCount,t.count);for(let f=0,m=s;f<m;f++){_.start.fromBufferAttribute(t,f),_.end.fromBufferAttribute(c,f),_.applyMatrix4(i);let a=new E,u=new E;O.distanceSqToSegment(_.start,_.end,u,a),u.distanceTo(a)<j*.5&&e.push({point:u,pointOnLine:a,distance:O.origin.distanceTo(u),object:r,face:null,faceIndex:f,uv:null,uv1:null})}}function at(r,e,i){let n=e.projectionMatrix,c=r.material.resolution,s=r.matrixWorld,f=r.geometry,m=f.attributes.instanceStart,a=f.attributes.instanceEnd,u=Math.min(f.instanceCount,m.count),p=-e.near;O.at(1,P),P.w=1,P.applyMatrix4(e.matrixWorldInverse),P.applyMatrix4(n),P.multiplyScalar(1/P.w),P.x*=c.x/2,P.y*=c.y/2,P.z=0,we.copy(P),ve.multiplyMatrices(e.matrixWorldInverse,s);for(let g=0,d=u;g<d;g++){if(S.fromBufferAttribute(m,g),b.fromBufferAttribute(a,g),S.w=1,b.w=1,S.applyMatrix4(ve),b.applyMatrix4(ve),S.z>p&&b.z>p)continue;if(S.z>p){let z=S.z-b.z,A=(S.z-p)/z;S.lerp(b,A)}else if(b.z>p){let z=b.z-S.z,A=(b.z-p)/z;b.lerp(S,A)}S.applyMatrix4(n),b.applyMatrix4(n),S.multiplyScalar(1/S.w),b.multiplyScalar(1/b.w),S.x*=c.x/2,S.y*=c.y/2,b.x*=c.x/2,b.y*=c.y/2,_.start.copy(S),_.start.z=0,_.end.copy(b),_.end.z=0;let x=_.closestPointToPointParameter(we,!0);_.at(x,$e);let w=Ue.lerp(S.z,b.z,x),y=w>=-1&&w<=1,l=we.distanceTo($e)<j*.5;if(y&&l){_.start.fromBufferAttribute(m,g),_.end.fromBufferAttribute(a,g),_.start.applyMatrix4(s),_.end.applyMatrix4(s);let z=new E,A=new E;O.distanceSqToSegment(_.start,_.end,A,z),i.push({point:A,pointOnLine:z,distance:O.origin.distanceTo(A),object:r,face:null,faceIndex:g,uv:null,uv1:null})}}}var ce=class extends q{constructor(e=new K,i=new F({color:Math.random()*16777215})){super(e,i),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,i=e.attributes.instanceStart,n=e.attributes.instanceEnd,t=new Float32Array(2*i.count);for(let s=0,f=0,m=i.count;s<m;s++,f+=2)Ye.fromBufferAttribute(i,s),Xe.fromBufferAttribute(n,s),t[f]=f===0?0:t[f-1],t[f+1]=t[f]+Ye.distanceTo(Xe);let c=new te(t,2,1);return e.setAttribute("instanceDistanceStart",new R(c,1,0)),e.setAttribute("instanceDistanceEnd",new R(c,1,1)),this}raycast(e,i){let n=this.material.worldUnits,t=e.camera;if(t===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let c=e.params.Line2!==void 0&&e.params.Line2.threshold||0;O=e.ray;let s=this.matrixWorld,f=this.geometry,m=this.material;j=m.linewidth+c,f.boundingSphere===null&&f.computeBoundingSphere(),le.copy(f.boundingSphere).applyMatrix4(s);let a;if(n)a=j*.5;else{let p=Math.max(t.near,le.distanceToPoint(O.origin));a=Je(t,p,m.resolution)}if(le.radius+=a,O.intersectsSphere(le)===!1)return;f.boundingBox===null&&f.computeBoundingBox(),ae.copy(f.boundingBox).applyMatrix4(s);let u;if(n)u=j*.5;else{let p=Math.max(t.near,ae.distanceToPoint(O.origin));u=Je(t,p,m.resolution)}ae.expandByScalar(u),O.intersectsBox(ae)!==!1&&(n?st(this,i):at(this,t,i))}onBeforeRender(e){let i=this.material.uniforms;i&&i.resolution&&(e.getViewport(ge),this.material.uniforms.resolution.value.set(ge.z,ge.w))}};var Y=class extends K{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let i=e.length-3,n=new Float32Array(2*i);for(let t=0;t<i;t+=3)n[2*t]=e[t],n[2*t+1]=e[t+1],n[2*t+2]=e[t+2],n[2*t+3]=e[t+3],n[2*t+4]=e[t+4],n[2*t+5]=e[t+5];return super.setPositions(n),this}setColors(e){let i=e.length-3,n=new Float32Array(2*i);for(let t=0;t<i;t+=3)n[2*t]=e[t],n[2*t+1]=e[t+1],n[2*t+2]=e[t+2],n[2*t+3]=e[t+3],n[2*t+4]=e[t+4],n[2*t+5]=e[t+5];return super.setColors(n),this}setFromPoints(e){let i=e.length-1,n=new Float32Array(6*i);for(let t=0;t<i;t++)n[6*t]=e[t].x,n[6*t+1]=e[t].y,n[6*t+2]=e[t].z||0,n[6*t+3]=e[t+1].x,n[6*t+4]=e[t+1].y,n[6*t+5]=e[t+1].z||0;return super.setPositions(n),this}fromLine(e){let i=e.geometry;return this.setPositions(i.attributes.position.array),this}};var de=class extends ce{constructor(e=new Y,i=new F({color:Math.random()*16777215})){super(e,i),this.isLine2=!0,this.type="Line2"}};var Ze="#171124",et="#745d94",tt="#ab92d1",nt=38,xe=(r,e,i)=>Math.max(e,Math.min(i,r)),Qe=r=>((r+180)%360+360)%360-180,fe=(r,e,i)=>Array.from({length:Math.floor((e-r)/i)+1},(n,t)=>r+t*i),Se=r=>new E(...qe(r));function lt(r){let e=fe(-75,75,15).map(c=>({equator:c===0,vertices:fe(-180,180,3).map(s=>Se([s,c]))})),i=fe(-180,150,30).map(c=>({equator:!1,vertices:fe(-90,90,3).map(s=>Se([c,s]))})),n=r.map(({id:c,color:s,points:f})=>({id:c,color:s,vertices:f.map(({vector:m})=>new E(...m))})),t=[n[0].vertices[0],n[0].vertices.at(-1)];return{grid:[...e,...i],tracks:n,endpoints:t}}function ct(r,{grid:e,tracks:i,endpoints:n}){let t=r.getContext("webgl2",{antialias:!0,alpha:!1});if(!t)return null;let c=new Ve({canvas:r,context:t,antialias:!0}),s=new Pe;s.background=new Be(Ze),s.add(new He("#e5d7ff",1.65));let f=new Ge("#faf0ff",2.3);f.position.set(-2,5,4),s.add(f);let m=[];function a(d){return m.push(d),d}s.add(new q(a(new me(1,72,48)),a(new Re({color:"#3e2d60",roughness:.76}))));for(let d of[!1,!0]){let h=[];for(let y of e.filter(l=>l.equator===d))for(let l=1;l<y.vertices.length;l++)h.push(y.vertices[l-1].clone().multiplyScalar(1.002),y.vertices[l].clone().multiplyScalar(1.002));let x=a(new Ce().setFromPoints(h)),w=a(new Oe({color:d?tt:et}));s.add(new Te(x,w))}let u=a(new me(.024,14,10)),p=a(new he({color:"#fdf1ff"}));for(let d of n){let h=new q(u,p);h.position.copy(d).multiplyScalar(1.01),s.add(h)}let g=i.map(d=>{let h=d.vertices.flatMap(z=>z.clone().multiplyScalar(1.009).toArray()),x=a(new F({color:d.color,linewidth:3,transparent:!0,depthWrite:!1})),w=a(new Y().setPositions(h)),y=new de(w,x);s.add(y);let l=new q(u,a(new he({color:d.color})));return l.position.copy(d.vertices[Math.floor(d.vertices.length/2)]).multiplyScalar(1.013),s.add(l),{track:d,material:x,midpoint:l}});return{resize(d,h,x){c.setPixelRatio(x),c.setSize(d,h,!1);for(let{material:w}of g)w.resolution.set(d,h)},paint(d,h,x,w){for(let{track:y,material:l,midpoint:z}of g)l.linewidth=y.id===w?4:2.4,l.opacity=y.id===w?1:.74,z.scale.setScalar(y.id===w?1.13:.75);c.render(s,d)},destroy(){for(let d of m)d.dispose();c.dispose()}}}function dt(r,{grid:e,tracks:i,endpoints:n}){let t=r.getContext("2d",{alpha:!1});if(!t)return null;let c,s;function f(a,u,p,g,d){t.beginPath();for(let h=1;h<a.length;h++){let x=a[h-1],w=a[h];if(!p(x)&&!p(w))continue;let y=u(x),l=u(w);t.moveTo(y.x,y.y),t.lineTo(l.x,l.y)}t.strokeStyle=g,t.lineWidth=d,t.stroke()}function m(a,u,p,g,d){if(!p(a))return;let h=u(a);t.beginPath(),t.arc(h.x,h.y,d,0,Math.PI*2),t.fillStyle=g,t.fill(),t.strokeStyle="#211630",t.lineWidth=1.25,t.stroke()}return{resize(a,u,p){c=a,s=u,r.width=Math.round(a*p),r.height=Math.round(u*p),t.setTransform(p,0,0,p,0,0)},paint(a,u,p,g){t.fillStyle=Ze,t.fillRect(0,0,c,s);let d=c/2,h=s/2,w=s/(2*Math.tan(Ne(nt)/2))/Math.sqrt(a.position.lengthSq()-1);t.save(),t.beginPath(),t.arc(d,h,w,0,Math.PI*2),t.clip();let y=t.createRadialGradient(d-w*.26,h-w*.31,0,d,h,w*1.16);y.addColorStop(0,"#664c89"),y.addColorStop(.83,"#382752"),y.addColorStop(1,"#211830"),t.fillStyle=y,t.fillRect(0,0,c,s);for(let l of e)f(l.vertices,u,p,l.equator?tt:et,l.equator?1.45:.85);t.lineCap="round";for(let l of i)t.globalAlpha=l.id===g?1:.76,f(l.vertices,u,p,l.color,l.id===g?3.6:2.25);t.restore();for(let l of n)m(l,u,p,"#fff2ff",3.4);for(let l of i)m(l.vertices[Math.floor(l.vertices.length/2)],u,p,l.color,l.id===g?4.9:3.3)},destroy(){}}}function Lt(r,e,{onSelect:i,onManual:n,onRenderer:t}){let c=lt(e),s=new Fe(nt,1,.1,50),f=new E(0,1,0),m=document.createElement("span");m.textContent="N",m.setAttribute("aria-hidden","true"),Object.assign(m.style,{position:"absolute",transform:"translate(-50%, -115%)",pointerEvents:"none",color:"#f7e9ff",background:"#171124d9",padding:".1rem .3rem",borderRadius:"4px",font:"700 12px system-ui"}),r.append(m);let a=new Map,u=0,p=24,g=1,d=!1,h=!1,x=!1,w=e[0].id,y=0,l=0,z=0,A="",X=0,$=0,be=[],M,U,ue,G;function D(){U&&h&&!X&&(X=requestAnimationFrame(it))}function _e(){let o=document.createElement("canvas");return o.setAttribute("aria-hidden","true"),r.prepend(o),o}function Ee(){U?.destroy(),M.removeEventListener("webglcontextlost",ze),M.remove(),M=_e();try{U=dt(M,c)}catch{U=null}if(!U){M.remove(),t("unavailable");return}A="",t("software-3d"),D()}function ze(o){o.preventDefault(),Ee()}function it(o){if(X=0,!U||!h||(y=M.clientWidth,l=M.clientHeight,!y||!l))return;let v=Math.min(globalThis.devicePixelRatio||1,1.75),L=`${y}x${l}`;(L!==A||v!==z)&&(A=L,z=v,U.resize(y,l,v),s.aspect=y/l,s.updateProjectionMatrix());let B=d&&x&&!a.size;B&&$&&(u=Qe(u+Math.min(45,o-$)*.012)),$=B?o:0;let W=3.9*g/Math.min(1,s.aspect);s.position.copy(Se([u,p])).multiplyScalar(W),s.lookAt(0,0,0),s.updateMatrixWorld();let T=new E,H=Z=>(T.copy(Z).project(s),{x:(T.x+1)*y/2,y:(1-T.y)*l/2}),Q=Z=>Z.dot(s.position)>=1;U.paint(s,H,Q,w),be=c.tracks.map(({id:Z,vertices:rt})=>({id:Z,points:rt.filter(Q).map(H)}));let I=H(f);m.hidden=!Q(f)||I.x<10||I.x>y-10||I.y<16||I.y>l,m.style.left=`${I.x}px`,m.style.top=`${I.y}px`,r.dataset.cameraYaw=String(u),r.dataset.cameraPitch=String(p),r.dataset.cameraDistance=String(W),B&&D()}function k(o,v=0){u=Qe(u+o),p=xe(p+v,-85,85),D()}function V(o){g=xe(g*o,.64,2.4),D()}function Ae(){u=0,p=24,g=1,D()}let oe=o=>[o.clientX,o.clientY],J=(o,v)=>Math.hypot(o[0]-v[0],o[1]-v[1]);r.addEventListener("pointerdown",o=>{o.pointerType==="mouse"&&o.button!==0||(a.set(o.pointerId,oe(o)),r.setPointerCapture(o.pointerId),a.size===1?(ue=oe(o),G=!0):(G=!1,n()))}),r.addEventListener("pointermove",o=>{let v=a.get(o.pointerId);if(!v)return;let L=oe(o);if(a.size===1)G&&J(ue,L)>4&&(G=!1,n()),G||k((v[0]-L[0])*.43,(L[1]-v[1])*.4);else if(a.size===2){let[,B]=[...a].find(([H])=>H!==o.pointerId),W=J(v,B),T=J(L,B);W>5&&T>5&&V(W/T)}a.set(o.pointerId,L)});function ot(o){if(a.has(o.pointerId)){if(o.type==="pointerup"&&G&&J(ue,oe(o))<=4){let v=M.getBoundingClientRect(),L=[o.clientX-v.left,o.clientY-v.top],B,W=13;for(let T of be)for(let{x:H,y:Q}of T.points){let I=J(L,[H,Q]);I<W&&(B=T.id,W=I)}B&&(n(),i(B))}a.delete(o.pointerId),G=!1,D()}}for(let o of["pointerup","pointercancel","lostpointercapture"])r.addEventListener(o,ot);r.addEventListener("wheel",o=>{if(o.ctrlKey||o.metaKey)return;o.preventDefault(),n();let v=o.deltaY*(o.deltaMode===1?14:o.deltaMode===2?l:1);V(Math.exp(xe(v*.00145,-.6,.6)))},{passive:!1});let Me={ArrowLeft:()=>k(12),ArrowRight:()=>k(-12),ArrowUp:()=>k(0,10),ArrowDown:()=>k(0,-10),"+":()=>V(.82),"=":()=>V(.82),"-":()=>V(1.22),Home:Ae};r.addEventListener("keydown",o=>{o.ctrlKey||o.metaKey||o.altKey||!Object.hasOwn(Me,o.key)||(o.preventDefault(),n(),Me[o.key]())}),new ResizeObserver(D).observe(r),new IntersectionObserver(([o])=>{x=o.isIntersecting,D()}).observe(r),M=_e();try{U=ct(M,c)}catch{U=null}return U?(M.addEventListener("webglcontextlost",ze),t("webgl-3d")):Ee(),{rotate:k,zoom:V,reset:Ae,select(o){w=o,D()},setOrbit(o){d!==o&&($=0),d=o,D()},setVisible(o){h=o,h?D():(cancelAnimationFrame(X),X=0,$=0)}}}export{Lt as createRouteGlobe};
