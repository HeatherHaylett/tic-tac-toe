// A board consists of 3 X 3 squares
// Player 1 (X) and Player 2 (O) mark a square alternating turns
// Game play ends when one player marks 3 rows vertically, horizontally, or diagonally

const board = [...Array(9)];

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

function markBoard(index, player) {
    if (board[index] === undefined) {
        const newBoard = board.splice(index, 1, player);
    checkWinner(player);
    return newBoard;
    } else {
        // TODO: allow user to select another spot
        throw new Error("Spot is already marked")
    }
    
}

function checkWinner(player) {
    // Player is "X" or "O"
    // Get all indexs of current player marks
    const currentPlayer = board.map((square, index) =>
        square === player ? index : undefined)
        .filter((index) => index !== undefined);
    // Loop through possible winning combinations
    for (const line of lines) {
        // If each call of includes returns true, announce winner
        if (line.every(index => currentPlayer.includes(index))) {
            console.log("found")
        }
    }
}

// TODO: 
// run node index.js see empty board
// Player 1 is "X" Player 2 is "O"
// Tell Player 1 to start

markBoard(0, "X")

console.log(board)
markBoard(0, "O")

console.log(board)
markBoard(1, "X")

console.log(board)
markBoard(2, "O")

console.log(board)
markBoard(4, "X")

console.log(board)
markBoard(6, "O")

console.log(board)
markBoard(8, "X")

console.log(board)
