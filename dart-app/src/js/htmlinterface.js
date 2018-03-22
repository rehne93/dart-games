
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
    // TODO give the input field a better id name, maybe change shot_container too
    var scoreInt = parseInt(score);
    // Here we need to find a way to find out which player is playing currently
    var allowedToShot = shot(scoreInt, currentPlayer);
    dartShots++;
    // TODO Set the values of the table using the same way we get elements at score


    var scoresLeft = currentGame.getListOfPlayers();
    for(var i = 0; i < scoresLeft.length; i++){
        var scoreLeftOfPlayer = scoresLeft[i].getScoreShot();
        console.log("Player " + i + " has score " + scoreLeftOfPlayer);
        // TODO add this result to the table of player i
        var stringScore = scoreLeftOfPlayer.toLocaleString();
        writeIntoTable(stringScore);
    }
    if (!allowedToShot || dartShots === 3) {
        // TODO Probably we need some fixing here
        currentPlayer = (currentPlayer + 1) % (currentGame.getNumberOfPlayers());
        dartShots = 0;
    }


}


function writeIntoTable(scoreOfPlayer){
    console.log(scoreOfPlayer);
    var id = "";
    if(currentPlayer === 0){
        id = "player1";
    }else{
        id = "player2";
    }
    //depending on current player we need the right id
    document.getElementById(id).innerText = scoreOfPlayer;
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