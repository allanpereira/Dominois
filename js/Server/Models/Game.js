const DominoFactory = require("../Factories/DominoFactory");
const Boneyard = require("./Boneyard");
const BoardSequencies = require('./BoardSequencies');
const GameState = require("./GameState");
const MoveType = require('../../Shared/MoveType');

class Game{
    constructor(id, name, playersAmount, dominoesByPlayer, state, players, boneyard){
        this.id = id;
        this.name = name || "Default Game";
        this.playersAmount = parseInt(playersAmount) || 4;
        this.dominoesByPlayer = parseInt(dominoesByPlayer) || 7;
        this.state = state || GameState.WAITING_PLAYERS;
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

    getState(){
        return this.state;
    }

    /**
    * Returns the object exposed to clients in browser.
    */
    getPublicInterface(playerId){
        return {
            id : this.id,
            name : this.name,
            state : this.state,
            playersCount : this.players.length,
            playersAmount : this.playersAmount,
            turn : this.playerIdInTurn === playerId
        };
    }

    isTurn(playerId){
        return this.playerIdInTurn === playerId;
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

    start(){
        if(!this.isFull())
            throw new Error(`${this.playersAmount} players are required to start the game.`);
        
        this.state = GameState.STARTED;
    }

    addPlayer(player){
        if(this.isFull())
            throw new Error(`The game has reached the maximum players amount(${this.playersAmount}).`);

        if(this.players.length === 0)
            this.playerIdInTurn = player.getId();

        let dominoes = this.boneyard.take(this.dominoesByPlayer);

        player.setDominoes(dominoes);
        this.players.push(player);
    }
    
    playDomino(domino, moveType) {
        console.log(`A domino was played with moveType = ${moveType}`);
        if (moveType == MoveType.instance.FirstDomino) {
            this.boardSequencies = new BoardSequencies(domino);
        }
        
        if (moveType == MoveType.instance.LeftSide) {
            this.boardSequencies.PlayInSequence1(domino);
        }
        
        if (moveType == MoveType.instance.RightSide) {
            this.boardSequencies.PlayInSequence2(domino);
        }
    }

    passTurnToNextPlayer(){
        //TODO: Ver se o próximo jogador tem condições de jogar
        //TODO: Verificar vitória

        var i = 0;
        for(; i < this.players.length; i++){
            if(this.players[i].id === this.playerIdInTurn)
                break;
        }
        
        i++;
        if(i >= this.players.length)
            i = 0;

        this.playerIdInTurn = this.players[i].id;
    }
}

module.exports = Game;