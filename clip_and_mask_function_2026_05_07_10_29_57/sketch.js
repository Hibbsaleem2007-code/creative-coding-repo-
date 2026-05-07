let img;

function preload() {
  img = loadImage('water.jpg'); // place image in your project folder
}

function setup() {
  createCanvas(800, 400);
  background(131, 204, 212);

  // ---------- CLIP VERSION (LEFT) ----------
  let imgClip = img.get(); // copy original image
  imgClip.resize(200, 200);

  let gClip = createGraphics(200, 200);

  let ctx = gClip.canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(100, 0);
  ctx.lineTo(200, 200);
  ctx.lineTo(0, 200);
  ctx.closePath();
  ctx.clip();

  gClip.image(imgClip, 0, 0);

  image(gClip, 100, 100);

  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(16);
  text("clip()", 200, 320);


  // ---------- MASK VERSION (RIGHT) ----------
  let imgMask = img.get(); // separate copy
  imgMask.resize(200, 200);

  let maskG = createGraphics(200, 200);
  maskG.background(0);
  maskG.fill(255);
  maskG.noStroke();
  maskG.triangle(100, 0, 200, 200, 0, 200);

  imgMask.mask(maskG);

  image(imgMask, 500, 100);

  fill(0);
  text("mask()", 600, 320);
}