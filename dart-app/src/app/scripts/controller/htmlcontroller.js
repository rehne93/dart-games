/** This file is the controller and interface for the htmlview */


// The player currently shooting. Calculated by modulo operation
let currentPlayer = 0;
// Dart shots by the current player. Should never exceed 3.
let dartShots = 0;
// Old score in case of bust
let oldScore = 0;

/**
 * This method implements the shot click button.
 * @return {boolean} true if the shot was successful (= finished or legal), false otherwise.
 */
function onShotClick() {

    let score = getElementInsideContainer("shot_container", "usr").value;
    let scoreInt = parseInt(score);
    let shotState = shot(scoreInt, currentPlayer);


    // Illegal scores like 59 or something will be caught here
    if (shotState === SHOT_STATE.illegal) {
        showAlert("Bitte Eingabe prüfen, Wurf nicht möglich");
        return SHOT_VALIDITY.invalid;
    }
    resetContent(getElementInsideContainer("shot_container", "usr"));
    dartShots++;

    // Check if some player will be set to zero
    let scoresLeft = currentGame.getListOfPlayers();
    for (let i = 0; i < scoresLeft.length; i++) {
        let scoreLeftOfPlayer = scoresLeft[i].getScoreShot();
        console.log("Player " + i + " has score " + scoreLeftOfPlayer);
        let stringScore = scoreLeftOfPlayer.toLocaleString();
        writeIntoTable(stringScore, i);
    }
    if (shotState === SHOT_STATE.bust || dartShots === 3) {
        if (shotState === SHOT_STATE.bust) {
            let player = currentGame.getListOfPlayers()[currentPlayer];
            player.setScore(oldScore);
            writeIntoTable(player.getScoreShot().toLocaleString(), currentPlayer);
        }
        currentPlayer = (currentPlayer + 1) % (currentGame.getNumberOfPlayers());
        dartShots = 0;
        oldScore = getScoreForPlayer(currentPlayer);
    }
    setCurrentPlayer(currentPlayer + 1);
    return SHOT_VALIDITY.valid;
}


/**
 * Sets the score into the table
 * @param {string} scoreOfPlayer the score of the player for one shot
 * @param {number} currentPlayer the player currently playing
 */
function writeIntoTable(scoreOfPlayer, currentPlayer) {

    let id = "player" + (currentPlayer + 1).toLocaleString();
    console.log("Current id is: " + id + ", score is: " + scoreOfPlayer);
    //depending on current player we need the right id
    let cell = document.getElementById(id);
    cell.value = scoreOfPlayer;
    cell.innerText = scoreOfPlayer;
}

/**
 * Returns the element of a container if it exists
 * @param {string} containerID the id of the container (probably div)
 * @param {string} childID the id of the child that should be inside the container
 * @return {any} the object if it exists, undefined otherwise
 */
function getElementInsideContainer(containerID, childID) {
    let elm = document.getElementById(childID);
    let parent = elm ? elm.parentNode : {};
    return (parent.id && parent.id === containerID) ? elm : {};
}

function greyOutColumns(numOfPlayers) {
    let colIndex = $("scoreTable").index();
    $("td, th").filter(":nth-child(" + (colIndex + 1) + ")").css("background-color", "red")​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​;
}