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
        console.log(true);

        // check to see if grid item empty for placement of item
        if (selection.textContent === 'null'){
            console.log(true); // will print true 2 times because of previous condition
            selection.textContent = 'x'; // replaces value with x if empty
        }
        else {
            console.log(false);
        }
    }
    else {
        isItem = false;
        console.log(false);
    }
}
document.addEventListener('click', isGridItem);

// check for condition if empty