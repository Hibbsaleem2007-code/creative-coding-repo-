let data = [88, 72, 95, 60, 84, 78, 91];
let labels = ["Ali", "Sara", "Ahmed", "Zara", "Usman", "Ayesha", "Hassan"];
let animation = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);

  // start all bars from 0 (animation effect)
  for (let i = 0; i < data.length; i++) {
    animation[i] = 0;
  }
}

function draw() {
  background(15);

  let barWidth = width / (data.length * 2);
  let spacing = barWidth;
  let maxHeight = height * 0.6;

  for (let i = 0; i < data.length; i++) {

    // smooth animation
    animation[i] = lerp(animation[i], data[i], 0.05);

    let x = spacing + i * (barWidth + spacing);
    let h = map(animation[i], 0, 100, 0, maxHeight);
    let y = height - h - 100;

    // bar design
    noStroke();
    fill(120 + i * 15, 180, 255, 220);
    rect(x, y, barWidth, h, 12);

    // student name
    fill(255);
    textSize(16);
    text(labels[i], x + barWidth / 2, height - 60);

    // marks value
    textSize(14);
    text(int(animation[i]), x + barWidth / 2, y - 10);
  }

  // title
  textSize(28);
  fill(255);
  text("Student Final Marks Visualization", width / 2, 50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}