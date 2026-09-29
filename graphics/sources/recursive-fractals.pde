// ==========================================
// Julie Kumar - Graphics - HW #3
// I had to debug with Gemini 3 Pro as at some point the animation stopped running for some caching reason
// I used this code for reference: https://gitlab.com/ymmx/youtube/blob/master/fractal/BarnsleyFern.py
// 3 parts are implemented to some degree:
// Part 1: Sierpiński Pyramid 
// Part 2: Koch Snowflake 
// Part 3: Barnsley Skeleton (WIP, leaves do not work)
// ==========================================

float t = 0;
int activeAct = 0; 
float zPos = -2400; // Starting further back for a long approach
boolean coming = true;

// Starfield
int numStars = 500;
float[] starX = new float[numStars];
float[] starY = new float[numStars];
float[] starZ = new float[numStars];

void setup() {
  size(800, 700, P3D);
  frameRate(30);
  noStroke();
  
  // Initialize starfield
  for (int i = 0; i < numStars; i++) {
    starX[i] = random(-width*2, width*2);
    starY[i] = random(-height*2, height*2);
    starZ[i] = random(-4000, 500);
  }
}

void draw() {
  // Theme Backgrounds
  if (activeAct == 0) background(0); 
  else if (activeAct == 1) background(5, 10, 25); 
  else background(1, 6, 2); // Deep forest darkness
  
  drawStars();

  // ---------- SLOW MOTION LOGIC ----------
  float speed = 16.0;
  
  if (coming) {
    zPos += speed;
    if (zPos >= 150) coming = false;
  } else {
    zPos -= speed;
    if (zPos <= -2400) {
      coming = true;
      activeAct = (activeAct + 1) % 3; 
      zPos = -2400;
    }
  }

  // Calculate scale based on distance
  float s = map(zPos, -2400, 150, 0.05, 1.5);

  pushMatrix();
  translate(width/2, height*0.5, zPos); 
  scale(s);

  // ==================================================
  // ACT 1: GOLD PYRAMID
  // ==================================================
  if (activeAct == 0) {
    float lvl = map(zPos, -2200, 150, 0, 8);
    pointLight(255, 255, 150, 0, 0, 300);
    rotateY(t * 0.2); rotateX(t * 0.1);
    fill(255, 215, 0, 180);
    renderSierpinski(250, int(lvl));
  } 
  // ==================================================
  // ACT 2: BLUE SNOWFLAKE
  // ==================================================
  else if (activeAct == 1) {
    float lvl = map(zPos, -1500, 150, 0, 5);
    pointLight(100, 220, 255, 0, 0, 300);
    translate(0, -50, 0);
    rotateY(t * 0.15); rotateZ(t * 0.05);
    
    if (lvl < 0.5) { fill(100, 200, 255); sphere(50); } 
    else { fill(150, 230, 255, 200); renderSnowflake(280, int(lvl)); }
  } 
  // ==================================================
  // ACT 3: NEON BARNSLEY FERN (WITH LEAVES)
  // ==================================================
  else {
    // High Detail: Level 10 creates a very dense, leafy look
    float lvl = map(zPos, -2000, 150, 0, 10);
    lvl = constrain(lvl, 0, 10);
    
    // Neon Flicker
    float flicker = random(0.7, 1.3);
    if (random(1) > 0.97) flicker = 0.2; 
    
    pointLight(50, 255 * flicker, 100, 0, 0, 400);
    ambientLight(10, 30, 10);
    
    translate(0, 300, 0); // Position fern base
    rotateY(t * 0.2); 
    rotateX(sin(t * 0.3) * 0.1); // Organic sway
    
    if (lvl < 0.6) { 
      // Seed Phase
      fill(50, 255 * flicker, 100); 
      sphere(40); 
    } else { 
      // Leaf Phase
      fill(0, 255 * flicker, 120, 200);
      // Height 600 ensures it fills the screen
      drawBarnsley(int(lvl), 600); 
    }
  }
  popMatrix();

  t += 1.0 / frameRate;
}

