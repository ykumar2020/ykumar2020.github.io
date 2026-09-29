// Julie Kumar, HW #1
                                                
// 1) Normal balls spawn gradually: 1 per second (not all at once)                             // requirement                        
// 2) Collision => both balls explode into rainbow fireworks and die permanently               // requirement
// 3) Golden Snitch appears ONLY after HALF of the total normal balls are dead                 // requirement
// 4) Snitch is faster + smarter (seeks mouse, avoids balls/walls), but its smarts decay       // requirement

                                                            // section header
// --------------------                                                                        // section header
// GAME STATE CONSTANTS                                                                        // section header
// --------------------                                                                        // section header
final int STATE_CONFIG  = 0;                                                                   // config/menu screen id
final int STATE_RUNNING = 1;                                                                   // gameplay screen id
final int STATE_OVER    = 2;                                                                   // game over screen id
int state = STATE_CONFIG;                                                                      // current game state

// --------------------                                                                        // section header
// USER PARAMETERS                                                                             // section header
// --------------------                                                                        // section header
int normalBallCount = 50;                                                                      // total normal balls to spawn (snitch is extra)
float speedMult = 1.0;                                                                         // base speed multiplier for all motion

final int MIN_BALLS = 2;                                                                       // minimum normal balls allowed
final int MAX_BALLS = 200;                                                                     // maximum normal balls allowed
final float MIN_SPEED = 0.2;                                                                   // minimum speed multiplier allowed
final float MAX_SPEED = 5.0;                                                                   // maximum speed multiplier allowed

// --------------------                                                                        // section header
// GRADUAL SPAWN (1 ball per second)                                                           // section header
// --------------------                                                                        // section header
final int SPAWN_INTERVAL_MS = 1000;                                                            // 1000 ms = 1 second
int spawnedNormals = 0;                                                                        // how many normal balls have been created so far
int nextSpawnMillis = 0;                                                                       // millis() time when next spawn should happen

// --------------------                                                                        // section header
// SNITCH ENDING SAFETY NET                                                                     // section header
// --------------------                                                                        // section header
final int SNITCH_MAX_LIFETIME_MS = 120000;                                                      // hard stop: 120 seconds after snitch spawns

// --------------------                                                                        // section header
// SIMULATION CONTAINERS                                                                       // section header
// --------------------                                                                        // section header
ArrayList<Ball> balls = new ArrayList<Ball>();                                                  // list for normal balls + snitch (later)
ArrayList<Particle> particles = new ArrayList<Particle>();                                      // list for fireworks particles

// --------------------                                                                        // section header
// SNITCH CONTROL                                                                              // section header
// --------------------                                                                        // section header
Snitch snitch = null;                                                                          // reference to snitch (once spawned)
boolean snitchSpawned = false;                                                                  // whether snitch has spawned
int deadThresholdForSnitch = 0;                                                                 // how many DEAD normals required to spawn snitch

// --------------------                                                                        // section header
// TIMERS FOR SCORING / DISPLAY                                                                 // section header
// --------------------                                                                        // section header
int gameStartMillis = 0;                                                                        // game start time (ms)
int snitchStartMillis = 0;                                                                      // snitch spawn time (ms)
int gameEndMillis = 0;                                                                          // game end time (ms)

// --------------------                                                                        // section header
// UI BUTTON (START)                                                                           // section header
// --------------------                                                                        // section header
int btnX = 20, btnY = 20, btnW = 190, btnH = 48;                                                // start button rectangle

// =====================                                                                       // divider
// SETUP                                                                                       // divider
// =====================                                                                       // divider
void setup() {                                                                                  // Processing setup()
  size(600, 400);                                                                               // window size
  frameRate(100);                                                                               // fast updates
  textFont(createFont("Arial", 16));                                                            // font for UI text
}

// =====================                                                                       // divider
// MAIN DRAW LOOP                                                                              // divider
// =====================                                                                       // divider
void draw() {                                                                                   // Processing draw()
  background(0);                                                                                // BLACK background everywhere

  if (state == STATE_CONFIG) {                                                                  // if config state
    drawConfigScreen();                                                                         // show parameters + start button
  } else if (state == STATE_RUNNING) {                                                          // if running state
    stepSimulation();                                                                           // update simulation (NO HUD)
  } else {                                                                                      // if over state
    drawGameOverScreen();                                                                       // show final stats/score
  }
}

