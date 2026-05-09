let font;
let t = 0;

function preload() {
  font = loadFont("BebasNeue-Regular.ttf"); // add your font file
}

function setup() {
  createCanvas(600, 400);
  textFont(font);
  textAlign(CENTER, CENTER);
}

function draw() {
  drawDarkBackground();

  let txt = "Bright future Training Center";

  push();
  translate(width / 2, height / 2);

  let lines = txt.split("\n");

  for (let j = 0; j < lines.length; j++) {
    let line = lines[j];
    let yOffset = j * 50 - 25;

    for (let i = 0; i < line.length; i++) {
      let ch = line[i];

      // wave motion
      let x = i * 18 - (line.length * 9);
      let wave = sin(t + i * 0.5 + j) * 6;

      push();
      translate(x, yOffset + wave);

      // glowing outline layers
      for (let k = 5; k > 0; k--) {
        stroke(180, 80, 200, 40); // purple glow
        strokeWeight(k * 2);
        noFill();
        textSize(32);
        text(ch, 0, 0);
      }

      // main stroke (dark pink/purple shifting)
      let r = 200 + 40 * sin(t);
      let g = 80 + 30 * sin(t + 2);
      let b = 180 + 40 * sin(t + 4);

      stroke(r, g, b);
      strokeWeight(2);
      noFill();
      text(ch, 0, 0);

      pop();
    }
  }

  pop();

  t += 0.04;
}

// 🌌 dark gradient background
function drawDarkBackground() {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(
      color(40, 20, 50),   // deep purple
      color(20, 10, 30),   // darker bottom
      inter
    );
    stroke(c);
    line(0, y, width, y);
  }

  drawDarkHearts();
}

// 💜 animated subtle hearts
function drawDarkHearts() {
  for (let y = 0; y < height; y += 70) {
    for (let x = 0; x < width; x += 70) {

      let floatY = sin(t + x * 0.01 + y * 0.02) * 4;

      push();
      translate(x + 35, y + 35 + floatY);
      scale(0.25);

      noStroke();
      fill(120, 50, 140, 80); // muted purple

      beginShape();
      vertex(0, -20);
      bezierVertex(20, -40, 50, 10, 0, 40);
      bezierVertex(-50, 10, -20, -40, 0, -20);
      endShape(CLOSE);

      pop();
    }
  }
}