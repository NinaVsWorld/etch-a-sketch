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

// Set default grid size upon every browser reload
createGrid(DEFAULTGRIDSIZE);

// Set up event listener to get squares per side
document.querySelector(".submit").addEventListener("click", () => {
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
        errorMsg.textContent = "";
    }
})

// Eraser
const isEraserOn = document.querySelector("#eraser");

// Click and hold down to draw
let dragging = false
let colourInput = document.querySelector("#pen-colour");
document.querySelector(".container").addEventListener("mousedown", (event) => {
    dragging = true;
    if (isEraserOn.checked) {
        event.target.style.backgroundColor = "#FFFFFF";
        return;
    } 
    
    if (rainbowModeOn) {
        event.target.style.backgroundColor = getRandomHexColour();
        return;
    }
    
    event.target.style.backgroundColor = colourInput.value;
})

document.querySelector(".container").addEventListener("mouseup", () => {
    dragging = false;
})

let hoveredOnce = false;
document.querySelector(".container").addEventListener("mouseover", (event) => {
    if (dragging) {
        if (isEraserOn.checked) {
            event.target.style.backgroundColor = "#FFFFFF";
            return;
        }

        if (rainbowModeOn) {
            event.target.style.backgroundColor = getRandomHexColour();
            return;
        }
        
        event.target.style.backgroundColor = colourInput.value;
    }
})

// Clear grid - change bgcolor to white
document.querySelector(".clear-grid").addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    for (const square of squares) {
        square.style.backgroundColor = "white";
    }
});

// Rainbow pen
function getRandomHexColour() {
    let colour = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + colour.padStart(6, '0');
}

let rainbowModeOn = false;
document.querySelector(".rainbow-pen").addEventListener("click", () => {
    rainbowModeOn = true;
})

document.querySelector(".rainbow-pen").addEventListener("dblclick", () => {
    rainbowModeOn = false;
})