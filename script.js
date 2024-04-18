function createGridItems(size) {
  let board = document.getElementById("container");
  let colorPicker = document.getElementById("colorPicker");
  let mouseoverColorPicker = document.getElementById("mouseover-color-picker");
  let eraseButton = document.getElementById("erase-button");
  let randomColorButton = document.getElementById("random-color-button");
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  // clear the existing grid
  board.innerHTML = "";

  // create a new grid based on the user's input
  let allSize = size * size;
  for (let i = 0; i < allSize; i++) {
    let gridItem = document.createElement("div");

    // Add an event listener to the mouseover color picker input

    gridItem.addEventListener("mouseover", () => {
      let selectedMouseOverColor = mouseoverColorPicker.value;
      gridItem.style.backgroundColor = selectedMouseOverColor;
    });
    gridItem.className = "grid-items";
    board.appendChild(gridItem);

    // Add an event listener to the erase button
    eraseButton.addEventListener("click", () => {
      // Erase by setting the background to white
      gridItem.style.backgroundColor = "white";
    });

    // Add an event listener to the random color button
    randomColorButton.addEventListener("click", () => {
      let randomColor = getRandomColor();
      gridItem.style.backgroundColor = randomColor;
      // // Set the mouseover color picker to the random color
      // mouseoverColorPicker.value = randomColor;
      // // Update the current mouseover color
      // currentMouseoverColor = randomColor;
    });

    // change the background of the grid
    colorPicker.addEventListener("input", function () {
      let selectedColor = colorPicker.value;
      gridItem.style.backgroundColor = selectedColor;
    });
  }
  // create function to generate a random color
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

// initial grid creation when the page loads
createGridItems(16);

let setSizeButton = document.getElementById("setSizeButton");
setSizeButton.addEventListener("click", () => {
  let gridSize = parseInt(document.getElementById("selector").value);
  if (gridSize >= 1 && gridSize <= 50) {
    createGridItems(gridSize);
  } else {
    alert("Please enter a valid size between 1 and 50.");
  }
});
