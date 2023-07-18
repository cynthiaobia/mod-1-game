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

const player = {mark: 'x', isTurn: true};
const computer = {mark: 'o', isTurn: true};

function isGridItem(e){
    // register click to check whether area clicked is in grid or not
    let isItem = true;
    const selection = e.target;
    e.preventDefault();
    // check to see if clicking within grid
    if ((selection.className === 'grid-item')){
        isItem = true;
        // console.log(true);


        // initializing truth values

        // check to see if grid item empty for placement of item
        // if playerMove === true... switch to false at end of block to alternate, else use for computer comment
        if (selection.textContent === 'null'){
            // console.log(true); // will print true 2 times because of previous condition
            selection.textContent = 'x'; // replaces value with x if empty
            // textContent = playerMove['value'];
            // playerMove['isTurn'] = false;
        }
        else {
            //console.log(false);
        }
    }
    else {
        isItem = false;
        //console.log(false);
    }
}

//document.addEventListener('click', isGridItem);







// =============== write function to take turns, alternate players

// if (playerMove === true){
//     // then set to false, player cannot click until value changes on grid for o
// }
// else {
//     console.log('computer turn');

// }

// function disableClick(e){
//     e.stopPropogation();
//     e.preventDefault();
// }

// function takeTurns(){

//     // 
// }

player['isTurn'] = true;
computer['isTurn'] = false;

if (player['isTurn'] === true) {
    document.addEventListener('click', isGridItem);
    player['isTurn'] = false;
    console.log(`${player['isTurn']}, Your turn is completed, you cannot move again`);
}
else {
    document.addEventListener('click', isGridItem);
    computer['isTurn'] = false;
    console.log(`${computer['isTurn']}, Computer turn is completed, computer cannot move again`);
};