// =====================                                                                       // divider
// CONFIG SCREEN (SHOW STATS ONLY HERE)                                                         // divider
// =====================                                                                       // divider
void drawConfigScreen() {                                                                       // render config screen
  fill(255);                                                                                    // white text on black
  textAlign(LEFT, TOP);                                                                         // text alignment
  textSize(18);                                                                                 // title size
  text("Game Parameters", 20, 80);                                                              // title text

  textSize(14);                                                                                 // instruction size
  text("W/S : Normal balls to spawn (1 per second)  min " + MIN_BALLS + ", max " + MAX_BALLS, 20, 120); // instructions
  text("A/D : Speed multiplier                       min " + nf(MIN_SPEED,1,1) + ", max " + nf(MAX_SPEED,1,1), 20, 145);     // instructions
  text("Mouse : Controls Snitch target AFTER it appears", 20, 170);                             // snitch note
  text("ENTER or click START to begin", 20, 195);                                               // start note

  textSize(16);                                                                                 // value size
  text("Normal balls: " + normalBallCount, 20, 235);                                            // show balls count
  text("Speed: " + nf(speedMult, 1, 1) + "x", 20, 260);                                         // show speed multiplier

  textSize(14);                                                                                 // additional note size
  text("Snitch appears after " + ((normalBallCount + 1) / 2) + " normal balls are dead.", 20, 290); // snitch rule preview
  text("Game ends when Snitch dies OR all normals die OR Snitch lasts " + (SNITCH_MAX_LIFETIME_MS/1000) + "s.", 20, 312);     // end rules

  drawButton("START");                                                                          // draw start button
}

// =====================                                                                       // divider
// INPUT HANDLING                                                                              // divider
// =====================                                                                       // divider
void keyPressed() {                                                                             // keyboard handler
  if (state == STATE_CONFIG) {                                                                  // if on config screen
    if (key == 'w' || key == 'W') normalBallCount = min(MAX_BALLS, normalBallCount + 1);        // increase balls
    if (key == 's' || key == 'S') normalBallCount = max(MIN_BALLS, normalBallCount - 1);        // decrease balls

    if (key == 'd' || key == 'D') speedMult = min(MAX_SPEED, speedMult + 0.1);                  // increase speed
    if (key == 'a' || key == 'A') speedMult = max(MIN_SPEED, speedMult - 0.1);                  // decrease speed

    if (keyCode == ENTER || keyCode == RETURN) startGame();                                     // start game with Enter
  } else if (state == STATE_OVER) {                                                             // if game over screen
    if (key == 'r' || key == 'R') {                                                             // if user presses R
      particles.clear();                                                                        // clear remaining particles
      state = STATE_CONFIG;                                                                     // return to config
    }
  }
}

void mousePressed() {                                                                           // mouse click handler
  if (state == STATE_CONFIG) {                                                                  // only active on config screen
    if (mouseX >= btnX && mouseX <= btnX + btnW &&                                              // inside button in X
        mouseY >= btnY && mouseY <= btnY + btnH) {                                              // inside button in Y
      startGame();                                                                              // start game on click
    }
  }
}

// =====================                                                                       // divider
// START GAME (RESET EVERYTHING)                                                                // divider
// =====================                                                                       // divider
void startGame() {                                                                              // initialize game state
  balls.clear();                                                                                // clear balls list
  particles.clear();                                                                            // clear particles list

  snitch = null;                                                                                // reset snitch reference
  snitchSpawned = false;                                                                        // snitch not spawned yet
  snitchStartMillis = 0;                                                                        // clear snitch timer

  spawnedNormals = 0;                                                                           // no normals spawned yet
  nextSpawnMillis = millis();                                                                   // spawn first ball immediately

  deadThresholdForSnitch = (normalBallCount + 1) / 2;                                           // ceil(normalBallCount/2) dead normals required

  gameStartMillis = millis();                                                                   // set game start time
  gameEndMillis = 0;                                                                            // clear end time

  state = STATE_RUNNING;                                                                        // switch to gameplay
}

// =====================                                                                       // divider
// GAMEPLAY STEP (NO STATS DRAWN HERE)                                                          // divider
// =====================                                                                       // divider
void stepSimulation() {                                                                         // one frame of simulation
  spawnNormalsGradually();                                                                      // spawn 1 normal ball per second

  updateBalls();                                                                                // update ball positions/steering
  handleCollisions();                                                                           // detect collisions and explode balls
  maybeSpawnSnitch();                                                                           // spawn snitch after half normals are dead
  updateParticles();                                                                            // update fireworks particles

  drawBalls();                                                                                  // draw neon balls
  drawParticles();                                                                              // draw fireworks (glow)

  checkEndConditions();                                                                         // end game if needed (FIXED)
}

