
function addDisc(color, x_pos, y_pos) {
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
    console.log("switched to " + currentPlayer.playerName)
}
    


function dropDown(x_pos, y_pos) {
    //Starting at the bottom, check each row for an empty space and fill it with a disc
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

    //Scans columns for a series of 4, returning a win. Resets if theres a gap
    for (let x = 0; x <= 6; x++) {
        for (let y = 0; y <= 5; y++) {
            currValue = board[y][x];
            if (currValue === prevValue && currValue !== 0) {
                tally += 1;
            } else {
                tally = 0;
            }
            if (tally === config.numToWin - 1) {
                return true;
            }
            prevValue = currValue;
        }

        tally = 0;
        prevValue = 0;
    }
    //No vertical wins found
    return false;
}

