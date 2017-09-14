   /*
   $(document).ready(function() {
    config.blkPlayerName = prompt("Please enter your name. You will play as black.", config.blkPlayerName) || config.blkPlayerName;
    config.redPlayerName = prompt("Please enter your name. You will play red.", config.redPlayerName) || config.redPlayerName;
    $('.prefix').text(config.playerPrefix);
    $('#player').addClass(currentPlayer).text(config[currentPlayer + "playerName"]);

    // Start the game sequence by clicking on a button.
    $('.gameBoard button').click(function(e){
        //detect the clicked buttons x and y position.
        y_pos = $('.gameBoard tr').index($(this).closest('tr'));
        x_pos = $(this).closest('tr').find('td').index($(this).closest('td'));
        // Make sure the piece falls to the bottom of the respective column.    
        y_pos = dropToBottom(x_pos, y_pos);
            if (posIsClaimed(x_pos, y_pos)) {
                alert(config.claimedMsg);
                return;
            }
        
            addDisc(currentPlayer, x_pos, y_pos);
            showBoard();

            // Look to see if there is a winner.
            if (vertWin() || horzWin() || diagWin()) {
                // Destroy the click listener so it will further play.
                $('.gameBoard button').unbind('click');
                $('.message').text(config.drawMsg);
                $('.play-again').show("slow");
                return;
            }
            changePlayer();
    });
    //Make replay functionality
    $('.play-again').click(function(e) {
        location.reload();
    });
});
*/
$(document).ready(function() {
    
        // Setup game.
        // @todo: Make name pop-ups more user-friendly. Perhaps optional?
        config.blackPlayerName = prompt("Please enter the first player's name. This player will use black game pieces.", config.blackPlayerName) || config.blackPlayerName;
        config.redPlayerName = prompt("Please enter the second player's name. This player will use red game pieces.", config.redPlayerName) || config.redPlayerName;
        $('.prefix').text(config.playerPrefix);
        $('#player').addClass(currentPlayer).text(config[currentPlayer + "PlayerName"]);
    
        // Trigger the game sequence by clicking on a position button on the board.
        $('.board button').click(function(e) {
            // Detect the x and y position of the button clicked.
            var y_pos = $('.board tr').index($(this).closest('tr'));
            var x_pos = $(this).closest('tr').find('td').index($(this).closest('td'));
    
            // Ensure the piece falls to the bottom of the column.
            y_pos = dropToBottom(x_pos, y_pos);
    
            if (positionIsTaken(x_pos, y_pos)) {
                alert(config.takenMsg);
                return;
            }
    
            addDiscToBoard(currentPlayer, x_pos, y_pos);
            printBoard();
    
            // Check to see if we have a winner.
            if (verticalWin() || horizontalWin() || diagonalWin()) {
                // Destroy our click listener to prevent further play.
                $('.board button').unbind('click');
                $('.prefix').text(config.winPrefix);
                $('.play-again').show("slow");
                return;
    
            } else if (gameIsDraw()) {
                // Destroy our click listener to prevent further play.
                $('.board button').unbind('click');
                $('.message').text(config.drawMsg);
                $('.play-again').show("slow");
                return;
            }
    
            changePlayer();
        });
    
        $('.play-again').click(function(e) {
            location.reload();
        });
    
    });
    