// --------------------                                                                        // section header
// SPAWN NORMAL BALLS GRADUALLY                                                                 // section header
// --------------------                                                                        // section header
void spawnNormalsGradually() {                                                                  // time-based spawner
  while (millis() >= nextSpawnMillis && spawnedNormals < normalBallCount) {                     // spawn if time and still need more
    Ball b = new Ball();                                                                        // create new ball
    b.spawn(balls, speedMult);                                                                  // choose safe position + velocity + neon color
    balls.add(b);                                                                               // add to list
    spawnedNormals++;                                                                           // increment spawn count
    nextSpawnMillis += SPAWN_INTERVAL_MS;                                                       // schedule next spawn
  }
}

// --------------------                                                                        // section header
// UPDATE BALLS                                                                                // section header
// --------------------                                                                        // section header
void updateBalls() {                                                                            // update all balls
  for (int i = 0; i < balls.size(); i++) {                                                      // loop over balls
    balls.get(i).update(balls);                                                                 // update each ball
  }
}

// --------------------                                                                        // section header
// COLLISION DETECTION (PAIRWISE)                                                               // section header
// --------------------                                                                        // section header
void handleCollisions() {                                                                       // check for collisions
  for (int i = 0; i < balls.size(); i++) {                                                      // outer loop
    Ball a = balls.get(i);                                                                      // ball a
    if (!a.alive) continue;                                                                     // skip dead

    for (int j = i + 1; j < balls.size(); j++) {                                                // inner loop
      Ball b = balls.get(j);                                                                    // ball b
      if (!b.alive) continue;                                                                   // skip dead

      float dx = b.x - a.x;                                                                     // delta x
      float dy = b.y - a.y;                                                                     // delta y
      float minDist = a.r + b.r;                                                                // sum of radii

      if (dx*dx + dy*dy <= minDist*minDist) {                                                   // if overlap => collision
        explodeBall(a);                                                                         // explode a
        explodeBall(b);                                                                         // explode b
        a.alive = false;                                                                        // kill a permanently
        b.alive = false;                                                                        // kill b permanently
      }
    }
  }
}

// --------------------                                                                        // section header
// SNITCH SPAWN                                                                                // section header
// --------------------                                                                        // section header
void maybeSpawnSnitch() {                                                                       // determine if snitch should appear
  if (snitchSpawned) return;                                                                    // only spawn once

  int deadNormals = countDeadNormals();                                                         // count dead normal balls
  if (deadNormals >= deadThresholdForSnitch) {                                                  // if half are dead
    snitchSpawned = true;                                                                       // mark spawned
    snitch = new Snitch();                                                                      // create snitch
    snitch.spawn(balls, speedMult);                                                             // spawn snitch safely
    balls.add(snitch);                                                                          // add to list
    snitchStartMillis = millis();                                                               // start snitch timer
  }
}

// --------------------                                                                        // section header
// PARTICLE UPDATE                                                                             // section header
// --------------------                                                                        // section header
void updateParticles() {                                                                        // update fireworks
  for (int k = particles.size() - 1; k >= 0; k--) {                                             // backward loop (safe remove)
    Particle p = particles.get(k);                                                              // particle p
    p.update();                                                                                 // update p
    if (p.dead()) particles.remove(k);                                                          // remove if dead
  }
}

