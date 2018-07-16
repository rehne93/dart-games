let currentScore = [0, 0, 0, 0];
let numOfPlayers = 1;
let playerPlaying = 0;
let targetLists = ["15", "16", "Any double", "17", "18", "Any triple", "19", "20", "Bull"];
let currentTargetPosition = 0;
let gameStarted = false;
const TARGET = "Next target: ";
const CURRENT_PLAYER = "Current Player: ";

/**
 * Enter key is able to press shot button
 */
$(document).bind('keypress', function (e) {
    if (e.keyCode === 13) {
        $('#shotButton').trigger('onclick');
    }
});

function setNumOfPlayer(number) {
    numOfPlayers = parseInt(number);
    console.log("Number of players: " + numOfPlayers);
    init();
}

/**
 * Set default values on initialization
 */
$(function () {
    init();
});

function init() {
    $("#targetInfo").text(TARGET + targetLists[currentTargetPosition]);
    $("#currentPlayer").text(CURRENT_PLAYER + (playerPlaying + 1));
    for (let i = 0; i < currentScore.length; i++) {
        currentScore[i] = 0;
    }
    for (let j = 0; j < numOfPlayers; j++) {
        console.log("Setting position: " + j + " to 40.");
        currentScore[j] = 40;
    }

    refreshTableScores();
}

/**
 * Refreshes the table scores with the current score for every player.
 */
function refreshTableScores() {
    for (let i = 0; i < currentScore.length; i++) {
        writeIntoTable(currentScore[i], i);
    }
}

/**
 * Main functionality that runs one program flow.
 */
function addScore() {

    let score = parseInt($("#usrInput").val());

    if (!isInteger(score) || score > 180 || score < 0) {
        alert("No valid input at field, must be integer.");
        return;
    }
    if (legalAt(score, targetLists[currentTargetPosition]) && score !== 0) {
        currentScore[playerPlaying] += score;
    } else {
        currentScore[playerPlaying] /= 2;
        currentScore[playerPlaying] = Math.floor(currentScore[playerPlaying]);
        alert("Score halved!");
    }
    refreshTableScores();
    if (incrementPlayerCounter()) {
        incrementTargetPosition();
        gameStarted = true;
        $("#targetInfo").text(TARGET + targetLists[currentTargetPosition]);
    }
    clearText();
    endGameCondition();

}

/**
 * Checks if the game is finished. In case it is, a new game will be started automatically.
 */
function endGameCondition() {
    if (currentTargetPosition === 0 && gameStarted === true) {
        gameStarted = false;
        alert("Game finished! Scores: " + currentScore);
        for (let i = 0; i < currentScore.length; i++) {
            currentScore[i] = 40;
        }


    }
}

function incrementPlayerCounter() {
    playerPlaying++;
    playerPlaying = playerPlaying % numOfPlayers;
    if (playerPlaying === 0) {
        return true;
    }
    return false;
}

function clearText() {
    $("#usrInput").val("");
}

/**
 * Checks if a score is legal for a given target.
 * @param score the score to validate
 * @param target the target
 * @return {boolean} true if valid, false otherwise
 */
function legalAt(score, target) {
    if (isString(target)) {
        if (target.indexOf("double") >= 0) {
            if (score % 2 === 0) {
                return true;
            }
            return false;
        }
        if (target.indexOf("triple") >= 0) {
            if (score % 3 === 0) {
                return true;
            }
            return false;
        }

        if (target.indexOf("Bull") >= 0) {
            if (score === 25 || score === 50) {
                return true;
            }
            return false;
        }
    }
    if (score % parseInt(target) === 0) {
        return true;
    }
    return false;
}

/**
 * Cyclicl incremention of target position.
 */
function incrementTargetPosition() {
    currentTargetPosition = (currentTargetPosition + 1) % 9;
    if (currentTargetPosition === 0) {
        console.log("Need to start a new game");
    }
}

/**
 * Returns the last target position
 *
 */
function lastTargetPosition() {
    if (currentTargetPosition === 0) {
        return 8;
    }
    return currentTargetPosition - 1;
}
