// Setup game
config.blkPlayerName = prompt("Please enter your name. You will play as black.", config.blkPlayerName) || config.blkPlayerName;
config.redPlayerName = prompt("Please enter your name. You will play red.", config.redPlayerName) || config.redPlayerName;
$('.prefix').text(config.playerPrefix);
$('#player').addClass(currentPlayer).text(config[currentPlayer + "PlayerName"]);

// Trigger the game sequence by clicking on a position button on the board.
$('.board button').click(function(e){
    //Detect the clicked buttons x and y position.
    let y_pos = $('.gameBoard tr').index($(this).closest('tr'));
    let x_pos = $(this).closest('tr').find('td').index($(this).closest('td'));
    // Ensure the piece falls to the bottom of the column.    
    y_pos = dropToBottom(x_pos, y_pos);
        if (positionIsClaimed(x_pos, y_pos)) {
            alert(config.claimedMsg);
            return;
        }
    
        addDiscToBoard(currentPlayer, x_pos, y_pos);
        printBoard();

});
    // Ensure the piece falls to the bottom of the column.    
    // Check to see if we have a winner.
    // Destroy our click listener to prevent further play.
    