// --------------------                                                                        // section header
// END CONDITIONS (FIXED)                                                                      // section header
// --------------------                                                                        // section header
void checkEndConditions() {                                                                     // decide if game ends
  int aliveNormals = countAliveNormals();                                                       // compute alive normal balls

  if (snitchSpawned) {                                                                          // if snitch exists (spawned)
    int snitchAge = millis() - snitchStartMillis;                                               // time since snitch spawned

    boolean snitchDead = (snitch == null || !snitch.alive);                                     // snitch is dead?
    boolean noNormalsLeft = (aliveNormals == 0);                                                // all normals dead?
    boolean snitchTimedOut = (snitchAge >= SNITCH_MAX_LIFETIME_MS);                             // snitch max lifetime reached?

    if (snitchDead || noNormalsLeft || snitchTimedOut) {                                        // if any end condition true
      if (snitch != null && snitch.alive && (noNormalsLeft || snitchTimedOut)) {               // if snitch still alive but we must end
        explodeBall(snitch);                                                                    // explode snitch for dramatic finish
        snitch.alive = false;                                                                   // kill snitch so end screen is consistent
      }
      gameEndMillis = millis();                                                                 // set end time (ensures score will show)
      state = STATE_OVER;                                                                       // go to game over screen
    }
  } else {                                                                                      // if snitch not spawned yet
    if (spawnedNormals == normalBallCount && aliveNormals == 0) {                               // if all normals spawned and all dead
      gameEndMillis = millis();                                                                 // set end time
      state = STATE_OVER;                                                                       // go to game over
    }
  }
}

// =====================                                                                       // divider
// GAME OVER SCREEN (SHOW STATS ONLY HERE)                                                      // divider
// =====================                                                                       // divider
void drawGameOverScreen() {                                                                     // render end screen
  background(0);                                                                                // black background

  for (int k = particles.size() - 1; k >= 0; k--) {                                             // keep updating fireworks briefly
    Particle p = particles.get(k);                                                              // particle
    p.update();                                                                                 // update
    if (p.dead()) particles.remove(k);                                                          // remove dead
  }

  drawParticles();                                                                              // show remaining fireworks glow

  int totalElapsed = gameEndMillis - gameStartMillis;                                           // total game time
  boolean snitchEverSpawned = (snitchStartMillis > 0);                                          // whether snitch appeared

  int finalScoreSec = 0;                                                                        // final score seconds
  String detailLine = "";                                                                       // extra detail text

  if (snitchEverSpawned) {                                                                      // if snitch spawned
    int snitchElapsed = gameEndMillis - snitchStartMillis;                                      // snitch survival time
    finalScoreSec = snitchElapsed / 1000;                                                       // score = snitch survival seconds
    detailLine = "Snitch survival: " + formatTime(snitchElapsed);                               // detail line
  } else {                                                                                      // if snitch never spawned
    finalScoreSec = totalElapsed / 1000;                                                        // score = total elapsed seconds
    detailLine = "Snitch never spawned (normals died early).";                                  // detail line
  }

  fill(255);                                                                                    // white text
  textAlign(CENTER, CENTER);                                                                    // center text
  textSize(24);                                                                                 // title size
  text("GAME OVER", width/2, height/2 - 85);                                                    // title

  textSize(16);                                                                                 // info size
  text("Total time: " + formatTime(totalElapsed), width/2, height/2 - 45);                      // show total time
  text(detailLine, width/2, height/2 - 20);                                                     // show snitch detail
  text("Final score: " + finalScoreSec + " seconds", width/2, height/2 + 5);                    // show final score
  text("Press R to reconfigure", width/2, height/2 + 45);                                       // restart instruction
}

// =====================                                                                       // divider
// COUNTS (NORMALS ONLY)                                                                        // divider
// =====================                                                                       // divider
int countAliveNormals() {                                                                       // alive normal balls
  int alive = 0;                                                                                // counter
  for (int i = 0; i < balls.size(); i++) {                                                      // iterate balls
    Ball b = balls.get(i);                                                                      // current ball
    if (b instanceof Snitch) continue;                                                          // skip snitch
    if (b.alive) alive++;                                                                       // count alive
  }
  return alive;                                                                                 // return count
}

int countDeadNormals() {                                                                        // dead normal balls
  int dead = 0;                                                                                 // counter
  for (int i = 0; i < balls.size(); i++) {                                                      // iterate balls
    Ball b = balls.get(i);                                                                      // current ball
    if (b instanceof Snitch) continue;                                                          // skip snitch
    if (!b.alive) dead++;                                                                       // count dead
  }
  return dead;                                                                                  // return count
}

// =====================                                                                       // divider
// UI BUTTON                                                                                   // divider
// =====================                                                                       // divider
void drawButton(String label) {                                                                 // draw start button
  stroke(0, 255, 255);                                                                          // neon cyan border
  strokeWeight(2);                                                                              // border thickness
  fill(20);                                                                                     // dark fill for contrast
  rect(btnX, btnY, btnW, btnH);                                                                 // button rectangle

  fill(255);                                                                                    // white text
  noStroke();                                                                                   // no stroke for text
  textAlign(CENTER, CENTER);                                                                    // centered label
  textSize(16);                                                                                 // label size
  text(label, btnX + btnW/2, btnY + btnH/2);                                                    // draw label
}

