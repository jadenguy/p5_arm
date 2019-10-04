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
function overScanPosition(axis) {
  const m = Math.min(width, height);
  let middle;
  if (axis === 0) {
    r = frameCount;
    middle = width / 2;
  }
  else {
    r = frameCount + 100000; //prevents the noise vector from repeating
    middle = height / 2;
  }
  return map(noise(r / 240), .2, .8, middle - m / 2, middle + m / 2);
}
function draw() {
  noise(frameCount);
  const x = overScanPosition(0);
  const y = overScanPosition(1);
  const target = createVector(x, y);
  a.Update(target);
  background(220);
  a.Draw();
  circle(target.x, target.y, 10);

}
function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}