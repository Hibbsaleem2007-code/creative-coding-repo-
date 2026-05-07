let t = 0; // time for animation

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(115, 5, 76);

  let layers = 10;

  // smooth breathing scale
  let pulse = sin(t) * 0.05 + 1;

  for (let i = layers; i > 0; i--) {
    let scaleFactor = (i / layers) * 2.2 * pulse;

    // alternating colors (if-else)
    if (i % 2 === 0) {
      fill(166, 91, 140); // dark
    } else {
      fill(237, 168, 213); // light
    }

    push();

    // slight floating motion
    let floatY = sin(t + i * 0.3) * 5;

    translate(width / 2, height * 0.55 + floatY);
    scale(scaleFactor);

    drawHeart(0, 0, 180);
    pop();
  }

  t += 0.02; // speed of animation
}

// heart shape
function drawHeart(x, y, s) {
  beginShape();
  vertex(x, y - s * 0.5);

  bezierVertex(
    x + s * 0.6, y - s * 1.2,
    x + s * 1.4, y + s * 0.3,
    x, y + s * 1.1
  );

  bezierVertex(
    x - s * 1.4, y + s * 0.3,
    x - s * 0.6, y - s * 1.2,
    x, y - s * 0.5
  );

  endShape(CLOSE);
}