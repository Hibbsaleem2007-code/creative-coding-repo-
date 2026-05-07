let img;

function preload() {
  img = loadImage("sunflower.jpg"); // make sure your image is in the same folder
}

function setup() {
  // to ensure that necessary external files, like images,
  // are loaded before the rest of the sketch runs
  createCanvas(400, 400);
  background(0);
}

function draw() {
  // It redraws the canvas continuously.
  // Clears the canvas and sets the background color to black
  // at the beginning of each draw cycle
  background(0);

  image(img, 0, 0); // display image
  filter(POSTERIZE,);  
}