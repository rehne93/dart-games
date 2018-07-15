let currentScore = 40;
let targetLists = ["15", "16", "Any double", "17", "18", "Any triple", "19", "20", "Bull"];
let currentTargetPosition = 0;

const TARGET = "Next target: ";
const SCORE = "Your score: ";

/**
 * Enter key is able to press shot button
 */
$(document).bind('keypress', function (e) {
    if (e.keyCode === 13) {
        $('#shotButton').trigger('onclick');
    }
});

/**
 * Set default values on initialization
 */
$(function () {
    $("#targetInfo").text(TARGET + targetLists[currentTargetPosition]);
    $("#currentPlayerScore").text(SCORE + currentScore);
    incrementTargetPosition();
});

/**
 * Main functionality that runs one program flow.
 */
function addScore() {
    let score = parseInt($("#usrInput").val());

    if (!isInteger(score) || score > 180 || score < 0) {
        alert("No valid input at field, must be integer.");
        return;
    }
    $("#targetInfo").text(TARGET + targetLists[currentTargetPosition]);
    if (legalAt(score, targetLists[lastTargetPosition()]) && score !== 0) {
        currentScore += score;
        console.log("Current socre: " + currentScore);
    } else {
        currentScore /= 2;
        currentScore = Math.floor(currentScore);
        alert("Score halved!");
    }
    incrementTargetPosition();

    $("#currentPlayerScore").text(SCORE + currentScore);
    endGameCondition();
    clearText();
}

/**
 * Checks if the game is finished. In case it is, a new game will be started automatically.
 */
function endGameCondition() {
    if (lastTargetPosition() === 0) {
        alert("Finished Game! Score: " + currentScore);
        currentScore = 40;

    }
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
