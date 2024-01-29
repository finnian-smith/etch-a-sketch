const GRID_MIN_LIMIT = 0;
const GRID_MAX_LIMIT = 100;

let initialGridSize = 16;

const container = document.querySelector(".grid-container");

// Create a grid with a specified number of squares per side
function createGrid(squarePerSide) {
  container.innerHTML = "";

  const squareSize = 100 / squarePerSide;

  for (let i = 0; i < squarePerSide * squarePerSide; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}%`;
    square.style.height = `${squareSize}%`;
    container.appendChild(square);
  }

  container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("grid-square")) {
      const backgroundColor = randomColor();
      event.target.style.backgroundColor = `rgb(${backgroundColor})`;
    }
  });
}

// Initial grid creation
createGrid(initialGridSize);
displayGridSize(initialGridSize);

// Resize grid button
const resizeButton = document.querySelector(".resize-button");
resizeButton.addEventListener("click", () => {
  let newSize = prompt(
    "Enter the number of squares per side (Max - " + GRID_MAX_LIMIT + "):"
  );
  newSize = parseInt(newSize);

  // Validate user input
  if (isNaN(newSize) || newSize <= GRID_MIN_LIMIT || newSize > GRID_MAX_LIMIT) {
    alert("Please enter a valid number between 1 and 100.");
  } else {
    createGrid(newSize);
    displayGridSize(newSize);
  }
});

// Display current grid size
function displayGridSize(gridSize) {
  const gridSizeElement = document.querySelector(".grid-size");
  gridSizeElement.textContent = gridSize + "x" + gridSize;
}

// Randomise the square’s RGB value
function randomColor() {
  const rgbValue = Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * 256)
  );

  return rgbValue;
}

// Toggle on / off grid lines
const gridLineButton = document.querySelector(".grid-line-button");
gridLineButton.addEventListener("click", () => {
  container.classList.toggle("grid-lines-on");
});

// Reset grid
const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", () => {
  createGrid(initialGridSize);
  displayGridSize(initialGridSize);
});
