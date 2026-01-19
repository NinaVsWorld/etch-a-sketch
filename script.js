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

createGrid(10);