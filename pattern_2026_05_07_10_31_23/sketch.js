function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(115, 5, 76);

  let layers = 10; // more layers for full look

  for (let i = layers; i > 0; i--) {
    let scaleFactor = i / layers;

    // alternating colors (if-else)
    if (i % 2 === 0) {
      fill(166, 91, 140);
    } else {
      fill(237, 168, 213);
    }

    push();
    translate(width / 2, height * 0.55); // shift slightly down like image
    scale(scaleFactor * 2.2); // BIG scale to fill canvas
    drawHeart(0, 0, 180);
    pop();
  }
}

// smoother, taller heart
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