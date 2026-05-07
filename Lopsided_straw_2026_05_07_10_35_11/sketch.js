let song, fft;

function preload() {
  // Put your song file in the same folder
  song = loadSound('music file.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  fft = new p5.FFT();

  // Better smoothness
  strokeJoin(ROUND);
}

function draw() {
  background(5, 5, 15);

  // Waveform data
  let wave = fft.waveform();

  // 🔥 Gradient animated wave
  noFill();
  strokeWeight(4);

  beginShape();

  for (let i = 0; i < wave.length; i++) {

    let x = map(i, 0, wave.length, 0, width);

    // Make waveform centered
    let y = map(wave[i], -1, 1, height * 0.2, height * 0.8);

    // Dynamic color
    let r = map(i, 0, wave.length, 100, 255);
    let g = 100 + sin(frameCount * 0.03) * 100;
    let b = 255;

    stroke(r, g, b);

    vertex(x, y);
  }

  endShape();

  // ✨ Add glowing circles reacting to sound
  let bass = fft.getEnergy("bass");

  noStroke();
  fill(100, 150, 255, 120);

  ellipse(width / 2, height / 2, bass + 50);

  fill(255, 100);

  ellipse(width / 2, height / 2, bass / 2);

  // Small aesthetic particles
  for (let i = 0; i < 20; i++) {

    let px = noise(i, frameCount * 0.01) * width;
    let py = noise(i + 100, frameCount * 0.01) * height;

    fill(255, 80);
    ellipse(px, py, 3);
  }
}

// Click to play/pause
function mousePressed() {

  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}