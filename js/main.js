/*----- constants -----*/
const player = {
  1: "red",
  "-1": "blue",
  null: "white",
};

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*----- app's state (variables) -----*/
let turn = 0;
let winner;
let board;
/*----- cached element references -----*/
const boardEl = document.getElementById("board");
const cellEls = document.querySelectorAll(".cell");
const resetEl = document.getElementById("resetButton");
const turnEl = document.getElementById("turn");

/*----- event listeners -----*/
boardEl.addEventListener("click", handleClick);
resetEl.addEventListener("click", initGame);
/*----- functions -----*/

function handleClick(evt) {
  if (evt.target.innerText === "") {
    turn += 1;
    if (turn % 2 === 0) {
      evt.target.innerText = "X";
      evt.target.style.color = "blue";
      evt.target.classList.add("x");
      turnEl.innerText = "O's Turn";
      turnEl.style.color = "rgb(200, 28, 28)";
    } else {
      evt.target.innerText = "O";
      evt.target.style.color = "rgb(200, 28, 28)";
      evt.target.classList.add("o");
      turnEl.innerText = "X's Turn";
      turnEl.style.color = "blue";
    }
    
    // winCombos.forEach(function(combo) {
    //   if (cellEls[combo[0]].innerHTML === cellEls[combo[1]].innerHTML && cellEls.innerHTML !== "") {
    //     console.log("Win")
    //   }
    // })

    if (turn === 9) {
      turnEl.innerText = "Good Game!";
      turnEl.style.color = 'gold'
    }
    return;
  }
  return;
}


function initGame(evt) {
  cellEls.forEach(function (cell) {
    cell.innerText = " ";
    cell.classList.remove("o");
    cell.classList.remove("x");
  });
  turn = 0;
  turnEl.innerText = "O's  Turn";
  turnEl.style.color = "rgb(200, 28, 28)";
}
