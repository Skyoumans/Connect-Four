// Create variables for use in the game.

// Config object.
var config = {
    blkPlayerName: "Player One",
    redPlayerName: "Player Two",
    claimedMsg: "This space has already been claimed. Make a different choice.",
    drawMsg: "The game is a draw",
    winMsg: "The winner is: ",
    startingPlayer: "black",
    numToWin: 4,
}
// Define the empty board as a two-dimensional array, full of zeros. In the
// game, 0 represents empty, 'red' represents a red disc, and 'black' represents
// a black disc.
var board = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];

// Set the starting player.
var currentPlayer = config.startingPlayer;