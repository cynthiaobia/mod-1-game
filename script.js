
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
let winner = '';
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

// figure out how to find empty entries in arr, select random entry to place o
function generateCompMove(){
    let emptyStrArr = [];
    let index = 0;
    for (let i = 0; i < trackMarks.length; i++) {
        // get index of empty str in arr
        if (trackMarks[i] === ''){
            emptyStrArr.push(i);
        }
    }

    console.log(emptyStrArr);
    index = Math.floor(Math.random() * (emptyStrArr.length)); // should it be (emptyStrArr.length - 1) instead?
    console.log(emptyStrArr[index]);
    // for random i in emptyStrArr.length, set textContent, etc.. get item by id to set text content
    // maybe return the index and id
    return index;
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
        // for random i in emptyStrArr.length, set textContent, etc.. get item by id to set text content

        item.textContent = computer.marker;
        computer.move = false;
        player.move = true;
    }
}

// show/hide alert after 3 seconds
function alertPopUp(alert){
    alert.style.display = 'inline-block';
    setTimeout (() => {
        alert.style.display = 'none';
        }, 3000);
}

// register clicks to check whether area clicked is within grid
function isGridItem(e){
    const selection = e.target;
    e.preventDefault();

    const alert = document.querySelector('.alert');

    if ((selection.className === 'grid-item') && (gameOver === false)){ 
        const index = selection.id;
        if (player.move === true){
            playerMove(selection);
            // checks so it doesn't replace exisiting marker
            if (trackMarks[index] === '') { 
                trackMarks[index] = player.marker

                // show/hide alert after 3 seconds
                alert.textContent = `Computer's Turn`;
                alertPopUp(alert);
            }
            else {
                // show/hide alert after 3 seconds
                alert.textContent = `Illegal move. Try again.`;
                alertPopUp(alert);
            }
        generateCompMove(); // testing here...

        }
        else if (computer.move === true) {
            computerMove(selection);
            // checks so it doesn't replace exisiting marker
            if (trackMarks[index] === '') {
                trackMarks[index] = computer.marker;

                // show/hide alert after 3 seconds
                alert.textContent = `Your Turn`;
                alertPopUp(alert);
            }
            else {
                // show/hide alert after 3 seconds
                alert.textContent = `Illegal move. Try again.`;
                alertPopUp(alert);
            }
        }

        console.log(trackMarks);
        console.log(`player move: ${player.move}`);
    }
    // clicks outside grid, illegal move
    else {
        // show/hide alert after 3 seconds
        alert.textContent = `Illegal move. Try again.`;
        alertPopUp(alert);
    }
    gameOver = isGameOver();
    if (gameOver === true) {
        // show/hide alert after 3 seconds
        alert.textContent = `Game Over.`;
        alertPopUp(alert);
    } 
}

document.addEventListener('click', isGridItem);

// make computer player auto instead of click
// if win, make text larger and bolder, end game
// make function to get winner. alert message for winner, loser, draw
// reset board to play again