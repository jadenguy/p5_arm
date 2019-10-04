const segments = 50;
const segLen = 10;
let a;

function setup() {
  createCanvas(windowWidth, windowHeight - 4);
  background(220);
  stroke(0);
  fill(255);
  a = new Arm(width / 2, height / 2, segLen);
  for (let index = 1; index < segments; index++) {
    a.Add();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 4);
  a.origin.set(width / 2, height / 2);
  background(220);
}
function draw() {
  noise(frameCount);
  const target = createVector(noise(frameCount / 200) * width, noise(10 + frameCount / 200) * height);
  a.Update(target);
  background(220);
  a.Draw();

  circle(target.x, target.y, 10);

}
function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}