// Create variables for use in the game.

// Config object.
let config = {
    blkPlayerName: "Player One",
    redPlayerName: "Player Two",
    claimedMsg: "This space has already been claimed. Make a different choice.",
    drawMsg: "The game is a draw",
    winMsg: "The winner is: ",
    startingPlayer: "black",
    numToWin: 4,
    playerPrefix: "Current Player is: ",
    winPrefix: "The winner is: ",
}

// Define the empty board as an array, full of zeros. In the
// game, 0 represents empty, 'red' represents a red disc, and 'black' represents
// a black disc.
let board = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];

// Set the starting player.
let currentPlayer = config.startingPlayer;