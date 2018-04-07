/**
 * This method should be called when the game starts, e.g. when a button
 * to start the game is pressed.
 *
 * @param {number} numberOfPlayers the number of players who will participate
 */

let currentGame = undefined;

function startGame(playerNumber) {
    if (playerNumber === undefined || !isInteger(playerNumber)) {
        throw new Error("Player number undefined");
    }
    setCurrentPlayer(currentPlayer + 1);
    emptyTableContent();
    layoutTable(playerNumber);
    currentGame = new Game(playerNumber, 301);
}


/**
 * Implements one shot.
 * @param {number} score of one dart
 * @param {number} playerNumber number of the player, beginning from zero
 * @return {boolean} true if the player didn't bust, false otherwise
 */
function shot(score, playerNumber) {
    if (!isInteger(score) || !isInteger(playerNumber)) {
        throw new Error("Illegal score");
    }
    if (!isLegalScore(score)) {
        return SHOT_STATE.illegal;
    }
    let player = currentGame.getListOfPlayers()[playerNumber];
    let validate_score_shot = player.getScoreShot() + score;
    if (validate_score_shot > currentGame.getTargetScore() || validate_score_shot === (currentGame.getTargetScore() - 1)) {
        showAlert("Busted");
        return SHOT_STATE.bust;
    }
    player.addScore(score);
    if (player.getScoreShot() === currentGame.targetScore) {
        showAlert("Spieler " + (currentPlayer + 1) + " hat gewonnen.");
        return SHOT_STATE.finished;
    }
    for (let i = 0; i < currentGame.getNumberOfPlayers(); i++) {
        if (i === playerNumber) {
            continue;
        }
        if (currentGame.getListOfPlayers()[i].getScoreShot() === player.getScoreShot()) {
            currentGame.getListOfPlayers()[i].resetScore();
            console.log("Unfortunately the score was removed");
        }
    }
    return SHOT_STATE.legal;
}


/**
 * Returns the score shot by a given player
 * @param {number} playerNumber the number of the player, 0-based
 * @return {number}  the score shot by the player
 */
function getScoreForPlayer(playerNumber) {
    if (!isInteger(playerNumber) || playerNumber > currentGame.getNumberOfPlayers()) {
        throw new Error("Illegal player number passed to get score for a specific player")
    }

    return currentGame.getListOfPlayers()[playerNumber].getScoreShot();
}

/**
 * Tests, if the score is possible with one dart
 * @param {number} score the score for one dart
 */
function isLegalScore(score) {
    return (score !== 23 && score !== 29 && score
        !== 31 && score !== 35 && score !== 37
        && score !== 41 && score !== 43 && score !== 44 && score !== 46 && score !== 47 && score !== 49
        && score != 52 && score != 53 && score !== 55 && score !== 56 && score !== 58 && score !== 59 && score <= 60)
}
