// INITIALIZING PLAYERS
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

let trackMarks = [];
for (let i = 0; i <= 8; i++){
    trackMarks.push('');
}

// DETERMING WIN/LOSE/GAME OVER STATES
let gameOver = false;
function isGameOver() {
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
    // DRAW/TIE
    if (trackMarks.includes('') === false ){
        gameOver = true;
    }
    // console.log(`is game over? ${gameOver}`);
    return [gameOver, player.win, computer.win];
}

// ==============================================
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
    index = Math.floor(Math.random() * (emptyStrArr.length)); 
    console.log(emptyStrArr[index]);
    // for random i in emptyStrArr.length, set textContent, etc.. get item by id to set text content
    // maybe return the index and id
    return index;
}
// ================================================

function playerMove(item) {
    if (item.textContent === '') {
        item.textContent = player.marker;
        item.style.color = 'var(--x-color)';
        player.move = false;
        computer.move = true;
    }
}

function computerMove(item){
    if (item.textContent === '') {

        // ================================================
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
        // ================================================

        item.textContent = computer.marker;
        item.style.color = 'var(--o-color)';
        computer.move = false;
        player.move = true;
    }
}

// GENERATE POP UPS
function alertPopUp(alert){
    alert.style.display = 'inline-block';
    setTimeout (() => {
        alert.style.display = 'none';
        }, 1000);
}

// RESET BOARD
const resetButton = document.querySelector('.reset-btn');
resetButton.addEventListener('click', resetBoard);
function resetBoard(){
    const gridItems = document.querySelectorAll('.grid-item');
    for (let item of gridItems) {
        item.textContent = '';
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
    console.clear();
}

// CHECK IF CLICKS ARE WITHIN GRID
function isGridItem(e){
    const selection = e.target;
    const alert = document.querySelector('.alert');
    
    e.preventDefault();

    let newIndex = 0; // testing here...

    if ((selection.className === 'grid-item') && (gameOver === false)){ 
        const index = selection.id;
        if (player.move === true){
            playerMove(selection);
            // checks so it doesn't replace exisiting marker
            if (trackMarks[index] === '') { 
                trackMarks[index] = player.marker
                alert.textContent = `Player O's Turn`;
                alertPopUp(alert);
            }
            else {
                alert.textContent = `Illegal move. Try again.`;
                alertPopUp(alert);
            }

        generateCompMove(); // testing here..., assign to newIndex

        } 
        else if (computer.move === true) {
            computerMove(selection);
            // checks so it doesn't replace exisiting marker
            if (trackMarks[index] === '') {  
                trackMarks[index] = computer.marker;
                alert.textContent = `Player X's Turn`;
                alertPopUp(alert);
            }
            else {
                alert.textContent = `Illegal move. Try again.`;
                alertPopUp(alert);
            }
        } 
        console.log(trackMarks);
        console.log(`player move: ${player.move}`);
    }
    // reset board
    else if ((selection.className === 'reset-btn')){
        alert.textContent = `Resetting Board`;
        alertPopUp(alert);
    }
    // alerts when changing theme
    else if ((selection.className === 'light-mode-btn')){
        alert.textContent = `Changing to light mode...`;
        alertPopUp(alert);
    }
    else if ((selection.className === 'dark-mode-btn')){
        alert.textContent = `Changing to dark mode...`;
        alertPopUp(alert);
    }
    else if ((selection.className === 'pink-mode-btn')){
        alert.textContent = `Changing to Barbie mode...`;
        alertPopUp(alert);
    }
    // clicks outside grid, illegal move
    else {
        alert.textContent = `Illegal move. Try again.`;
        alertPopUp(alert);
    }
    
    // Game Over State
    let results = isGameOver();
    gameOver = results[0];
    player.win = results[1];
    computer.win = results[2];
    // console.log(results);
    if (gameOver === true) {
        if (player.win) {
            alert.textContent = `Game Over. Player X wins!`;
            alertPopUp(alert);
        }
        else if (computer.win) {
            alert.textContent = `Game Over. Player O wins!`;
            alertPopUp(alert);
        }
        else {
            alert.textContent = `Game Over. It's a tie!`;
            alertPopUp(alert);
        }  
    } 
}

document.addEventListener('click', isGridItem);

// make responsive
// refactor code
// make computer player auto instead of click