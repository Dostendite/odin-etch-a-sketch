// create a 16x16 grid of square divs
// using the DOM inside grid-container

const gridContainer = document.querySelector(".grid-container");
const setGridButton = document.querySelector("#set-grid-button");
const resetButton = document.querySelector("#reset-button");
const rainbowModeButton = document.querySelector("#rainbow-button")

const GRID_SIZE = 640;
const gridDivs = gridContainer.children;
// const rainbowMode = false;

setGridButton.addEventListener("click", setGrid);

// rainbowModeButton.addEventListener("click", function () {
//     rainbowMode = true;
// })

// colors = ["red", "blue", "lime", "yellow", "magenta", "cyan", "black", "white"];

function getRandomColor() {

    let randomNumber = ~~(Math.random() * 8)

    return colors[randomNumber];
}

function setGrid(divsPerSide) {

    if (divsPerSide === "default") {
        divsPerSide = 16;
    } else {

        divsPerSide = parseInt(window.prompt(`Select number of squares
        per side (4 to 100)`, 4))
    }

    // Total amount of squares to generate = ivsPerSide²

    let totalDivs = (divsPerSide * divsPerSide) - 1;

    // GRID_SIZE / divsPerSide = squareDimensions
    let squareDimensions = `${GRID_SIZE / divsPerSide}px`;

    // Remove all divs/squares from canvas 
    gridContainer.innerHTML = "";

    // Fill canvas with squares
    for (let i = 0; i <= totalDivs; i++) {
        addDiv();
    }

    for (gridDiv of gridDivs) {

        gridDiv.style.width = squareDimensions;
        gridDiv.style.height = squareDimensions;

        // Trail / hover effect
        gridDiv.addEventListener("mouseenter", (event) => {

            event.target.style.backgroundColor = "#9f59ff";

        })
    }
}

function addDiv() {
    const newDiv = document.createElement("div");
    gridContainer.appendChild(newDiv);
}

// Default value
setGrid("default");