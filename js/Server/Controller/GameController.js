const Game = require('../Models/Game');
const Player = require('../Models/Player');
const Domino = require('../Models/Domino');

class GameController{
    constructor(){
        this.firstId = 1;
        this.games = [];
        this.games.push(new Game());
    }

    addNewPlayer(){
        //TODO: Vai sair quando o jogador for vinculado a partida via login e tiver as salas de jogo
        let lastGame = this.games[this.games.length - 1];
        if(lastGame.isFull()){
            lastGame = new Game();
            this.games.push(lastGame);
        }

        this.firstId++;
        let player = new Player(this.firstId, "New player ".concat(this.firstId));
        lastGame.addPlayer(player);

        return player;
    }

    play(value1, value2){
        return new Domino(value1, value2); //TODO: Find player and remove domino
    }
}

module.exports = GameController;