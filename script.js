function createGridItems(size) {
  let board = document.getElementById("container");
  let gridItem = board.querySelectorAll("div");
  gridItem.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let allSize = size * size;
  for (let i = 0; i < allSize; i++) {
    let gridItem = document.createElement("div");
    gridItem.className = "grid-items";
    gridItem.style.backgroundColor = "red";
    board.appendChild(gridItem);
  }
}
createGridItems(16);

let setSizeButton = document.getElementById("setSizeButton");
setSizeButton.addEventListener("click", function () {
  let gridSize = parseInt(document.getElementById("selector").value);
  if (!isNaN(gridSize) && gridSize > 0) {
    createGridItems(gridSize);
  } else {
    alert("Please enter a valid positive number for the grid size.");
  }
});
