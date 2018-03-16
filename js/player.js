/**
 * This class implements a player of whom four can participate
 * in a round of elimination.
 */
class Player {

    constructor(game, name) {
        if (game === undefined) {
            throw new Error("Player recieved illegal game argument");
        } else if (game instanceof Game === false) {
            throw new Error("Player recieved illegal game argument");
        }
        this.game = game;
        this.name = !isString(name) ? "" : name;
        this.scoreLeft = 0;

    }

    getName() {
        return this.name;
    }

    getScoreLeft() {
        return this.scoreLeft;
    }

    addScore(score) {
        this.scoreLeft += score;
    }

    resetScore(){
        this.scoreLeft = 0;
    }

    /* Instance of the Game class */
    getGame() {
        return this.game;
    }
}