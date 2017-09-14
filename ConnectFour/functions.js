//A function for adding a disc to our Connect Four board.
    //The color of the current player.
    //The x-position of the location chosen.
    //The y-position of the location chosen.
function addDisc(x_pos, y_pos, color) {
    board[y_pos][x_pos] = color
}

 
//Show the contents of the board variable.
function showBoard() {
    // Loop through the board, anding add classes to each cell for
    // appropriate colors.
    for (var y=0; y<=5; y++) {
        for (var x=0; x<=6; x++) {
            if (board[y][x] !== 0) {
                var cell = $('tr:eq(" + y + ")').find('td').eq(x);
                cell.children('button').addClass(board[y][x]);
            }
        }
    }
}

 //A function for changing players
   function changePlayer() {
    // Change the value of the 'player' variable.
    // Update the UI.
        if (currentPlayer === 'black') {
            currentPlayer = 'red';
        } 
        else {
            currentPlayer = 'black';
        }
        $('#player').removeClass().addClass(currentPlayer).text(config[currentPlayer + "PlayerName"]);
    }
//A function for when there are empty positions below 
//The x-position of the location chosen
//The y-position of the location chosen
//Give a boolean return of true/false for asking if this at the bottom
    
    // Start at the bottom of the column, and step up, checking to make sure
    // each position has been filled. If one hasn't, return the empty position.
function dropToBottom(x_pos, y_pos) {
    for (var y = 5; y>y_pos; y--) {
        if (board[y][x_pos] === 0) {
            return y;
        }
    }
    return y_pos;
}
    
//A function to test and ensure that each location isnt taken yet
function posIsClaimed() {
//The x-position of the location chosen
//The y-position of the location chosen
    var value = board[x_pos][y_pos];
//Boolean returns true/false for when each spot is taken
        return value === 0 ? false : true;
    }

//A function that determines whether the game is a draw
function gameDraw() {
    for (var y=0; y<=5; y++) {
        for (var x=0;x<=6; x++) {
            if (board[x][y] === 0) {
//Return boolean false for if the game is not a draw
//If no locations were empty, return true to indicate the game is a draw                
                return false;
            }
        }
    }
    return true;
}

//Test to see if there are four consecutive vertical pieces
//Return true/false if a win was found or false if not

    //Scan each column in the series, tallying the length of each series.
    //If a series reaches four, return true and win

        //Reset the tally if you find a gap

    //After each column, reset tally and the previous value

//No vertical win was found

//Test to see if there are four consecutive horizontal pieces
//return true if a win was found, or false if it was not

    //Scan each row in series, tallying the length of each series.
    //If a series ever reaches four, return true

        //Reset the tally if theres a gap

    //After each of the rows, reset the tally and previous value

//No horizontal win was found

//Test to see if there are four consecutive diagonal pieces
//Return true if a win was found, or false if not

    //Test for down-right diagonals across the top
        //Reset the tally if you find a gap
    //Shift down-right one diagonal index
    //Reset the tally and previous value when changing diagonals

    //Test for down-left diagonals across the top
        //Reset the tally if you find a gap
    //Shift down-left one diagonal index
    //Reset the tally and previous value when changing diagonals

    //Test for down-right diagonals down the left side
        //Reset the tally if you find a gap
    //Shift down-right one diagonal index
    //Reset the tally and previous value when changing the diagonals

    //Test for down-left diagonals down the right side
        //Reset the tally if there is a gap
    //Shift down-left one diagonal index
    //Reset teh tally and previous value when changing diagonals

    //No diagonal wins found. Return false

//Create a function for the scoreboard
    //Take each win and add 1 to the score at the end of the game
