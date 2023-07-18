// combinations

const arr = []
for (let i = 0; i <= 8; i++){
    arr.push(i);
}
console.log(arr);

// incorporate DOM

// practice inputs
// there are 8 winning combinations in tic tac toe

// WINNING COMBINATIONS
// HORIZONTALLY:
//  0 1 2
//  3 4 5
//  6 7 8
// VERTICALLY:
//  0 3 6
//  1 4 7
//  2 5 8
// DIAGONALLY:
//  0 4 8
//  2 4 6

// register clicks to check whether area clicked is in grid or not
function isGridItem(e){
    // determine whether selection clicked is in grid, register clicks
    let isItem = true;
    const selection = e.target;
    e.preventDefault();
    // check to see if clicking within grid
    if ((selection.className === 'grid-item')){
        isItem = true;
        console.log(`click is within grid`);
        // check to see if grid item empty for placement of item
        if (selection.textContent === 'null'){
            console.log(`item is empty`);
            selection.textContent = 'x'; // replaces value with x if empty
        }
        else {
            console.log(`item is not empty`);
        }
    }
    else {
        isItem = false;
        console.log(`click is outside grid`);
    }
}
document.addEventListener('click', isGridItem);

// =============== write function to take turns, alternate players
let playerMove = true;
let computerMove = false;

if (playerMove === true){
    // then set to false, player cannot click until value changes on grid for o
}
else {

}
function disableClick(e){
    e.stopPropogation();
    e.preventDefault();
}

function takeTurns(){

    // 
}