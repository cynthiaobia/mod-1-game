
const player = {
    marker: 'x', 
    move: true,
    win: false
};

const computer = {
    marker: 'o', 
    move: true,
    win: false
};

// track marks in object. replace id name with mark at appropriate index
const trackMarks = []
for (let i = 0; i <= 8; i++){
    trackMarks.push('');
}

let gameOver = false;

// checking for winning conditions
function isGameOver() {
    // condition where if there is a draw/tie
    if (trackMarks.includes('') === false ){
        gameOver = true;
    }

    else {
        // HORIZONTAL WIN
        if (trackMarks[0] === trackMarks[1] && trackMarks[1] === trackMarks[2] && trackMarks[0] !== '') {
            gameOver = true;
        }
        else if (trackMarks[3] === trackMarks[4] && trackMarks[4] === trackMarks[5] && trackMarks[3] !== '') {
            gameOver = true;
        }
        else if (trackMarks[6] === trackMarks[7] && trackMarks[7] === trackMarks[8] && trackMarks[6] !== '') {
            gameOver = true;
        }
        // VERTICAL WIN
        else if (trackMarks[0] === trackMarks[3] && trackMarks[3] === trackMarks[6] && trackMarks[0] !== '') {
            gameOver = true;
        }
        else if (trackMarks[1] === trackMarks[4] && trackMarks[4] === trackMarks[7] && trackMarks[1] !== '') {
            gameOver = true;
        }
        else if (trackMarks[2] === trackMarks[5] && trackMarks[5] === trackMarks[8] && trackMarks[2] !== '') {
            gameOver = true;
        }
        // DIAGONAL WIN
        else if (trackMarks[0] === trackMarks[4] && trackMarks[4] === trackMarks[8] && trackMarks[0] !== '') {
            gameOver = true;
        }
        else if (trackMarks[2] === trackMarks[4] && trackMarks[4] === trackMarks[6] && trackMarks[2] !== '') {
            gameOver = true;
        }
    }
    console.log(`is game over? ${gameOver}`);
    return gameOver;
}

// checks if player can make move as long as grid-item is empty
function playerMove(item) {
    if (item.textContent === 'null') {
        item.textContent = player.marker;
        player.move = false;
        computer.move = true;
    }
}

// checks if computer can make move as long as grid-item is empty
function computerMove(item){
    if (item.textContent === 'null') {
        
        // figure out how to find empty entries in array, select random entry to place o
        let emptyStrArr = [];
        for (let i = 0; i < trackMarks.length; i++){
            // get index of empty string in arr
            if (trackMarks[i] === ''){
                emptyStrArr.push(i);
            }
        }
        console.log(emptyStrArr);
        // for random i in emptyStrArr.length, set textContent, etc.

        item.textContent = computer.marker;
        computer.move = false;
        player.move = true;
    }
}

// register clicks to check whether area clicked is within grid
function isGridItem(e){
    const selection = e.target;
    e.preventDefault();

    if ((selection.className === 'grid-item')){
        const index = selection.id;
        if (player.move === true){
            playerMove(selection);
            // checks so it doesn't replace exisiting marker
            if (trackMarks[index] === '') { 
                trackMarks[index] = player.marker
            }
        }
        else if (computer.move === true) {
            computerMove(selection);
            // checks so it doesn't replace exisiting marker
            if (trackMarks[index] === '') {
                trackMarks[index] = computer.marker;
            }
        }

        console.log(trackMarks);
        console.log(`player move: ${player.move}`);
    }
    // clicks outside grid, illegal move
    else {
        console.log(`click is outside grid`);
    }
    gameOver = isGameOver(); 
}

document.addEventListener('click', isGridItem);

// make computer player auto instead of click
// if win, make text larger and bolder, end game
// alert message for illegal move
// alert message for winner
// alert message for loser
// reset board to play again

