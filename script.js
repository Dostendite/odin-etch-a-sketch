
const gridContainer = document.querySelector(".grid-container");
const setGridButton = document.querySelector("#set-grid-button");
const resetButton = document.querySelector("#reset-button");
const rainbowModeButton = document.querySelector("#rainbow-button")
const gridDivs = gridContainer.children;

setGridButton.onclick = setGrid
resetButton.onclick = clearGrid
rainbowModeButton.onclick = setRainbowMode

const GRID_SIZE = 600;
let rainbowMode = false;
colors = ["red", "blue", "lime", "yellow", "magenta", "cyan", "white"];

function setGrid(divsPerSide) {
    divsPerSide === "default" ? divsPerSide = 16 : divsPerSide = getDivAmount();

    let totalDivs = (divsPerSide * divsPerSide) - 1;
    let squareDimensions = `${GRID_SIZE / divsPerSide}px`;
    gridContainer.innerHTML = "";

    for (let i = 0; i <= totalDivs; i++) {
        addDiv();
    }

    for (let gridDiv of gridDivs) {
        gridDiv.style.width = squareDimensions;
        gridDiv.style.height = squareDimensions;
        gridDiv.addEventListener("mouseover", (event) => {
            if (rainbowMode === true) {
                event.target.style.backgroundColor = getRandomColor();
            } else {
                event.target.style.backgroundColor = "#1a1918";
            }
        });
    }
}

function getDivAmount() {
    divsPerSide = parseInt(window.prompt(
    `Select number of squares per side (4-100)`, 16));
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
    let randomNumber = ~~(Math.random() * 7)
    return colors[randomNumber];
}

function clearGrid() {
    for (let gridDiv of gridDivs) {
        gridDiv.style.backgroundColor = "#f5f2df"
    }
}

setGrid("default");
