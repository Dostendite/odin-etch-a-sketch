// create a 16x16 grid of square divs
// using the DOM inside grid-container

const gridContainer = document.querySelector(".grid-container");
const setGridButton = document.querySelector("#set-grid-button");
const resetButton = document.querySelector("#reset-button");
// figure out a way to make the reset button work

function addDivs() {
    const newDiv = document.createElement("div");

    gridContainer.appendChild(newDiv)

}


for (let i = 0; i <= 255; i++) {
    addDivs();
}

// set up a "hover" efect so that the grid divs
// change color when your mouse passes over them,
// leaving a trail through your grid like a pen would

const gridDivs = gridContainer.children;

for (gridDiv of gridDivs) {
    gridDiv.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "#9f59ff";
    })
}
