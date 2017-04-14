const DominoFactory = require("../Factories/DominoFactory");
const Boneyard = require("./Boneyard");

class Game{
    constructor(playersAmount, dominoesByPlayer){
        this.playersAmount = playersAmount || 4;
        this.dominoesByPlayer = dominoesByPlayer || 7;
        this.players = [];
        this.boneyard = new Boneyard(DominoFactory.create());
    }

    addPlayer(player){
        if(this.isFull())
            throw new Error(`The game has reached the maximum players amount(${this.playersAmount}).`);

        let dominoes = this.boneyard.take(this.dominoesByPlayer);

        player.setDominoes(dominoes);
        this.players.push(player);
    }

    start(){
        if(this.players.length < this.playersAmount)
            throw new Error(`${this.playersAmount} players are required to start the game.`);
    }

    isFull(){
        return this.players.length === this.playersAmount;
    }
}

module.exports = Game;