// =====================                                                                       // divider
// TIME FORMAT                                                                                // divider
// =====================                                                                       // divider
String formatTime(int ms) {                                                                     // ms -> mm:ss
  int totalSec = ms / 1000;                                                                     // convert to seconds
  int minutes = totalSec / 60;                                                                  // minutes portion
  int seconds = totalSec % 60;                                                                  // seconds portion
  return nf(minutes, 2) + ":" + nf(seconds, 2);                                                 // formatted string
}

// =====================                                                                       // divider
// FIREWORKS (RAINBOW, GLOW ON BLACK)                                                          // divider
// =====================                                                                       // divider
void explodeBall(Ball b) {                                                                      // explosion wrapper
  spawnRainbow(b.x, b.y, 70, 1.2, 6.0, 220, 4.5);                                               // large burst
  spawnRainbow(b.x, b.y, 30, 0.8, 4.8, 140, 2.8);                                               // small crackle
}

void spawnRainbow(float ox, float oy, int pieces, float vMin, float vMax, float life0, float size0) { // rainbow particle spawner
  for (int k = 0; k < pieces; k++) {                                                            // loop pieces
    float ang = random(TWO_PI);                                                                 // random direction
    float spd = random(vMin, vMax);                                                             // random speed

    float vx = cos(ang) * spd;                                                                  // x velocity
    float vy = sin(ang) * spd;                                                                  // y velocity
    vy -= random(0.6, 2.4);                                                                     // upward bias

    float h = (360.0 * k / pieces + random(-10, 10)) % 360.0;                                   // rainbow hue spread
    int[] rgb = hsvToRgb(h, 1.0, 1.0);                                                          // HSV->RGB (full neon)

    particles.add(new Particle(                                                                 // add particle
      ox, oy,                                                                                   // origin x,y
      vx, vy,                                                                                   // velocity x,y
      rgb[0], rgb[1], rgb[2],                                                                    // color r,g,b
      life0 + random(-30, 30),                                                                   // lifetime
      size0 * random(0.6, 1.2)                                                                   // size
    ));                                                                                         // end add
  }
}

int[] hsvToRgb(float h, float s, float v) {                                                     // HSV->RGB converter
  float c = v * s;                                                                              // chroma
  float x = c * (1 - abs((h / 60.0) % 2 - 1));                                                  // secondary component
  float m = v - c;                                                                              // value offset

  float rp = 0, gp = 0, bp = 0;                                                                 // rgb primes

  if      (0 <= h && h < 60)   { rp = c; gp = x; bp = 0; }                                      // sector 0
  else if (60 <= h && h < 120) { rp = x; gp = c; bp = 0; }                                      // sector 1
  else if (120 <= h && h < 180){ rp = 0; gp = c; bp = x; }                                      // sector 2
  else if (180 <= h && h < 240){ rp = 0; gp = x; bp = c; }                                      // sector 3
  else if (240 <= h && h < 300){ rp = x; gp = 0; bp = c; }                                      // sector 4
  else                         { rp = c; gp = 0; bp = x; }                                      // sector 5

  int r = int((rp + m) * 255);                                                                  // scale to 0..255
  int g = int((gp + m) * 255);                                                                  // scale to 0..255
  int b = int((bp + m) * 255);                                                                  // scale to 0..255

  return new int[] { constrain(r, 0, 255), constrain(g, 0, 255), constrain(b, 0, 255) };         // return clamped rgb
}

// =====================                                                                       // divider
// DRAW ENTITIES                                                                               // divider
// =====================                                                                       // divider
void drawBalls() {                                                                              // draw all balls
  blendMode(BLEND);                                                                             // normal blend for solid balls
  for (int i = 0; i < balls.size(); i++) {                                                      // loop balls
    balls.get(i).draw();                                                                        // draw ball
  }
}

void drawParticles() {                                                                          // draw all particles
  blendMode(ADD);                                                                               // additive blending for glow
  for (int i = 0; i < particles.size(); i++) {                                                  // loop particles
    particles.get(i).draw();                                                                    // draw particle
  }
  blendMode(BLEND);                                                                             // restore blend
}

