// let board = document.getElementById('container');

// // function to create and append grid item div
// function createGridItems() {
//     let gridItem = document.createElement('div');
//     gridItem.className = 'grid-item';
//     board.appendChild(gridItem);
// }

// // create grid 16*16
// function createGrid() {
//     for (let i = 0; i < 256; i++) {
// createGridItems();
//     }
// }
function createGridItems(size) {
    let board = document.getElementById('container');
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    
    for (let i = 0; i < 16 * 16; i++) {
        let gridItem = document.createElement('div');
        gridItem.className = 'grid-items';
        gridItem.style.backgroundColor = "red";
        board.appendChild(gridItem);
    
    }
    
}
createGridItems(16);

