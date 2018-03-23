/**
 * Method to add to buttons. Calls the button if enter is pressed.
 * @param buttonId the id of the button html element
 */
function pressButton(buttonId) {
    if (event.keyCode === 13) {
        document.getElementById(buttonId).click();
    }
}