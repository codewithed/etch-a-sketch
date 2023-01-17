let color = 'black';
let rgb = false;
const num = 2;
const sketchBox = document.getElementById('sketchBox');

function createBoxes(num) {
  for (let i = 0; i < num * num; i++) {
    const box = document.createElement('div');
    box.id = 'box';
    box.style.border = '0.5px solid black';
    box.className = 'square';
    sketchBox.appendChild(box);
    box.addEventListener('pointermove', () => {
      box.style.backgroundColor = `${color}`;
    });
  }
}

sketchBox.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
sketchBox.style.gridTemplateRows = `repeat(${num}, 1fr)`;

function reset() {
  while (sketchBox.firstChild) sketchBox.removeChild(sketchBox.firstChild);
}

const blackBtn = document.getElementById('black');
blackBtn.addEventListener('click', () => {
  rgb = false;
  color = 'black';
  return color;
});

const eraserBtn = document.getElementById('eraser');
eraserBtn.addEventListener('click', () => {
  rgb = false;
  color = 'whitesmoke';
  return color;
});

const rgbBtn = document.getElementById('rgb');
function setrgb(box) {
  box.addEventListener('pointermove', () => {
    if (rgb === true) {
      const random = Math.floor(Math.random() * 16777215).toString(16);
      color = `#${random}`;
      box.style.backgroundColor = `${color}`;
    }
  });
}

rgbBtn.addEventListener('click', () => {
  rgb = true;
  const boxes = document.querySelectorAll('#box');
  const boxArray = Array.from(boxes);
  boxArray.forEach(setrgb);
});

function getNum() {
  const num = parseInt(prompt('Please enter a number between 1 and 100'));
  if (num >= 1 && num <= 100) {
    createBoxes(num);
    sketchBox.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    sketchBox.style.gridTemplateRows = `repeat(${num}, 1fr)`;
  } else {
    alert('Please enter a valid number');
    getNum();
  }
}

function newGrid() {
  reset();
  getNum();
  createBoxes(num);
}

const newGridBtn = document.getElementById('newGrid');
newGridBtn.addEventListener('click', newGrid);
createBoxes(num);
