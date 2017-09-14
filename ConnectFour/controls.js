$(document).ready(function() {
    config.blkPlayerName = prompt("Please enter your name. You will play as black.", config.blkPlayerName) || config.blkPlayerName;
    config.redPlayerName = prompt("Please enter your name. You will play red.", config.redPlayerName) || config.redPlayerName;
    $('.prefix').text(config.playerPrefix);
    $('#player').addClass(currentPlayer).text(config[currentPlayer + "PlayerName"]);

    // Start the game sequence by clicking on a position button on the board.
    $('.board button').click(function(e){
        //detect the clicked buttons x and y position.
        let y_pos = $('.gameBoard tr').index($(this).closest('tr'));
        let x_pos = $(this).closest('tr').find('td').index($(this).closest('td'));
        // Make sure the piece falls to the bottom of the respective column.    
        y_pos = dropToBottom(x_pos, y_pos);
            if (positionIsClaimed(x_pos, y_pos)) {
                alert(config.claimedMsg);
                return;
            }
        
            addDiscToBoard(currentPlayer, x_pos, y_pos);
            printBoard();

            // Look to see if there is a winner.
            if (vertWin() || horzWin() || diagLWin() || diagWin()) {
                // Destroy the click listener so it will further play.
                $('.board button').unbind('click');
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