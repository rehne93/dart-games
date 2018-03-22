
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

    // Here we need to find a way to find out which player is playing currently
    // TODO check if this viable
    var allowedToShot = shot(score, currentPlayer);
    dartShots++;
    // TODO Set the values of the table using the same way we get elements at score

    if (!allowedToShot || dartShots === 3) {
        currentPlayer = (currentPlayer + 1) % (currentGame.getNumberOfPlayers());
        dartShots = 0;
    }


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