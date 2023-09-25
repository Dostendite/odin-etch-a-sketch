// For code refactoring:
// Replace the event listener
// anonymous functions by functions defined outside them
// can do button.onclick = () => function()
// instead of eventlistener
// (this can also be useful for RPS)

const gridContainer = document.querySelector(".grid-container");
const setGridButton = document.querySelector("#set-grid-button");
const resetButton = document.querySelector("#reset-button");
const rainbowModeButton = document.querySelector("#rainbow-button")

const GRID_SIZE = 640;
const gridDivs = gridContainer.children;
let rainbowMode = false;

setGridButton.addEventListener("click", setGrid);
resetButton.addEventListener("click", () => {
    for (let gridDiv of gridDivs) {
      gridDiv.style.backgroundColor = "#f5f2df";
    }
});

rainbowModeButton.addEventListener("click", function () {
    rainbowMode ? rainbowMode = false : rainbowMode = true;
});

colors = ["red", "blue", "lime", "yellow",
          "magenta", "cyan", "black", "white"];

function getRandomColor() {
    let randomNumber = ~~(Math.random() * 8)
    return colors[randomNumber];
}

function setGrid(divsPerSide) {
    if (divsPerSide === "default") {
        divsPerSide = 24;
    } else {
        divsPerSide = parseInt(window.prompt(
        `Select number of squares per side (4-100)`, 4))
    }
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
function addDiv() {
    const newDiv = document.createElement("div");
    gridContainer.appendChild(newDiv);
}

setGrid("default");
