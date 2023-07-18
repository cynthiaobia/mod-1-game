// combinations

const arr = []
for (let i = 0; i <= 8; i++){
    arr.push(i);
}
// console.log(arr);

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

const player = {mark: 'x', move: true};
const computer = {mark: 'o', move: true}; 

// checks if player can make move as long as grid-item is empty
function playerMove(item) {
    if (item.textContent === 'null') {
        item.textContent = player.mark;
        player.move = false;
        computer.move = true;
    }
}

// checks if computer can make move as long as grid-item is empty
function computerMove(item){
    if (item.textContent === 'null') {
        item.textContent = computer.mark;
        computer.move = false;
        player.move = true;
    }
}

// register clicks to check whether area clicked is within grid
function isGridItem(e){
    const selection = e.target;
    e.preventDefault();

    if ((selection.className === 'grid-item')){
        if (player.move === true){
            playerMove(selection);
        }
        else if (computer.move === true) {
            computerMove(selection);
        }
    }
    // clicks outside grid
    else {
        console.log(`click is outside grid`);
    }
}

document.addEventListener('click', isGridItem);
