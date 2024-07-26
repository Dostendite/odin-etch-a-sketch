const DEFAULT_CANVAS_COLOR = "#f5f2df";
const DEFAULT_BRUSH_COLOR = "#1a1918";
const GRID_SIZE = 600;
const colors = ["red", "blue", "lime", "yellow", "magenta", "cyan", "white"];

let rainbowMode = false;

const gridContainer = document.querySelector(".grid-container");
const setGridButton = document.querySelector("#set-grid-button");
const resetButton = document.querySelector("#reset-button");
const rainbowModeButton = document.querySelector("#rainbow-button")
const gridDivs = gridContainer.children;

setGridButton.onclick = setGrid
resetButton.onclick = clearGrid
rainbowModeButton.onclick = setRainbowMode

function setGrid(divsPerSide) {
    divsPerSide === "default" ? divsPerSide = 16 : divsPerSide = promptDivAmount();
    let totalDivs = (divsPerSide * divsPerSide) - 1;
    let squareDimensions = `${GRID_SIZE / divsPerSide}px`;
    gridContainer.innerHTML = "";

    for (let i = 0; i <= totalDivs; i++) {
        addDiv();
    }

    for (let gridDiv of gridDivs) {
        gridDiv.style.width = squareDimensions;
        gridDiv.style.height = squareDimensions;
        gridDiv.addEventListener("mouseover", paintOnGrid);
    }
}

function paintOnGrid(e) {
    if (rainbowMode) {
        e.target.style.backgroundColor = getRandomColor();
    } else {
        e.target.style.backgroundColor = DEFAULT_BRUSH_COLOR;
    }
}


function promptDivAmount() {
    divsPerSide = parseInt(window.prompt(
        `Select number of squares per side (4-100)`, 16));

    if (divsPerSide > 100 || divsPerSide < 4) {
        promptDivAmount();
    }

    return divsPerSide;
}

function addDiv() {
    const newDiv = document.createElement("div");
    gridContainer.appendChild(newDiv);
}

function setRainbowMode() {
    rainbowMode ? rainbowMode = false : rainbowMode = true;
}

function getRandomColor() {
    let randomNumber = Math.floor(Math.random() * 7)
    return colors[randomNumber];
}

function clearGrid() {
    for (let gridDiv of gridDivs) {
        gridDiv.style.backgroundColor = DEFAULT_CANVAS_COLOR
    }
}

setGrid("default");
