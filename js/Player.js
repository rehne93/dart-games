/**
 * This class implements a player of whom four can participate
 * in a round of elimination.
 */
class Player {

    constructor(game) {
        this.scoreLeft = 0;
        this.name = "";
        this.game = game;
    }

    getName() {
        return this.name;
    }

    getScoreLeft() {
        return this.scoreLeft;
    }
    /* Instance of the Game class */
    getGame() {
        return this.game;
    }
}