// ==========================================
// BARNSLEY FERN (Full Leaf Structure)
// ==========================================
void drawBarnsley(int lvl, float h) {
  if (lvl <= 0) return;

  // Geometry variables
  float stemWidth = h * 0.02;
  float segmentLen = h * 0.15;

  // Draw the LEAF segment (Filled Triangle)
  beginShape(TRIANGLES);
  vertex(-stemWidth, 0, 0);
  vertex(stemWidth, 0, 0);
  vertex(0, -segmentLen, 0);
  endShape();

  // Move to the tip of this segment
  translate(0, -segmentLen, 0);

  // 1. Main Stem Continuation (85% size)
  pushMatrix();
  rotateZ(radians(2)); 
  scale(0.85); 
  drawBarnsley(lvl - 1, h);
  popMatrix();

  // 2. Left Leaflet (Side Branch)
  pushMatrix();
  translate(0, segmentLen * 0.2, 0); // Branch slightly up the stem
  rotateZ(radians(45)); 
  scale(0.35); // 35% size
  drawBarnsley(lvl - 1, h);
  popMatrix();

  // 3. Right Leaflet (Side Branch)
  pushMatrix();
  translate(0, segmentLen * 0.3, 0); // Asymmetric branching
  rotateZ(radians(-45)); 
  scale(0.35); 
  drawBarnsley(lvl - 1, h);
  popMatrix();
  
  // 4. Tiny corrective growth at base (fills gaps)
  pushMatrix();
  rotateZ(radians(1));
  scale(0.1);
  drawBarnsley(lvl - 1, h);
  popMatrix();
}

// ==========================================
// PYRAMID & SNOWFLAKE ENGINES
// ==========================================
void renderSierpinski(float s, int lvl) {
  PVector p1=new PVector(0,-s,0), p2=new PVector(-s,s,s), p3=new PVector(s,s,s), p4=new PVector(0,s,-s);
  drawSierpinski3D(p1,p2,p3,p4,lvl);
}
void drawSierpinski3D(PVector v1, PVector v2, PVector v3, PVector v4, int lvl) {
  if(lvl<=0){
    beginShape(TRIANGLES);
    vertex(v1.x,v1.y,v1.z);vertex(v2.x,v2.y,v2.z);vertex(v3.x,v3.y,v3.z);
    vertex(v1.x,v1.y,v1.z);vertex(v2.x,v2.y,v2.z);vertex(v4.x,v4.y,v4.z);
    vertex(v1.x,v1.y,v1.z);vertex(v3.x,v3.y,v3.z);vertex(v4.x,v4.y,v4.z);
    vertex(v2.x,v2.y,v2.z);vertex(v3.x,v3.y,v3.z);vertex(v4.x,v4.y,v4.z);
    endShape(); return;
  }
  PVector m12=PVector.add(v1,v2).mult(0.5), m13=PVector.add(v1,v3).mult(0.5), m14=PVector.add(v1,v4).mult(0.5);
  PVector m23=PVector.add(v2,v3).mult(0.5), m24=PVector.add(v2,v4).mult(0.5), m34=PVector.add(v3,v4).mult(0.5);
  drawSierpinski3D(v1,m12,m13,m14,lvl-1); drawSierpinski3D(m12,v2,m23,m24,lvl-1);
  drawSierpinski3D(m13,m23,v3,m34,lvl-1); drawSierpinski3D(m14,m24,m34,v4,lvl-1);
}

void renderSnowflake(float r, int lvl) {
  PVector v1=new PVector(0,-r), v2=new PVector(r*cos(PI/6),r*sin(PI/6)), v3=new PVector(-r*cos(PI/6),r*sin(PI/6));
  beginShape(TRIANGLES); drawKochSide(v1,v2,lvl); drawKochSide(v2,v3,lvl); drawKochSide(v3,v1,lvl); endShape();
}
void drawKochSide(PVector a, PVector b, int lvl) {
  if(lvl<=0){ vertex(a.x,a.y,0); vertex(b.x,b.y,0); vertex(0,0,15); return; }
  PVector v1=PVector.lerp(a,b,1.0/3.0), v3=PVector.lerp(a,b,2.0/3.0);
  PVector v2=v1.copy(); v2.add(PVector.sub(b,a).div(3).rotate(-PI/3));
  drawKochSide(a,v1,lvl-1); drawKochSide(v1,v2,lvl-1); drawKochSide(v2,v3,lvl-1); drawKochSide(v3,b,lvl-1);
}

// ==========================================
// STARFIELD
// ==========================================
void drawStars() {
  stroke(activeAct==0?color(255,255,200):activeAct==1?color(180,220,255):color(180,255,180), 150);
  strokeWeight(2);
  for (int i=0; i<numStars; i++) {
    point(starX[i],starY[i],starZ[i]);
    starZ[i]+=6; 
    if(starZ[i]>500) starZ[i]=-4000;
  }
}
