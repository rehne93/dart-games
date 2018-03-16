/**
 * This method should be called when the game starts, e.g. when a button
 * to start the game is pressed.
 *
 * @param numberOfPlayers the number of players who will participate
 *
 *
 */

var currentGame = undefined;
function startGame(playerNumber) {
    if(playerNumber === undefined || !isInteger(playerNumber)){
        throw new Error("Player number undefined");
    }
    currentGame = new Game(playerNumber);

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

    if (!isInteger(score)) {
        throw new Error("Illegal score");
    }
    var player = currentGame.getListOfPlayers()[playerNumber];
    console.log("Player (" + playerNumber + ") has shot:" + player.getScoreLeft());
    player.addScore(score);
    console.log("Player has now shot: " + player.getScoreLeft());
    for (var i = 0; i < currentGame.getNumberOfPlayers(); i++) {
        if (i === playerNumber) {
            continue;
        }
        if (currentGame.getListOfPlayers()[i].getScoreLeft() === player.getScoreLeft()) {
            currentGame.getListOfPlayers()[i].resetScore();
            console.log("Unfortunatly the score was removed");
        }
    }
    return true;

}

