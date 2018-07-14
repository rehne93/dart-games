var currentScore = 0;
var targetLists = ["15", "16", "Any Double", "17", "18", "Any tripple", "19", "20", "Bull"];
var currentTargetPosition = 0;

// First a try without correcting input errors.
function addScore() {
    // TODO Change score to number instead of string
    let score = document.getElementById("usr").value;
    document.getElementById("targetInfo").innerHTML = targetLists[currentTargetPosition];
    console.log("Target:" + targetLists[currentTargetPosition]);
    currentTargetPosition++;
    currentScore += score;
    document.getElementById("currentPlayerScore").innerHTML = currentScore;
}
