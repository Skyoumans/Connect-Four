$(document).ready(function() {
    config.blkPlayerName = prompt("Please enter your name. You will play as black.", config.blkPlayerName) || config.blkPlayerName;
    config.redPlayerName = prompt("Please enter your name. You will play red.", config.redPlayerName) || config.redPlayerName;
    $('.prefix').text(config.playerPrefix);
    $('#player').addClass(currentPlayer).text(config[currentPlayer + "playerName"]);

    // Start the game sequence by clicking on a button.
    $('.board button').click(function(e){
        //detect the clicked buttons x and y position.
        y_pos = $('.board tr').index($(this).closest('tr'));
        x_pos = $(this).closest('tr').find('td').index($(this).closest('td'));
        // Make sure the piece falls to the bottom of the respective column.    
        y_pos = dropToBottom(x_pos, y_pos);
            if (posIsClaimed(x_pos, y_pos)) {
                alert(config.claimedMsg);
                return;
            }
        
            addDiscToBoard(currentPlayer, x_pos, y_pos);
            showBoard();

            // Look to see if there is a winner.
            if (vertWin() || horzWin() || diagWin()) {
                // Destroy the click listener so it will further play.
                $('.board button').unbind('click');
                $('.message').text(config.drawMsg);
                $('.play-again').show("slow");
                return;
            }
            changePlayer();
    });
});
