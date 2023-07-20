
const player = {
    marker: 'x', 
    move: true,
    win: false
};

const computer = {
    marker: 'o', 
    move: false,
    win: false
};

// track marks in object. replace id name with mark at appropriate index
let trackMarks = []
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
            if (trackMarks[0] === 'x'){
                player.win = true;
            }
            else if (trackMarks[0] === 'o'){
                computer.win = true;
            }
        }
        else if (trackMarks[3] === trackMarks[4] && trackMarks[4] === trackMarks[5] && trackMarks[3] !== '') {
            gameOver = true;
            if (trackMarks[3] === 'x'){
                player.win = true;
            }
            else if (trackMarks[3] === 'o'){
                computer.win = true;
            }
        }
        else if (trackMarks[6] === trackMarks[7] && trackMarks[7] === trackMarks[8] && trackMarks[6] !== '') {
            gameOver = true;
            if (trackMarks[6] === 'x'){
                player.win = true;
            }
            else if (trackMarks[6] === 'o'){
                computer.win = true;
            }
        }
        // VERTICAL WIN
        else if (trackMarks[0] === trackMarks[3] && trackMarks[3] === trackMarks[6] && trackMarks[0] !== '') {
            gameOver = true;
            if (trackMarks[0] === 'x'){
                player.win = true;
            }
            else if (trackMarks[0] === 'o'){
                computer.win = true;
            }
        }
        else if (trackMarks[1] === trackMarks[4] && trackMarks[4] === trackMarks[7] && trackMarks[1] !== '') {
            gameOver = true;
            if (trackMarks[1] === 'x'){
                player.win = true;
            }
            else if (trackMarks[1] === 'o'){
                computer.win = true;
            }
        }
        else if (trackMarks[2] === trackMarks[5] && trackMarks[5] === trackMarks[8] && trackMarks[2] !== '') {
            gameOver = true;
            if (trackMarks[2] === 'x'){
                player.win = true;
            }
            else if (trackMarks[2] === 'o'){
                computer.win = true;
            }
        }
        // DIAGONAL WIN
        else if (trackMarks[0] === trackMarks[4] && trackMarks[4] === trackMarks[8] && trackMarks[0] !== '') {
            gameOver = true;
            if (trackMarks[0] === 'x'){
                player.win = true;
            }
            else if (trackMarks[0] === 'o'){
                computer.win = true;
            }
        }
        else if (trackMarks[2] === trackMarks[4] && trackMarks[4] === trackMarks[6] && trackMarks[2] !== '') {
            gameOver = true;
            if (trackMarks[2] === 'x'){
                player.win = true;
            }
            else if (trackMarks[2] === 'o'){
                computer.win = true;
            }
        }
    }
    console.log(`is game over? ${gameOver}`);
    return [gameOver, player.win, computer.win];
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
    if (item.textContent === '') {
        item.textContent = player.marker;
        item.style.color = 'green';
        player.move = false;
        computer.move = true;
    }
}

// checks if computer can make move as long as grid-item is empty
function computerMove(item){
    
    if (item.textContent === '') {
        
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
        item.style.color = 'red';
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

// reset board function
const resetButton = document.querySelector('.reset-board');
resetButton.addEventListener('click', resetBoard);

function resetBoard(){
    const gridItems = document.querySelectorAll('.grid-item');
    
    for (let item of gridItems) {
        item.textContent = '';
        item.style.color = 'black';
    }

    gameOver = false;
    player.win = false;
    computer.win = false;
    player.move = true;
    computer.move = false;
    trackMarks = []
    for (let i = 0; i <= 8; i++){
        trackMarks.push('');
    }
    console.log(trackMarks);
}

// register clicks to check whether area clicked is within grid
function isGridItem(e){
    const selection = e.target;
    e.preventDefault();

    const alert = document.querySelector('.alert');
    
    let newIndex = 0; // testing here...

    // if ((selection.className === 'grid-item') && (gameOver === false) && (selection.className !== 'reset-board')){
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
        generateCompMove(); // testing here..., assign to newIndex

        } 
        else if (computer.move === true) {
            computerMove(selection);
            // checks so it doesn't replace exisiting marker
            if (trackMarks[index] === '') {  // use new index instead
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

    
    // RESET Board
    else if ((selection.className === 'reset-board')){
        alert.textContent = `reset board`;
        alertPopUp(alert);
        // resetButton.addEventListener('click', resetBoard);

    }
    

    // clicks outside grid, illegal move
    else {
        // show/hide alert after 3 seconds
        alert.textContent = `Illegal move. Try again.`;
        alertPopUp(alert);
    }
    
    // Game Over State
    let results = isGameOver();
    gameOver = results[0];
    player.win = results[1];
    computer.win = results[2];

    if (gameOver === true) {
        if (player.win) {
            alert.textContent = `Game Over. You win!`;
            alertPopUp(alert);
        }
        else if (computer.win) {
            alert.textContent = `Game Over. You lose!`;
            alertPopUp(alert);
        }
        else {
            alert.textContent = `Game Over. It's a tie!`;
            alertPopUp(alert);
        }  
    } 
}

document.addEventListener('click', isGridItem);





// make computer player auto instead of click
// if win, make text larger and bolder, end game