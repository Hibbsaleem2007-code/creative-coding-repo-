let trails = [];

function setup() {
  createCanvas(400, 400);
  background(240, 200, 220);
}

function draw() {
  // soft fade
  fill(240, 200, 220, 25);
  noStroke();
  rect(0, 0, width, height);

  // add trails
  if (mouseX !== pmouseX || mouseY !== pmouseY) {
    trails.push(new Trail(mouseX, mouseY));
  }

  // update + draw
  for (let i = trails.length - 1; i >= 0; i--) {
    trails[i].update();
    trails[i].show();

    // ⏳ remove after 5–6 seconds
    if (millis() - trails[i].startTime > trails[i].lifeSpan) {
      trails.splice(i, 1);
    }
  }
}

// ✍️ Scribble Trail
class Trail {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.angle = random(TWO_PI);
    this.radius = random(5, 20);

    // ⏳ time control
    this.startTime = millis();
    this.lifeSpan = random(5000, 6000); // 5–6 seconds

    // pink aesthetic
    this.r = random(220, 255);
    this.g = random(80, 150);
    this.b = random(150, 200);
  }

  update() {
    this.angle += 0.2;
    this.radius *= 0.98;
  }

  show() {
    push();
    translate(this.x, this.y);

    noFill();

    // fade based on time
    let lifeProgress = (millis() - this.startTime) / this.lifeSpan;
    let alpha = map(lifeProgress, 0, 1, 200, 0);

    stroke(this.r, this.g, this.b, alpha);
    strokeWeight(1);

    beginShape();

    for (let a = 0; a < TWO_PI * 2; a += 0.2) {
      let r = this.radius + sin(a * 3 + this.angle) * 10;
      let x = cos(a) * r;
      let y = sin(a) * r;
      vertex(x, y);
    }

    endShape();
    pop();
  }
}

// controls
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas("scribble_trails", "png");
  }

  if (key === 'c' || key === 'C') {
    background(240, 200, 220);
    trails = [];
  }
}