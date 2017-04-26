const DominoFactory = require("../Factories/DominoFactory");
const Boneyard = require("./Boneyard");
const BoardSequencies = require('./BoardSequencies');
const MoveType = require('../../Shared/MoveType');

class Game{
    constructor(id, name, playersAmount, dominoesByPlayer, players, boneyard){
        this.id = id;
        this.name = name || "Default Game";
        this.playersAmount = playersAmount || 4;
        this.dominoesByPlayer = dominoesByPlayer || 7;
        this.players = players || [];
        this.boneyard = boneyard || new Boneyard(DominoFactory.create());
		this.boardSequencies = null;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getPlayers(){
        return this.players;
    }

    getBoneyard(){
        return this.boneyard;
    }

    /**
    * Returns the object exposed to clients in browser.
    */
    getPublicInterface(){
        return {
            id : this.id,
            name : this.name
        };
    }

    findPlayerById(userId){
        return this.players.find(p => p.getId() == userId);
    }

    isFull(){
        return this.players.length === this.playersAmount;
    }

    hasPlayer(userId){
        return this.players.filter(p => p.getId() === userId).length > 0;
    }

    canStart(){
        return this.players.length == this.playersAmount;
    }

    start(){
        if(!this.canStart())
            throw new Error(`${this.playersAmount} players are required to start the game.`);
    }

    addPlayer(player){
        if(this.isFull())
            throw new Error(`The game has reached the maximum players amount(${this.playersAmount}).`);

        let dominoes = this.boneyard.take(this.dominoesByPlayer);

        player.setDominoes(dominoes);
        this.players.push(player);
    }
	
	playDomino(domino, moveType) {
		console.log(`A domino was played with moveType = ${moveType}`);
		if (moveType == MoveType.instance.FirstDomino) {
			this.boardSequencies = new BoardSequencies(domino);
		}
		
		if (moveType == MoveType.instance.RightSide) {
			this.boardSequencies.PlayInSequency1(domino);
		}
		
		if (moveType == MoveType.instance.LeftSide) {
			this.boardSequencies.PlayInSequency2(domino);
		}
		
	}
}

module.exports = Game;