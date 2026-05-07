function setup() {
  createCanvas(600,600);
}

function draw() {
  background(20, 20, 40); // dark space background
  
  // Stars
  for (let i = 0; i < 100; i++) {
    fill(255);
    noStroke();
    circle(random(width), random(height), 2);
  }

  // Alien Body
  fill(159, 226, 245);
  stroke(0);
  strokeWeight(2);
  ellipse(300, 350, 180, 220);

  // Alien Head
  fill(159, 226, 245);
  ellipse(300, 200, 200, 180);

  // Eyes
  fill(0);
  ellipse(250, 190, 40, 70);
  ellipse(350, 190, 40, 70);

  // Eye shine
  fill(255);
  ellipse(240, 170, 10, 20);
  ellipse(340, 170, 10, 20);

  // Mouth
  fill(0);
  arc(300, 240, 60, 40, 0, PI);

  // Antennas
  stroke(120, 255, 120);
  strokeWeight(5);
  line(260, 120, 240, 60);
  line(340, 120, 360, 60);

  fill(159, 226, 245);
  noStroke();
  circle(240, 60, 20);
  circle(360, 60, 20);

  // Arms
  stroke(120, 255, 120);
  strokeWeight(15);
  line(210, 350, 150, 420);
  line(390, 350, 450, 420);

  // Legs
  line(260, 460, 240, 550);
  line(340, 460, 360, 550);
}