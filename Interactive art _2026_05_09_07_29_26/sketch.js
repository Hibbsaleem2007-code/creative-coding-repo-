let trail = [];
let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont('Georgia');

  // create particles
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      size: random(2, 5),
      speed: random(0.2, 1),
      depth: random(0.5, 2)
    });
  }
}

function draw() {
  drawLuxuryBackground();
  drawParallaxParticles();
  drawRipple();
  drawGlassPanel();
  drawText();
  drawTrail();
}

// 🎭 Dark luxury gradient
function drawLuxuryBackground() {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(15, 15, 20), color(60, 50, 70), inter);
    stroke(c);
    line(0, y, width, y);
  }
}

// 🌌 Parallax particles
function drawParallaxParticles() {
  noStroke();

  for (let p of particles) {
    let offsetX = (mouseX - width / 2) * 0.002 * p.depth;
    let offsetY = (mouseY - height / 2) * 0.002 * p.depth;

    fill(200, 200, 220, 120);
    ellipse(p.x + offsetX, p.y + offsetY, p.size * p.depth);

    // slow drift
    p.y += p.speed;
    if (p.y > height) p.y = 0;
  }
}

// ✨ Cursor ripple distortion
function drawRipple() {
  noFill();
  stroke(180, 180, 255, 120);

  for (let i = 0; i < 3; i++) {
    let r = 40 + i * 25 + sin(frameCount * 0.1) * 10;
    ellipse(mouseX, mouseY, r);
  }
}

// 🧊 Glass panel
function drawGlassPanel() {
  let w = width * 0.65;
  let h = 130;

  let x = width / 2 - w / 2;
  let y = height / 2 - h / 2;

  fill(255, 255, 255, 25);
  noStroke();
  rect(x, y, w, h, 25);

  stroke(255, 255, 255, 60);
  noFill();
  rect(x, y, w, h, 25);
}

// ✨ Premium text
function drawText() {
  let offsetX = map(mouseX, 0, width, -25, 25);
  let offsetY = map(mouseY, 0, height, -15, 15);

  push();
  translate(width / 2 + offsetX, height / 2 + offsetY);

  let glow = sin(frameCount * 0.05) * 8;

  textSize(44 + glow * 0.3);
  fill(240);

  drawingContext.shadowBlur = 35;
  drawingContext.shadowColor = "rgba(255,255,255,0.6)";

  text("Welcome to bright future training center(BFTC)", 0, 0);

  pop();

  drawingContext.shadowBlur = 0;
}

// 💫 Elegant mouse trail
function drawTrail() {
  trail.push({
    x: mouseX,
    y: mouseY,
    size: random(25, 45),
    alpha: 255
  });

  for (let t of trail) {
    noStroke();
    fill(180, 180, 255, t.alpha);

    drawingContext.shadowBlur = 25;
    drawingContext.shadowColor = "rgba(180,180,255,0.5)";

    ellipse(t.x, t.y, t.size);

    t.alpha -= 4;
    t.size *= 0.95;
  }

  drawingContext.shadowBlur = 0;

  trail = trail.filter(t => t.alpha > 0);
}

// 📱 Responsive
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}