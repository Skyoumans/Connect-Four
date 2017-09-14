
function addDiscToBoard(color, x_pos, y_pos) {
    board[y_pos][x_pos] = color;
    console.log('working');
}

function showBoard() {
    // Loop thru the board assigning the classes to the cells.
    for (let y = 0; y <= 5; y++) {
        for (let x = 0; x <= 6; x++) {
            if (board[y][x] !== 0) {
                let cell = $("tr:eq(" + y + ")").find('td').eq(x);
                cell.children('button').addClass(board[y][x]);
            }
        }
    }
}

function changePlayer() {
    // changes the player.
    if (currentPlayer.color === 'black') {
        currentPlayer = config.red;
    } else {
        currentPlayer = config.black;
    }
    $('#player').removeClass().addClass(currentPlayer.color).text(currentPlayer.playerName);
}
    


function dropToBottom(x_pos, y_pos) {
    //Starting at the bottom, check each row for an empty space and fill it with the piece
    for (let y = 5; y > y_pos; y--) {
        if (board[y][x_pos] === 0) {
            return y;
        }
    }

    return y_pos;
}

function posIsClaimed(x_pos, y_pos) {
    let value = board[y_pos][x_pos];

    return value === 0 ? false : true;
}

function gameDraw() {
    for (let y = 0; y <= 5; y++) {
        for (let x = 0; x <= 6; x++) {
            if (board[y][x] === 0) {
                return false;
            }
        }
    }
    //if the spaces are all full, return true for a draw
    return true;
}

function horzWin() {
    let currValue = null,
        prevValue = 0,
        tally = 0;

        //Scan each row in the series, checking for a sequence of 4
    for (let y = 0; y <= 5; y++) {
        for (let x = 0; x <= 6; x++) {
            currValue = board[y][x];
            if (currValue === prevValue && currValue !== 0) {
                tally += 1;
            } else {
                // Reset the tally if you find a gap.
                tally = 0;
            }
            if (tally === config.numToWin - 1) {
                return true;
            }
            prevValue = currValue;
        }

        // After each row, reset the tally and previous value.
        tally = 0;
        prevValue = 0;
    }

    // No horizontal win was found.
    return false;
}

function vertWin() {
    let currValue = null,
        prevValue = 0,
        tally = 0;

    // Scan each column in series, tallying the length of each series. If a
    // series ever reaches four, return true for a win.
    for (let x = 0; x <= 6; x++) {
        for (let y = 0; y <= 5; y++) {
            currValue = board[y][x];
            if (currValue === prevValue && currValue !== 0) {
                tally += 1;
            } else {
                // Reset the tally if you find a gap.
                tally = 0;
            }
            if (tally === config.numToWin - 1) {
                return true;
            }
            prevValue = currValue;
        }

        // After each column, reset the tally and previous value.
        tally = 0;
        prevValue = 0;
    }

    // No vertical win was found.
    return false;
}

function diagWin() {
    let x = null,
        y = null,
        xtemp = null,
        ytemp = null,
        currValue = null,
        prevValue = 0,
        tally = 0;

    // Test for down-right diagonals across the top.
    for (x = 0; x <= 6; x++) {
        xtemp = x;
        ytemp = 0;

        while (xtemp <= 6 && ytemp <= 5) {
            currValue = board[ytemp][xtemp];
            if (currValue === prevValue && currValue !== 0) {
                tally += 1;
            } else {
                // Reset the tally if you find a gap.
                tally = 0;
            }
            if (tally === config.numToWin - 1) {
                return true;
            }
            prevValue = currValue;

            // Shift down-right one diagonal index.
            xtemp++;
            ytemp++;
        }
        // Reset the tally and previous value when changing diagonals.
        tally = 0;
        prevValue = 0;
    }

    // Test for down-left diagonals across the top.
    for (x = 0; x <= 6; x++) {
        xtemp = x;
        ytemp = 0;

        while (0 <= xtemp && ytemp <= 5) {
            currValue = board[ytemp][xtemp];
            if (currValue === prevValue && currValue !== 0) {
                tally += 1;
            } else {
                // Reset the tally if you find a gap.
                tally = 0;
            }
            if (tally === config.numToWin - 1) {
                return true;
            }
            prevValue = currValue;

            // Shift down-left one diagonal index.
            xtemp--;
            ytemp++;
        }
        // Reset the tally and previous value when changing diagonals.
        tally = 0;
        prevValue = 0;
    }

    // Test for down-right diagonals down the left side.
    for (y = 0; y <= 5; y++) {
        xtemp = 0;
        ytemp = y;

        while (xtemp <= 6 && ytemp <= 5) {
            currValue = board[ytemp][xtemp];
            if (currValue === prevValue && currValue !== 0) {
                tally += 1;
            } else {
                // Reset the tally if you find a gap.
                tally = 0;
            }
            if (tally === config.numToWin - 1) {
                return true;
            }
            prevValue = currValue;

            // Shift down-right one diagonal index.
            xtemp++;
            ytemp++;
        }
        // Reset the tally and previous value when changing diagonals.
        tally = 0;
        prevValue = 0;
    }

    // Test for down-left diagonals down the right side.
    for (y = 0; y <= 5; y++) {
        xtemp = 6;
        ytemp = y;

        while (0 <= xtemp && ytemp <= 5) {
            currValue = board[ytemp][xtemp];
            if (currValue === prevValue && currValue !== 0) {
                tally += 1;
            } else {
                // Reset the tally if you find a gap.
                tally = 0;
            }
            if (tally === config.numToWin - 1) {
                return true;
            }
            prevValue = currValue;

            // Shift down-left one diagonal index.
            xtemp--;
            ytemp++;
        }
        // Reset the tally and previous value when changing diagonals.
        tally = 0;
        prevValue = 0;
    }

    // No diagonal wins found. Return false.
    return false;
}