// =====================                                                                       // divider
// BALL CLASS (NEON NORMAL BALL)                                                                // divider
// =====================                                                                       // divider
class Ball {                                                                                    // normal ball type
  float x, y, vx, vy, r;                                                                        // position, velocity, radius
  boolean alive = true;                                                                         // alive flag

  int cr = 0, cg = 0, cb = 0;                                                                   // stored RGB for neon glow

  void spawn(ArrayList<Ball> existing, float spdMult) {                                         // spawn with safe placement
    alive = true;                                                                               // ensure alive
    r = random(6, 14);                                                                          // radius

    boolean placed = false;                                                                     // placement flag
    for (int tries = 0; tries < 500 && !placed; tries++) {                                      // attempts
      x = random(r, width - r);                                                                 // random x
      y = random(r, height - r);                                                                // random y
      placed = true;                                                                            // assume ok

      for (int i = 0; i < existing.size(); i++) {                                               // overlap check
        Ball other = existing.get(i);                                                           // other ball
        if (other == null || other == this || !other.alive) continue;                           // skip invalid
        float dx = x - other.x;                                                                 // delta x
        float dy = y - other.y;                                                                 // delta y
        float minDist = r + other.r;                                                            // min distance
        if (dx*dx + dy*dy < minDist*minDist) {                                                  // overlap?
          placed = false;                                                                       // fail
          break;                                                                                // stop
        }
      }
    }

    vx = random(-2.5, 2.5) * spdMult;                                                           // vx
    vy = random(-2.5, 2.5) * spdMult;                                                           // vy

    if (abs(vx) < 0.6 * spdMult) vx = (vx < 0 ? -0.6 * spdMult : 0.6 * spdMult);                // avoid too-slow vx
    if (abs(vy) < 0.6 * spdMult) vy = (vy < 0 ? -0.6 * spdMult : 0.6 * spdMult);                // avoid too-slow vy

    float hue = random(0, 360);                                                                 // neon hue
    int[] rgb = hsvToRgb(hue, 1.0, 1.0);                                                        // vivid rgb
    cr = rgb[0];                                                                                // store r
    cg = rgb[1];                                                                                // store g
    cb = rgb[2];                                                                                // store b
  }

  void update(ArrayList<Ball> all) {                                                            // update normal ball
    if (!alive) return;                                                                         // skip dead
    x += vx;                                                                                    // move x
    y += vy;                                                                                    // move y
    if (x > width - r)  { x = width - r;  vx = -vx; }                                           // bounce right
    if (x < r)          { x = r;          vx = -vx; }                                           // bounce left
    if (y > height - r) { y = height - r; vy = -vy; }                                           // bounce bottom
    if (y < r)          { y = r;          vy = -vy; }                                           // bounce top
  }

  void draw() {                                                                                 // draw neon normal ball
    if (!alive) return;                                                                         // skip dead
    noStroke();                                                                                 // no stroke
    fill(cr, cg, cb, 60);                                                                       // glow fill
    ellipse(x, y, r*2.8, r*2.8);                                                                // glow halo
    fill(cr, cg, cb, 220);                                                                      // body fill
    ellipse(x, y, r*2, r*2);                                                                    // body
    fill(255, 255, 255, 80);                                                                    // highlight fill
    ellipse(x - r*0.25, y - r*0.25, r*0.6, r*0.6);                                               // highlight
  }
}

// =====================                                                                       // divider
// SNITCH CLASS                                                                                // divider
// =====================                                                                       // divider
class Snitch extends Ball {                                                                     // snitch extends Ball
  PVector vel = new PVector(0, 0);                                                              // velocity
  PVector acc = new PVector(0, 0);                                                              // acceleration

  float snitchSpeedFactor = 2.2;                                                                // speed factor
  float maxForce = 0.24;                                                                        // steering clamp
  float avoidRadius = 85;                                                                       // avoid radius
  float wallMargin = 55;                                                                        // wall margin

