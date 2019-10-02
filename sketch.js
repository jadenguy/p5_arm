let a;
function setup() {
  createCanvas(windowWidth, windowHeight - 4);
  background(220);
  stroke(220);
  fill(0);
  a = new Arm(width / 2, height / 2);
  a.Add();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 4);
  background(220);
}
function draw() {
  a.Update();
  a.Draw();
}
function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}
// function mouseWheel(event) {
//   const wheel = map(event.delta, -500, 500, -1, 1);
//   mDelta -= wheel;
//   return false;
// }
// function makeList(len = 0) {
//   const ret = [];
//   for (let i = 0; i < len; i++) {
//     const level = [];
//     const root = Math.pow(2, i);
//     level.push(root - 1);
//     ret.push(level);
//     for (let j = 0; j < i; j++) {
//       const lastLevel = ret[j];
//       const lll = lastLevel.length;
//       for (let k = 0; k < lll; k++) {
//         const current = lastLevel[k];
//         lastLevel.push(current + root);
//       }
//     }
//   }
//   ret.reverse();
//   return ret.flat();
// }
// function sway(cycle = 30., grow = false) {
//   r = map(Math.sin(frameCount / cycle * PI), -1, 1, 0, 1);
//   if (grow && ((frameCount - 1) / 2) % cycle == 0) {
//     background(220);
//     dOffset = dOffset % 8;
//     d = map(int(dOffset) % 8, 0, 7, QUARTER_PI, TWO_PI);
//     dOffset++;
//   }
// }