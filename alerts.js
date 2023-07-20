
// function hideDiv(e){
//     const selection = e.target;
//     e.preventDefault();

//     if ((selection.className === 'player-move')){
//         // change visibility
//     }

//     else if ((selection.className === 'computer-move')){
//         // change visibility
//     }

//     else if ((selection.className === 'game-over')){
//         // change visibility
//     }
// }

// document.addEventListener('click', showHide);

// show/hide div after 5 seconds
// function hideDiv() {
//     let alert = document.querySelector('.player-move');
//     setTimeout(function () {
//         $(alert).fadeOut(1500);
//     }, 5000);
// };

// show/hide div after 5 seconds
setTimeout (() => {
    let alert = document.querySelector('.player-move');
    alert.style.display = 'none';
    }, 5000);


// hideDiv();
  