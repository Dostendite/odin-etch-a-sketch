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
    let squareDimensions = GRID_SIZE / divsPerSide
    gridContainer.innerHTML = "";

    for (let i = 0; i <= totalDivs; i++) {
        addDiv(squareDimensions);
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

function addDiv(squareDimensions) {
    const gridDiv = document.createElement("div");
    gridContainer.appendChild(gridDiv);
    gridDiv.style.width = `${squareDimensions}px`;
    gridDiv.style.height = `${squareDimensions}px`;
    gridDiv.addEventListener("mouseover", paintOnGrid);
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

window.onload = () => {
    setGrid("default");
}
