let carX = 0;

function setup() {
  createCanvas(900, 500);
}

function draw() {
  drawSky();
  drawRoad();
  drawStreetLights();
  drawCar();

  carX += 3; // car movement
  if (carX > width + 200) {
    carX = -200;
  }
}

// 🌤 Sky
function drawSky() {
  background(135, 206, 235);
  
  // Sun
  fill(255, 204, 0);
  noStroke();
  ellipse(750, 100, 100);
}

// 🛣 Road
function drawRoad() {
  fill(50);
  rect(0, 350, width, 150);

  // Lane markings
  stroke(255);
  strokeWeight(5);
  for (let i = 0; i < width; i += 80) {
    line(i, 425, i + 40, 425);
  }
  noStroke();
}

// 💡 Street Lights
function drawStreetLights() {
  for (let i = 100; i < width; i += 200) {
    fill(70);
    rect(i, 220, 10, 130); // pole
    
    fill(255, 255, 180);
    ellipse(i + 5, 220, 40, 25); // light glow
  }
}

// 🚗 Fortnite Style Car
function drawCar() {
  push();
  translate(carX, 0);

  // Car Body
  fill(0, 150, 255);
  rect(200, 310, 220, 60, 20);

  // Top
  rect(250, 270, 120, 50, 15);

  // Windows
  fill(180, 230, 255);
  rect(260, 280, 50, 35, 10);
  rect(320, 280, 40, 35, 10);

  // Wheels
  fill(0);
  ellipse(250, 370, 60);
  ellipse(380, 370, 60);

  fill(120);
  ellipse(250, 370, 30);
  ellipse(380, 370, 30);

  // Headlight
  fill(255, 255, 150);
  ellipse(420, 330, 20, 15);

  pop();
}
