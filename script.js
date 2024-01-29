const GRID_MIN_LIMIT = 0;
const GRID_MAX_LIMIT = 100;

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
      event.target.style.backgroundColor = "#66ccff";
    }
  });
}

// Initial grid creation
createGrid(16);

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
  }
});
