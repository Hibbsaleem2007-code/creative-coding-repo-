let img, x, y, c;

function preload() {
  img = loadImage("flower.jpg");
}

function setup() {
  createCanvas(500, 500);
  textSize(14);
  noStroke();
}

function draw() {
  background(0);

  x = mouseX;
  y = mouseY;

  image(img, 0, 0);

  // get color at mouse position
  c = get(x, y);

  // draw circle with picked color
  fill(c);
  ellipse(x, y, 80, 80);

  // extract RGB values
  let r = red(c);
  let g = green(c);
  let b = blue(c);

  // display RGB values
  fill(255);
  rect(0, height - 40, width, 40); // background for text

  fill(0);
  text(`RGB: (${floor(r)}, ${floor(g)}, ${floor(b)})`, 10, height - 15);
}