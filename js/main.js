/*----- constants -----*/

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
initGame()

function handleClick(evt) {
  if (evt.target.innerText === "") {
    turn += 1;
    if (turn % 2 === 0) {
      evt.target.innerText = "X";
      evt.target.style.color = "blue";
      evt.target.classList.add("x");
      // render x, blue, ...etc
      turnEl.innerText = "O's Turn";
      turnEl.style.color = "rgb(200, 28, 28)";
      // put above in render()
    } else {
      evt.target.innerText = "O";
      evt.target.style.color = "rgb(200, 28, 28)";
      evt.target.classList.add("o");
      turnEl.innerText = "X's Turn";
      turnEl.style.color = "blue";
    }
    render()
  }
  return;
}

function render() {
  if (turn === 9) {
    turnEl.innerText = "It's a Tie!";
    turnEl.style.color = "#e3d8aa";
  }
  if (
    (cell[0].innerText === "O" &&
      cell[1].innerText === "O" &&
      cell[2].innerText === "O") ||
    (cell[3].innerText === "O" &&
      cell[4].innerText === "O" &&
      cell[5].innerText === "O") ||
    (cell[6].innerText === "O" &&
      cell[7].innerText === "O" &&
      cell[8].innerText === "O") ||
    (cell[0].innerText === "O" &&
      cell[3].innerText === "O" &&
      cell[6].innerText === "O") ||
    (cell[1].innerText === "O" &&
      cell[4].innerText === "O" &&
      cell[7].innerText === "O") ||
    (cell[2].innerText === "O" &&
      cell[5].innerText === "O" &&
      cell[8].innerText === "O") ||
    (cell[0].innerText === "O" &&
      cell[4].innerText === "O" &&
      cell[8].innerText === "O") ||
    (cell[2].innerText === "O" &&
      cell[4].innerText === "O" &&
      cell[6].innerText === "O")
  ) {
    turnEl.innerText = "O Wins";
    turnEl.style.color = "#ff1100";
    boardEl.removeEventListener("click", handleClick)
  }
  if (
    (cell[0].innerText === "X" &&
      cell[1].innerText === "X" &&
      cell[2].innerText === "X") ||
    (cell[3].innerText === "X" &&
      cell[4].innerText === "X" &&
      cell[5].innerText === "X") ||
    (cell[6].innerText === "X" &&
      cell[7].innerText === "X" &&
      cell[8].innerText === "X") ||
    (cell[0].innerText === "X" &&
      cell[3].innerText === "X" &&
      cell[6].innerText === "X") ||
    (cell[1].innerText === "X" &&
      cell[4].innerText === "X" &&
      cell[7].innerText === "X") ||
    (cell[2].innerText === "X" &&
      cell[5].innerText === "X" &&
      cell[8].innerText === "X") ||
    (cell[0].innerText === "X" &&
      cell[4].innerText === "X" &&
      cell[8].innerText === "X") ||
    (cell[2].innerText === "X" &&
      cell[4].innerText === "X" &&
      cell[6].innerText === "X")
  ) {
    turnEl.innerText = "X Wins";
    turnEl.style.color = "blue";
    boardEl.removeEventListener("click", handleClick)
  }
}

function initGame() {
  cellEls.forEach(function (cell) {
    cell.innerText = " ";
    cell.classList.remove("o");
    cell.classList.remove("x");
  });
  turn = 0;
  turnEl.innerText = "O's  Turn";
  turnEl.style.color = "rgb(200, 28, 28)";
  boardEl.addEventListener("click", handleClick);
}
