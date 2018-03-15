/**
 * This class implements a game of X01 elimination.
 * The target score is set to 301 by default if nothing else is given.
 *
 *
 */
class Game {
    constructor(numberOfPlayers, targetScore) {
        if (!isInteger(numberOfPlayers)) {
            console.error("Number of players is an illegal value. Cannot construct a valid game instance.");
            return
        }
        this.numberOfPlayers = numberOfPlayers;
        if (targetScore === undefined || !isInteger(targetScore)) {
            this.targetScore = 301;
        } else {
            this.targetScore = targetScore;
        }
        // Initialize Players
        for (var i = 0; i < numberOfPlayers; i++) {
            this.listOfPlayers = [numberOfPlayers]
            this.listOfPlayers[i] = new Player(this);
        }
        console.log("Created " + numberOfPlayers + " new players.");
    }

    getNumberOfPlayers() {
        return this.numberOfPlayers;
    }

    getListOfPlayers() {
        return this.listOfPlayers;
    }

    getTargetScore() {
        return this.targetScore;
    }

}