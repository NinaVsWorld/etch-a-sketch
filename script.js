// Default grid size upon opening browser
const DEFAULTGRIDSIZE = 10;

function createGrid(squaresPerSide) {
    const container = document.querySelector(".container");
    const containerWidth = document.querySelector(".container").offsetWidth;
    // For width of each square, get container width / squaresPerSide
    const squareWidth = containerWidth / squaresPerSide;

    for (let i = 0; i < squaresPerSide; i++) {
        for (let j = 0; j < squaresPerSide; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
        }
    }

    document.querySelectorAll(".square").forEach((square) => {
        square.style.width = squareWidth + "px";
        square.style.height = squareWidth + "px";
    });
}

function resetGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(element => {
        element.parentNode.removeChild(element);
    })
}

// Set default grid size
createGrid(DEFAULTGRIDSIZE);

// Set up event listener to get squares per side
const submit = document.querySelector(".submit");
submit.addEventListener("click", () => {
    const inputValue = document.querySelector("input").value;
    const errorMsg = document.querySelector(".error-msg");
    const number = Number(inputValue);

    if (!Number.isInteger(number)) {
        errorMsg.textContent = "Please input whole numbers only!";
    } else if (number < 1 || number > 100) {
        errorMsg.textContent = "Please provide a number within the specified range!";
    } else {
        resetGrid();
        createGrid(number);
        console.log(number);
    }
})