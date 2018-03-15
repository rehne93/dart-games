/**
 * This class implements a game of X01 elimination.
 * The target score is set to 301 by default if nothing else is given.
 *
 * TODO Make a static fabric method to create game
 */
class Game{

    constructor(numberOfPlayers){
        this.targetScore = 301;
        for(var i = 0; i < numberOfPlayers; i++){
            this.listOfPlayers = [numberOfPlayers]
            this.listOfPlayers[i] = new Player(this);
        }
        console.log("Created " + numberOfPlayers + " new players.");
    }

    getListOfPlayers(){return this.listOfPlayers;}
    getTargetScore(){return this.targetScore;}

}