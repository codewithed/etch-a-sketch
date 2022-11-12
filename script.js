let color = "black";
let num = 2;
const sketchBox = document.getElementById("sketchBox");

function createBoxes (num) {
    for (let i = 0; i < num * num; i++) {
        let box = document.createElement("div");
        box.className = "square";
        sketchBox.appendChild(box);
        sketchBox.style.gridTemplateColumns = `repeat($(num), 1fr)`;
    }
}

const boxes = document.getElementsByClassName("square");

function reset () {
    for (let i = 0; i < boxes.length; i++) {
        const elem = boxes[i];
        sketchBox.removeChild(elem);
    }
}

const blackBtn = document.getElementById("black");
blackBtn.addEventListener("click", () => {
    color = "black";
})

const rgbBtn = document.getElementById("rgb");
rgbBtn.addEventListener("click", () => {
    let random = Math.floor(Math.random()*16777215).toString(16);
    color = "#" + random;
});

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", reset);

function getNum () {
    let num = parseInt(prompt("Please enter a number between 1 and 100"));
    if (num >= 1 && num <= 100) {
        createBoxes(num);
    }
    else {
        alert("Please enter a valid number");
        getNum();
    }
}

function newGrid () {
    reset();
    getNum();
}

const newBtn = document.getElementById("newGrid");
newBtn.addEventListener("click", newGrid);

createBoxes(num);

