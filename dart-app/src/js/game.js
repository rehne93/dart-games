/**
 * This class implements a game of X01 elimination.
 * The target score is set to 301 by default if nothing else is given.
 *
 *
 */
class Game {
    constructor(numberOfPlayers, targetScore) {
        if (!isInteger(numberOfPlayers) || !numberOfPlayers) {
            throw new Error("Number of players is not a valid number");
        }
        this.numberOfPlayers = numberOfPlayers;
        this.targetScore = !targetScore || !isInteger(targetScore) ? 301 : targetScore;
        this.listOfPlayers = [numberOfPlayers];

        // Initialize Players
        for (let i = 0; i < numberOfPlayers; i++) {
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

    /** How many points will be needed to win, default 301 */
    getTargetScore() {
        return this.targetScore;
    }




}