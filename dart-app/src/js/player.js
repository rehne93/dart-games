/**
 * This class implements a player of whom four can participate
 * in a round of elimination.
 */
class Player {

    constructor(game, name) {
        if (!game) {
            throw new Error("Player received illegal game instance");
        } else if (game instanceof Game === false) {
            throw new Error("Player received illegal game instance");
        }
        this.game = game;
        this.name = !isString(name) ? "" : name;
        this.scoreShot = 0;

    }

    getName() {
        return this.name;
    }

    /** How many points the player already shot, between 0 and 301*/
    getScoreShot() {
        return this.scoreShot;
    }
    /** Adds one shot to the score the player already has */
    addScore(score) {
        this.scoreShot += score;
    }
    /** Resets the score shot to zero */
    resetScore(){
        this.scoreShot = 0;
    }

    /* Instance of the Game class */
    getGame() {
        return this.game;
    }
}