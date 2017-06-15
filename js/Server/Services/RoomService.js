const GameConnectionPool = require('../Communication/GameConnectionPool');
const Game = require('../Models/Game');
const GameState = require('../Models/GameState');
const Player = require('../Models/Player');

class RoomService {
    
    static post(user, data, db){
        return new Promise((resolve, reject) => {
            try{
                let missingFields = [];

                if(!data.name)
                    missingFields.push("nome da sala");
                if(!data.playersAmount)
                    missingFields.push("quantidade de jogadores");
                if(!data.dominoesByPlayer)
                    missingFields.push("dominós por jogador");

                if(missingFields.length)
                    reject("Os campos " + missingFields.join(", ") + " estão incorretos.");


                let nextId = 1;
                let ids = db.games.map(g => g.getId());
                if(ids.length > 0)
                    nextId = Math.max.apply(Math, ids) + 1;

                let game = new Game(nextId, data.name, data.playersAmount, data.dominoesByPlayer);
                game.addPlayer(new Player(user));
                db.games.push(game);

                resolve(game.getPublicInterface(user.id));
            }catch(err){
                reject(err.message);
            }
        });
    }
    
    static avaliable(userId, db) {
        return new Promise((resolve, reject) => {
            try{
                let games = db.games
                    .filter(g => !g.isFull())
                    .map(g => g.getPublicInterface(userId));
                    
                resolve(games);
            }catch(err){
                reject(err.message);
            }
        });
    }
    
    static playerEntered(gameId, user, db) {
        return new Promise((resolve, reject) => {
            try{
                let game = RoomService.findGame(gameId, db);
                let player = game.findPlayerById(user.id);
                if(!player){
                    player = new Player(user);
                    game.addPlayer(player);
                }

                if(game.isFull())
                    game.start();

                let boneyardData = game.getBoneyard().getPublicInterface();
                let playerData = player.getPublicInterface();
                let gameData = game.getPublicInterface(user.id);

                GameConnectionPool.notifyBoneyardChanged(gameId, { boneyard : boneyardData });
                GameConnectionPool.notifyPlayerEntered(gameId, player.getId(), { id: player.getId(), name : player.getName(), dominoes: player.getDominoes().length});

                let turns = [];
                game.getPlayers().forEach((p) => {
                    turns.push({
                        playerId: p.getId(),
                        name: p.getName(),
                        dominoes: p.getDominoes().length,
                        turn: game.isTurn(p.getId())
                    });                
                });

                if(game.state === GameState.STARTED) {
                    
                    GameConnectionPool.notifyGameStarted(gameId, player.getId(), {turns: turns});
                }

                resolve({
                    player : playerData, 
                    boneyard : boneyardData, 
                    game : gameData,
                    turns: turns
                });
            } catch(err) {
                reject(err.message);
            }
        });
    }

    static buyPiece(gameId, user, db){
        return new Promise((resolve, reject) => {
            try{
                let game = RoomService.findGame(gameId, db);
                let domino = game.boneyard.take(1)[0];

                let player = game.findPlayerById(user.id);
                player.addDomino(domino);

                let boneyardData = game.getBoneyard().getPublicInterface();
                GameConnectionPool.notifyBoneyardChanged(game.getId(), { boneyard : boneyardData });

                resolve(domino);
            }catch(err){
                reject(err.message)
            }
        });
    }

    static play(data, userId, db){
        return new Promise((resolve, reject) => {
            try{
                let value1 = data.value1;
                let value2 = data.value2;
                let gameId = data.gameId;
                let moveType = data.moveType;
                let game = RoomService.findGame(gameId, db);
                let player = RoomService.findPlayer(gameId, userId, db);

                if(!game.isTurn(player.getId()))
                    reject(`It's not your turn!`);

                if(!player.hasDomino(value1, value2))
                    reject(`The player doesn't have the domino with value ${value1}|${value2}.`);

                let domino = player.removeDomino(value1, value2);
                game.playDomino(domino, data.moveType);
                game.passTurnToNextPlayer();

                let turns = [];
                game.getPlayers().forEach((p) => {
                    turns.push({
                        playerId: p.getId(),
                        name: p.getName(),
                        dominoes: p.getDominoes().length,
                        turn: game.isTurn(p.getId())
                    });                
                });

                resolve({domino: domino, moveType: moveType, turns : turns});
            } catch(err) {
                reject(err.message);
            }
        });
    }

    static findGame(gameId, db){
        let game = db.games.find(g => g.getId() == gameId);
        if(!game)
            throw new Error(`Game with id ${gameId} not found.`);

        return game;
    }

    static findPlayer(gameId, userId, db){
        let game = RoomService.findGame(gameId, db);

        let player = game.findPlayerById(userId);
        if(!player)
            throw new Error(`Player with id ${userId} not found.`);

        return player;
    }

    static pass(data, userId, db){
                return new Promise((resolve, reject) => {
            try{
                let gameId = data.gameId;
                let game = RoomService.findGame(gameId, db);
                let player = RoomService.findPlayer(gameId, userId, db);
                let playerData = player.getPublicInterface();

                if(!game.isTurn(player.getId()))
                    reject(`It's not your turn!`);

                game.passTurnToNextPlayer();

                let turns = [];
                game.getPlayers().forEach((p) => {
                    turns.push({
                        playerId: p.getId(),
                        name: p.getName(),
                        dominoes: p.getDominoes().length,
                        turn: game.isTurn(p.getId())
                    });                
                });

                resolve({turns : turns, player : playerData});
            } catch(err) {
                reject(err.message);
            }
        });
    }

}

module.exports = RoomService;