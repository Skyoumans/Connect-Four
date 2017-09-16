$(document).ready(function() {
    
    // Setup game
    config.black.playerName = prompt("Enter your name. You will play black.", config.blkPlayerName) || config.blkPlayerName;
    config.red.playerName = prompt("Enter your name. You will play red.", config.redPlayerName) || config.redPlayerName;
    $('.prefix').text(config.playerMsg);
    $('#player').addClass(currentPlayer.color).text(currentPlayer.playerName);
    console.log(config.blkPlayerName + " has joined the game");
    console.log(config.redPlayerName + " has joined the game");

    // Trigger the game sequence by clicking on a position button on the board.
    $('.board button').click(function() {
        // Detect the x and y position of the button clicked.
        y_pos = $('.board tr').index($(this).closest('tr'));
        x_pos = $(this).closest('tr').find('td').index($(this).closest('td'));

        // Ensure the piece falls to the bottom of the column.
        y_pos = dropDown(x_pos, y_pos);

        if (posIsClaimed(x_pos, y_pos)) {
            alert(config.claimedMsg);
            console.log("Invalid Move")
            return;
        }

        addDisc(currentPlayer.color, x_pos, y_pos);
        showBoard();
        // Check to see if there is a winner.
        if (vertWin() || horzWin()) {
            // Destroy our click listener to prevent further play.
            $('.board button').unbind('click');
            console.log(currentPlayer.playerName + " won!")                
            alert(config.playerWinMsg + currentPlayer.playerName);
        }

        changePlayer();
    });

});
