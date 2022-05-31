/*----- constants -----*/
// const win cell 1,2,3. 4,5,6. 7,8,9. 1,4,7. 2,5,8. 3,6,9. 1,5,9. 3,5,7.
const boardEl = document.getElementById("board");
const cellEls = document.querySelectorAll(".cell");
const resetEl = document.getElementById("resetButton");
const turnEl = document.getElementById("turn")
const maxTurn = 9;

/*----- app's state (variables) -----*/
let turn = 0;
let boardData = [
[0, 0, 0],
[0, 0, 0],
[0, 0, 0]
]

/*----- cached element references -----*/

/*----- event listeners -----*/
boardEl.addEventListener("click", handleClick);
resetEl.addEventListener("click", resetGame);
/*----- functions -----*/

function handleClick(evt) {
  while (turn < maxTurn) {
    turn += 1;
    if (turn % 2 === 0) {
      evt.target.innerText = "X";
      evt.target.style.color = 'rgb(53, 27, 181)'
      evt.target.classList.add("x");
      turnEl.innerText= "O's Turn";
      turnEl.style.color = 'rgb(239, 177, 177)'
    } else {
      evt.target.innerText = "O";
      evt.target.style.color = 'rgb(239, 177, 177)'
      evt.target.classList.add("o");
      turnEl.innerText= "X's Turn";
      turnEl.style.color = 'rgb(53, 27, 181)'
    }
    return
  }
}


function resetGame(evt) {
  cellEls.forEach(function (cell) {
    cell.innerText = " ";
    cell.classList.remove('o')
    cell.classList.remove('x')
  });
  turn = 0;
  boardData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
    ]
    turnEl.innerText= "O's  Turn";
    turnEl.style.color = 'rgb(239, 177, 177)'
}