  @Override
  void spawn(ArrayList<Ball> existing, float spdMult) {                                         // spawn snitch
    alive = true;                                                                               // alive
    r = 10;                                                                                     // radius
    cr = 255;                                                                                   // neon gold r
    cg = 220;                                                                                   // neon gold g
    cb = 60;                                                                                    // neon gold b

    boolean placed = false;                                                                     // placement flag
    for (int tries = 0; tries < 800 && !placed; tries++) {                                      // attempts
      x = random(r, width - r);                                                                 // random x
      y = random(r, height - r);                                                                // random y
      placed = true;                                                                            // assume ok

      for (int i = 0; i < existing.size(); i++) {                                               // overlap check
        Ball other = existing.get(i);                                                           // other ball
        if (other == null || other == this || !other.alive) continue;                           // skip invalid
        float dx = x - other.x;                                                                 // delta x
        float dy = y - other.y;                                                                 // delta y
        float minDist = r + other.r + 10;                                                       // buffer
        if (dx*dx + dy*dy < minDist*minDist) {                                                  // overlap?
          placed = false;                                                                       // fail
          break;                                                                                // stop
        }
      }
    }

    float base = 2.5 * spdMult * snitchSpeedFactor;                                             // base speed
    vel.set(random(-base, base), random(-base, base));                                          // initial velocity
    if (vel.mag() < 0.8 * spdMult) vel.set(base, -base);                                        // ensure motion
  }

  @Override
  void update(ArrayList<Ball> all) {                                                            // snitch update
    if (!alive) return;                                                                         // skip dead
    acc.set(0, 0);                                                                              // reset acc

    float t = (millis() - snitchStartMillis) / 1000.0;                                          // time since spawn
    float decay = constrain(t / 60.0, 0, 1);                                                    // decay 0..1

    float avoidW = lerp(2.8, 0.8, decay);                                                       // avoid weight decays
    float wallW  = lerp(2.2, 0.7, decay);                                                       // wall weight decays
    float seekW  = 1.1;                                                                         // seek constant

    PVector target = new PVector(mouseX, mouseY);                                               // mouse target
    PVector seekF  = seek(target);                                                              // seek force
    PVector avoidF = avoidBalls(all);                                                           // avoid force
    PVector wallF  = avoidWalls();                                                              // wall force

    acc.add(seekF.mult(seekW));                                                                 // add seek
    acc.add(avoidF.mult(avoidW));                                                               // add avoid
    acc.add(wallF.mult(wallW));                                                                 // add wall

    vel.add(acc);                                                                               // integrate

    float maxSpeed = 2.5 * speedMult * snitchSpeedFactor;                                       // max speed
    vel.limit(maxSpeed);                                                                        // clamp

    x += vel.x;                                                                                 // move x
    y += vel.y;                                                                                 // move y

    if (x > width - r)  { x = width - r;  vel.x *= -0.95; }                                     // reflect right
    if (x < r)          { x = r;          vel.x *= -0.95; }                                     // reflect left
    if (y > height - r) { y = height - r; vel.y *= -0.95; }                                     // reflect bottom
    if (y < r)          { y = r;          vel.y *= -0.95; }                                     // reflect top
  }

  PVector seek(PVector target) {                                                                // seek helper
    PVector pos = new PVector(x, y);                                                            // current pos
    PVector desired = PVector.sub(target, pos);                                                 // desired direction
    float d = desired.mag();                                                                    // distance
    if (d < 0.0001) return new PVector(0, 0);                                                   // avoid zero

    desired.normalize();                                                                        // normalize
    float maxSpeed = 2.5 * speedMult * snitchSpeedFactor;                                       // max speed
    float slowRadius = 110;                                                                     // slow radius
    float spd = (d < slowRadius) ? map(d, 0, slowRadius, 0, maxSpeed) : maxSpeed;               // arrive
    desired.mult(spd);                                                                          // desired vel

    PVector steer = PVector.sub(desired, vel);                                                  // steering
    steer.limit(maxForce);                                                                      // clamp
    return steer;                                                                               // return
  }

  PVector avoidBalls(ArrayList<Ball> all) {                                                     // avoid balls helper
    PVector sum = new PVector(0, 0);                                                            // accumulator
    int count = 0;                                                                              // neighbor count
    float r2 = avoidRadius * avoidRadius;                                                       // squared radius

    for (int i = 0; i < all.size(); i++) {                                                      // loop balls
      Ball b = all.get(i);                                                                      // other
      if (b == null || b == this || !b.alive) continue;                                         // skip invalid
      float dx = x - b.x;                                                                       // dx
      float dy = y - b.y;                                                                       // dy
      float d2 = dx*dx + dy*dy;                                                                 // squared dist
      if (d2 > 0 && d2 < r2) {                                                                  // within radius
        float d = sqrt(d2);                                                                     // dist
        PVector away = new PVector(dx, dy);                                                     // away
        away.normalize();                                                                       // normalize
        away.mult(1.0 / max(0.001, d));                                                         // inverse dist
        sum.add(away);                                                                          // add
        count++;                                                                                // count
      }
    }

    if (count > 0) {                                                                            // if any
      sum.div((float)count);                                                                    // average
      sum.normalize();                                                                          // normalize
      sum.mult(2.5 * speedMult * snitchSpeedFactor);                                            // scale
      PVector steer = PVector.sub(sum, vel);                                                    // steering
      steer.limit(maxForce * 1.35);                                                             // clamp
      return steer;                                                                             // return
    }
    return new PVector(0, 0);                                                                   // none
  }

