let player;
let orbs = [];
let particles = [];
let score = 0;
let level = 1;

let song, fft;

let theme = 0; // 0 = neon, 1 = glass, 2 = dark

function preload() {
  soundFormats('mp3');
  song = loadSound('soft-piano-428014.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  player = new Player();

  for (let i = 0; i < 10; i++) {
    orbs.push(new Orb());
  }

  fft = new p5.FFT();

  userStartAudio();
  song.loop();
}

function draw() {
  let bass = fft.getEnergy("bass");

  drawBackground(bass);

  player.update();
  player.show(bass);

  for (let i = orbs.length - 1; i >= 0; i--) {
    orbs[i].move();
    orbs[i].show(bass);

    if (player.hits(orbs[i])) {
      score++;
      spawnParticles(orbs[i].pos);
      orbs.splice(i, 1);
      orbs.push(new Orb());
    }
  }

  updateParticles();

  displayUI();
  updateLevel();
}

function drawBackground(bass) {
  if (theme === 0) background(10, 10, 25, 50 + bass * 0.2);
  if (theme === 1) background(200, 220, 255, 40);
  if (theme === 2) background(5, 5, 10, 80);
}

function displayUI() {
  fill(255);
  textSize(16);
  text("Score: " + score, 20, 20);
  text("Level: " + level, 20, 40);
  text("Press T to change theme", 20, 60);
}

function updateLevel() {
  level = floor(score / 10) + 1;

  if (orbs.length < level + 8) {
    orbs.push(new Orb());
  }
}

function spawnParticles(pos) {
  for (let i = 0; i < 15; i++) {
    particles.push(new Particle(pos.x, pos.y));
  }
}

function updateParticles() {
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();

    if (particles[i].alpha <= 0) {
      particles.splice(i, 1);
    }
  }
}

function keyPressed() {
  if (key === 'T' || key === 't') {
    theme = (theme + 1) % 3;
  }
}

class Player {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.size = 25;
  }

  update() {
    let target = createVector(mouseX, mouseY);
    this.pos.lerp(target, 0.12);
  }

  show(bass) {
    noStroke();

    let glow = bass * 0.3;

    for (let i = 3; i > 0; i--) {
      fill(100, 200, 255, 20);
      ellipse(this.pos.x, this.pos.y, this.size + i * 20 + glow);
    }

    fill(120, 220, 255);
    ellipse(this.pos.x, this.pos.y, this.size + glow * 0.5);
  }

  hits(orb) {
    let d = dist(this.pos.x, this.pos.y, orb.pos.x, orb.pos.y);
    return d < this.size / 2 + orb.size / 2;
  }
}

class Orb {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.size = random(10, 18);
    this.speed = p5.Vector.random2D().mult(random(1, 2 + level * 0.2));
  }

  move() {
    this.pos.add(this.speed);

    if (this.pos.x < 0 || this.pos.x > width) this.speed.x *= -1;
    if (this.pos.y < 0 || this.pos.y > height) this.speed.y *= -1;
  }

  show(bass) {
    noStroke();

    let pulse = bass * 0.2;

    fill(255, 120, 180, 25);
    ellipse(this.pos.x, this.pos.y, this.size * 2 + pulse);

    fill(255, 150, 200);
    ellipse(this.pos.x, this.pos.y, this.size + pulse * 0.3);
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(1, 3));
    this.alpha = 255;
  }

  update() {
    this.pos.add(this.vel);
    this.alpha -= 5;
  }

  show() {
    noStroke();
    fill(255, 200, 255, this.alpha);
    ellipse(this.pos.x, this.pos.y, 5);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}