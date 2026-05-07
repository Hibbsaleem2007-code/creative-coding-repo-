let img;

function preload() {
  img = loadImage("tree.jpg"); // make sure your image is in the same folder
}

function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() { 
  // It continuously redraws everything on the canvas
  background(0);

  tint(255, 0, 0); // red tint
  image(img, 0, 0, img.width / 2, img.height / 2);

  noTint(); // remove tint
  image(img, 0, img.height / 2, img.width / 2, img.height / 2);

  // These specify the width and height to which the image will be scaled when drawn.
  // It's drawing the image at half of its original width and height.
}