  PVector avoidWalls() {                                                                        // avoid walls helper
    PVector steer = new PVector(0, 0);                                                          // output
    if (x < wallMargin) steer.x += map(x, 0, wallMargin, 1.8, 0);                                // push right
    if (x > width - wallMargin) steer.x -= map(width - x, 0, wallMargin, 1.8, 0);                // push left
    if (y < wallMargin) steer.y += map(y, 0, wallMargin, 1.8, 0);                                // push down
    if (y > height - wallMargin) steer.y -= map(height - y, 0, wallMargin, 1.8, 0);              // push up

    if (steer.mag() > 0) {                                                                      // if exists
      steer.normalize();                                                                        // normalize
      steer.mult(2.2 * speedMult * snitchSpeedFactor);                                          // scale
      steer.sub(vel);                                                                           // convert
      steer.limit(maxForce * 1.2);                                                              // clamp
    }
    return steer;                                                                               // return
  }

  @Override
  void draw() {                                                                                 // draw snitch neon
    if (!alive) return;                                                                         // skip dead
    noStroke();                                                                                 // no stroke
    fill(cr, cg, cb, 70);                                                                       // glow
    ellipse(x, y, r*3.2, r*3.2);                                                                // glow halo
    fill(cr, cg, cb, 235);                                                                      // body
    ellipse(x, y, r*2, r*2);                                                                    // body circle
    fill(255, 255, 255, 90);                                                                    // highlight
    ellipse(x - 2, y - 2, r*0.9, r*0.9);                                                        // highlight
    stroke(cr, cg, cb, 200);                                                                    // wing stroke
    strokeWeight(2);                                                                            // wing thickness
    noFill();                                                                                   // no fill
    arc(x - r, y, r*1.6, r*1.1, -HALF_PI, HALF_PI);                                             // left wing
    arc(x + r, y, r*1.6, r*1.1, HALF_PI, 3*HALF_PI);                                            // right wing
  }
}

// =====================                                                                       // divider
// FIREWORK PARTICLE CLASS                                                                      // divider
// =====================                                                                       // divider
class Particle {                                                                                // particle definition
  PVector pos, prev, vel;                                                                       // current position, previous position, velocity
  float life, size;                                                                             // life (alpha-like), size
  int pr, pg, pb;                                                                               // RGB color

  Particle(float x, float y, float vx, float vy, int r, int g, int b, float life0, float size0) { // constructor
    pos = new PVector(x, y);                                                                    // set position
    prev = pos.copy();                                                                          // set previous
    vel = new PVector(vx, vy);                                                                  // set velocity
    pr = r; pg = g; pb = b;                                                                     // set color
    life = life0;                                                                               // set life
    size = size0;                                                                               // set size
  }

  void update() {                                                                               // physics update
    prev.set(pos);                                                                              // store previous position
    vel.y += 0.05;                                                                              // gravity
    vel.mult(0.985);                                                                            // drag
    pos.add(vel);                                                                               // integrate position
    life -= 5.0;                                                                                // fade out
    size *= 0.995;                                                                              // shrink slightly
  }

  void draw() {                                                                                 // render particle
    if (life <= 0) return;                                                                      // skip if dead
    float a = constrain(life, 0, 255);                                                          // clamp alpha
    stroke(pr, pg, pb, a);                                                                      // colored trail
    strokeWeight(max(1, size));                                                                 // trail thickness
    line(prev.x, prev.y, pos.x, pos.y);                                                         // draw trail
    noStroke();                                                                                 // no outline
    fill(pr, pg, pb, a);                                                                        // colored head
    ellipse(pos.x, pos.y, size, size);                                                          // draw head
  }

  boolean dead() {                                                                              // should remove?
    return (life <= 0 || size < 0.5);                                                           // dead if faded or tiny
  }
}
