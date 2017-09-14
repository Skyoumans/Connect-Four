$(document).ready(function() {
    
        // Setup game
        config.black.playerName = prompt("Enter your name. You will play black.", config.blkPlayerName) || config.blkPlayerName;
        config.red.playerName = prompt("Enter your name. You will play red.", config.redPlayerName) || config.redPlayerName;
        $('.prefix').text(config.playerPrefix);
        $('#player').addClass(currentPlayer.color).text(currentPlayer.playerName);
    
        // Trigger the game sequence by clicking on a position button on the board.
        $('.board button').click(function() {
            // Detect the x and y position of the button clicked.
            y_pos = $('.board tr').index($(this).closest('tr'));
            x_pos = $(this).closest('tr').find('td').index($(this).closest('td'));
    
            // Ensure the piece falls to the bottom of the column.
            y_pos = dropToBottom(x_pos, y_pos);
    
            if (posIsClaimed(x_pos, y_pos)) {
                alert(config.claimedMsg);
                return;
            }
    
            addDiscToBoard(currentPlayer.color, x_pos, y_pos);
            showBoard();
            // Check to see if there is a winner.
            if (vertWin() || horzWin() || diagWin()) {
                // Destroy our click listener to prevent further play.
                $('.board button').unbind('click');
                alert(config.winPrefix + currentPlayer.playerName);
    
            } else if (gameDraw()) {
                // Destroy our click listener to prevent further play.
                $('.board button').unbind('click');
                alert(config.drawMsg + currentPlayer.playerName)
            }
            changePlayer();
        });
        $('.play-again').click(function(e) {
            location.reload();
        });

    });
