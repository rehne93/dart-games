
// The player currently shooting. Calculated by modulo operation
var currentPlayer = 0;
// Dart shots by the current player. Should never exceed 3.
var dartShots = 0;
/**
* This method is called for every shot.
*/
function onShotClick() {
    //Gets score in score, e. g. 20 for one dart
    var score = getElementInsideContainer("shot_container", "usr").value;
    var scoreInt = parseInt(score);
    // Here we need to find a way to find out which player is playing currently
    var allowedToShot = shot(scoreInt, currentPlayer);
    dartShots++;


    var scoresLeft = currentGame.getListOfPlayers();
    for(var i = 0; i < scoresLeft.length; i++){
        var scoreLeftOfPlayer = scoresLeft[i].getScoreShot();
        console.log("Player " + i + " has score " + scoreLeftOfPlayer);
        var stringScore = scoreLeftOfPlayer.toLocaleString();
        writeIntoTable(stringScore,i);
    }
    if (!allowedToShot || dartShots === 3) {
        currentPlayer = (currentPlayer + 1) % (currentGame.getNumberOfPlayers());
        dartShots = 0;
    }


}

/**
 * Sets the score into the table
 * @param {string} scoreOfPlayer the score of the player for one shot
 * @param {number} currentPlayer the player currently playing
 */
function writeIntoTable(scoreOfPlayer, currentPlayer){

    var id = "player"+(currentPlayer+1).toLocaleString();
    console.log("Current id is: " + id + ", score is: " + scoreOfPlayer);
    //depending on current player we need the right id
    var cell = document.getElementById(id);
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
    var elm = document.getElementById(childID);
    var parent = elm ? elm.parentNode : {};
    return (parent.id && parent.id === containerID) ? elm : {};
}