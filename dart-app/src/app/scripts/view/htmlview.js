/**
 * Method to add to buttons. Calls the button if enter is pressed.
 * @param buttonId the id of the button html element
 */
function pressButton(buttonId) {
    if (event.keyCode === 13) {
        document.getElementById(buttonId).click();
    }
}

/**
 * Shows an alert.
 * @param {string} message content of the alert
 */
function showAlert(message) {
    alert(message);
}

/**
 * Adds a text of the current player to the label 'currentPlayer'
 * @param playerNumber the number of the player (1..4).
 */
function setCurrentPlayer(playerNumber) {
    document.getElementById("currentPlayer").innerText = "Am Zug: Spieler " + playerNumber;
}

/**
 * Gets an HTML Element and sets the value to empty string
 * @param element an element, not an ID
 */
function resetContent(element) {
    element.value = "";
}

// TODO We need a method to toggle the new game button, should be invisible by default