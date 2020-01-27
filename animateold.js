const canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d');
let img = new Image();
img.src = 'assets/characters/Artus/Walk/rightWalk.jpg';
img.onload = function () {
  init();
};
const scale = .5;
const width = 64;
const height = 64;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
    frameX * width, frameY * height, width, height,
    canvasX, canvasY, scaledWidth, scaledHeight);
}
const cycleLoop = [0, 1, 2, 3, 4, 5, 6];
let currentLoopIndex = 0;
let frameCount = 6;
let currentDirection = 0;
var defaultDirection = 0;

function step() {
  frameCount++;
  if (frameCount > 6) {
    window.requestAnimationFrame(step);
    return;
  } else {
    frameCount = 0
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFrame(cycleLoop[currentLoopIndex], currentDirection, 0, 0);
  currentLoopIndex++;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
    currentDirection++; // Next row/direction in the sprite sheet
  }
  // Reset to the "down" direction once we've run through them all
  if (currentDirection >= currentLoopIndex) {
    currentDirection = defaultDirection;
  }
  window.requestAnimationFrame(step);
}

function init() {
  window.requestAnimationFrame(step);
}
