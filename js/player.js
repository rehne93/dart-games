/**
 * This class implements a player of whom four can participate
 * in a round of elimination.
 */
class Player {

    constructor(game, name) {
        if (game == undefined) {
            console.error("Invalid game instance passed to player. Cannot instantiate player correctly. Exit");
            return;
        }
        this.game = game;

        if (!isString(name)) {
            this.name = "";
        }else{
            this.name = name;
        }

        this.scoreLeft = 0;

    }

    getName() {
        return this.name;
    }

    getScoreLeft() {
        return this.scoreLeft;
    }
    // TODO Make sure that it REALLY is an instance of the game class
    /* Instance of the Game class */
    getGame() {
        return this.game;
    }
}