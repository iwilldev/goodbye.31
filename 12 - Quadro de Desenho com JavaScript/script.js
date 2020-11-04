const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let size = 3;
let isPressed = false;
let color = 'black';
let x = undefined;
let y = undefined;

canvas.addEventListener('pointerdown', (event) => {
  isPressed = true;

  x = event.offsetX;
  y = event.offsetY;

  canvas.removeEventListener('pointerdown', this);
});

canvas.addEventListener('pointerup', () => {
  isPressed = false;

  x = undefined;
  y = undefined;

  canvas.removeEventListener('pointerup', this);
});

canvas.addEventListener('touchmove', (event) => {
  var touch = event.touches[0];
  var mouseEvent = new MouseEvent("mousemove", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
});

canvas.addEventListener('mousemove', event => {
  if (isPressed) {
    const x2 = event.offsetX;
    const y2 = event.offsetY;
    
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
})

function drawCircle(x, y) {
  context.beginPath();
  context.arc(x, y, size / 2, 0, Math.PI * 2);
  context.fillStyle = color;
  context.fill();
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.lineWidth = size;
  context.strokeStyle = color;
  context.stroke();
}

function changeBrushSize(brushSize) {
  size = brushSize;
}

function changeBrushColor(brushColor) {
  color = brushColor;
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}