const GRID_MIN_LIMIT = 0;
const GRID_MAX_LIMIT = 100;

let initialGridSize = 16;

const container = document.querySelector(".grid-container");

// Function to create a grid with a specified number of squares per side
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

  container.addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("grid-square")) {
      const backgroundColor = randomColor();
      event.target.style.backgroundColor = `rgb(${backgroundColor})`;
    }
  });
}

// Initial grid creation
createGrid(initialGridSize);
displayGridSize(initialGridSize);

// Resize grid button event listener
const button = document.querySelector(".resize-button");
button.addEventListener("click", function () {
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

// each interaction randomises the square’s RGB value
function randomColor() {
  const rgbValue = Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * 266)
  );

  return rgbValue;
}

// display current grid size
function displayGridSize(gridSize) {
  const gridSizeElement = document.querySelector(".grid-size");
  gridSizeElement.textContent = gridSize + "x" + gridSize;
}

// Add button to index.html -> show grid or not
// Add event listener to button -> toggle on / off = border: 1px solid #ffffff
// will probably need to be move styling here and then handle
// but initially set show grid = false?
