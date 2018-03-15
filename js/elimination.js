/**
 * This method should be called when the game starts, e.g. when a button
 * to start the game is pressed.
 *
 * @param numberOfPlayers the number of players who will participate
 *
 * TODO Think about how to pass the value correctly.
 *
 */

var currentGame = undefined;
function startGame() {
    currentGame = new Game(2);

    // TODO Test this for more than 2 players as well..
    shot(20,0);
    shot(20,0);
    shot(0,0);

    shot(19,1);
    shot(21,1);
    shot(25,1);

    shot(20,0);
    shot(20,0);
    shot(25,0);

    shot(1,1);
}


/**
 * Implements one shot.
 * @param score of one dart
 * @param playerNumber number of the player, beginning from zero
 * @return {bool} true if the player didn't bust, false otherwise
 */
function shot(score, playerNumber){

    if(!isInteger(score)){
        alert("Score is not of type integer");
        return false;
    }
    // First step: retrieve the player object
    var player = currentGame.getListOfPlayers()[playerNumber];
    console.log("Player (" + playerNumber + ") has shot:" + player.getScoreLeft());

    // Second step: Add the score to the player
    // TODO Validate if the score doesn't get out of bounds
    // TODO Check if the given score is a legal shot.
    player.addScore(score);
    console.log("Player has now shot: " + player.getScoreLeft());

    // Third step: check if one player has exactly the same score, set it to zero in this case.
    for(var i = 0; i < currentGame.getNumberOfPlayers(); i++){
        if(i === playerNumber){
            continue;
        }
        if(currentGame.getListOfPlayers()[i].getScoreLeft() === player.getScoreLeft()){
            currentGame.getListOfPlayers()[i].resetScore();
            console.log("Unfortunatly the score was removed");
        }
    }
    return true;

}

