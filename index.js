// A board consists of 3 X 3 squares
// Player 1 (X) and Player 2 (O) mark a square alternating turns
// Game play ends when one player marks 3 rows vertically, horizontally, or diagonally

let btns = document.querySelectorAll('.box');
btns.forEach(btn => {
    btn.addEventListener('click', () => markBoard(event, currentPlayer));
})

function renderMark(index, player) {
    const container = document.querySelector(`#box-${index}`);
    const text = document.createElement("p");
    text.textContent = player;
    text.classList.add("mark-text");
    container.appendChild(text);
}

function clearBoard() {
    document.querySelectorAll(".mark-text").forEach(e => e.remove());
}

let reset = document.querySelector("#reset");
reset.addEventListener("click", () => clearBoard());

let board = [...Array(9)];

// winning combo of index
const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function markBoard(event, player) {
    const id = event.currentTarget.id.toString();
    const index = id.charAt(4);
    if (board[index] === undefined) {
        board.splice(index, 1, player);
        renderMark(index, player);
        checkWinner(player);
    } else {
        // TODO: allow user to select another spot
        throw new Error("Spot is already marked")
    }
}

let currentPlayer = "X";

function checkWinner(player) {
    // Player is "X" or "O"
    // Get all indexs of current player marks
    const currentPlayerBoard = board.map((square, index) =>
        square === player ? index : undefined)
        .filter((index) => index !== undefined);
    // Loop through possible winning combinations
    for (const line of lines) {
        // If each call of includes returns true, announce winner
        if (line.every(index => currentPlayerBoard.includes(index))) {
            //Display winner
            setTimeout(() => alert(`Player ${player} wins!`), 500);
            //Clear the board to reset the game
            board = [...Array(9)];
            return;
        }
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}



