// Create variables for use in the game.

// Config object.
let config = {
    blkPlayerName: "Player One",
    redPlayerName: "Player Two",
    black: {
        color: "black",
        playerName: "Player One"
    },
    red: {
        color: "red",
        playerName: "Player Two"
    },
    claimedMsg: "This space has already been claimed. Choose again!",
    drawMsg: "The game is a draw",
    winMsg: "The winner is: ",
    numToWin: 4,
    playerMsg: "Current Player is: ",
    playerWinMsg: "The winner is: ",
}

// Define the empty board as an array, full of zeros. In the
// game, 0 represents empty, 'red' represents a red disc, and 'black' represents
// a black disc.
let board = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];

// Set the starting player.
var currentPlayer = config.black;