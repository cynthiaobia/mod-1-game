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
    const isItem = false;
    const selection = e.target;
    event.preventDefault();
    if (selection.className !== 'grid-item'){
        console.log(false);
    }
    else {
        console.log(true);
    }
}

document.addEventListener('click', isGridItem);

/*
topMenuEl.addEventListener('click', function(event){
    const ele = event.target;
    event.preventDefault();
    if (ele.tagName === 'A' ){
        console.log(ele.textContent);
        //ele.removeClass('active')
    }
});
*/