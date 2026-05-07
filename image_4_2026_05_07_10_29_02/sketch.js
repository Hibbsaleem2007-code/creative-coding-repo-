// declare variables
let img;
let x, y;
let slider;

function preload(){
  // load image
  img = loadImage("roses.jpg");
}

function setup(){
  createCanvas(400, 400);

  // black background
  background(0);

  // remove shape borders
  noStroke();

  // slider to control brush size
  slider = createSlider(5, 50, 30);
  slider.position(120, height + 20);
}

function draw(){

  // random pixel position
  x = random(width);
  y = random(height);

  // get pixel color from image
  let c = img.get(x, y);

  // fill circle with pixel color (RGBA)
  fill(c[0], c[1], c[2], 50);

  // draw circle
  ellipse(x, y, slider.value(), slider.value());
}