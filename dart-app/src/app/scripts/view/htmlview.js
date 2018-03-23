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
function showAlert(message){
    alert(message);
}

// TODO We need a method to toggle the new game button, should be invisible by default