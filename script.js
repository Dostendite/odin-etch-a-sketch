// For code refactoring:
// Replace the event listener
// anonymous functions by functions defined outside them
// can do button.onclick = () => function()
// instead of eventlistener
// (this can also be useful for RPS)

// only draw when holding down click

const gridContainer = document.querySelector(".grid-container");
const setGridButton = document.querySelector("#set-grid-button");
const resetButton = document.querySelector("#reset-button");
const rainbowModeButton = document.querySelector("#rainbow-button")
const GRID_SIZE = 600;
const gridDivs = gridContainer.children;

let rainbowMode = false;
colors = ["red", "blue", "lime", "yellow",
          "magenta", "cyan", "white"];

setGridButton.addEventListener("click", setGrid);
resetButton.addEventListener("click", clearGrid)
rainbowModeButton.addEventListener("click", setRainbowMode)

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

function getRandomColor() {
    let randomNumber = ~~(Math.random() * 7)
    return colors[randomNumber];
}

function setRainbowMode() {
    rainbowMode ? rainbowMode = false : rainbowMode = true;
}

function addDiv() {
    const newDiv = document.createElement("div");
    gridContainer.appendChild(newDiv);
}

function clearGrid() {
    for (let gridDiv of gridDivs) {
        gridDiv.style.backgroundColor = "#f5f2df"
    }
}

setGrid("default");
