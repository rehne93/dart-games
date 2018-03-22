/**
 * This method should be called when the game starts, e.g. when a button
 * to start the game is pressed.
 *
 * @param {number} numberOfPlayers the number of players who will participate
 */

var currentGame = undefined;
function startGame(playerNumber) {
    if(playerNumber === undefined || !isInteger(playerNumber)){
        throw new Error("Player number undefined");
    }
    currentGame = new Game(playerNumber, 301);

    // TODO Test this for more than 2 players as well..
    // shot(20,0);
    // shot(20,0);
    // shot(5,0);
    //
    // shot(19,1);
    // shot(26,1);
    // shot(25,1);
    //
    // shot(20,0);
    // shot(20,0);
    // shot(25,0);

    //
    // console.log(getScoreForPlayer(0));
    // console.log((getScoreForPlayer(1)));

}


/**
 * Implements one shot.
 * @param {number} score of one dart
 * @param {number} playerNumber number of the player, beginning from zero
 * @return {boolean} true if the player didn't bust, false otherwise
 */
function shot(score, playerNumber){

    if (!isInteger(score) || !isInteger(playerNumber)) {
        throw new Error("Illegal score");
    }
    if(!isLegalScore(score)){
        alert("The score " + score + " is not possible with one dart.");
        return false;
    }
    var player = currentGame.getListOfPlayers()[playerNumber];
    player.addScore(score);
    for (var i = 0; i < currentGame.getNumberOfPlayers(); i++) {
        if (i === playerNumber) {
            continue;
        }
        if (currentGame.getListOfPlayers()[i].getScoreShot() === player.getScoreShot()) {
            currentGame.getListOfPlayers()[i].resetScore();
            console.log("Unfortunately the score was removed");
        }
    }
    return true;
}


/**
 * Returns the score shot by a given player
 * @param {number} playerNumber the number of the player, 0-based
 * @return {number}  the score shot by the player
 */
function getScoreForPlayer(playerNumber){
    if(!isInteger(playerNumber) || playerNumber > currentGame.getNumberOfPlayers()){
        throw new Error("Illegal player number passed to get score for a specific player")
    }

    return currentGame.getListOfPlayers()[playerNumber].getScoreShot();
}

/**
 * Tests, if the score is possible with one dart
 * @param {number} score the score for one dart
 */
function isLegalScore(score){
    return (score !== 23 && score !== 29 && score
        !== 31 && score !== 35 && score !== 37
        && score !== 41 && score !== 43 && score !== 44 && score !== 46 && score !== 47  && score !== 49
    && score != 52 && score != 53 && score !== 55 && score !== 56 && score !== 58 && score !== 59 && score > 60)

}

/**
 * Function importent for the outprint in the html file.
 */
function output() {
    var player1 = getScoreForPlayer(0);
    var Oplayer1 = document.getElementById('player1');
    Oplayer1.innerHTML = player1;
}