const GameConnectionPool = require('../Communication/GameConnectionPool');
const Game = require('../Models/Game');
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

                resolve(game.getPublicInterface());
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
                    .map(g => g.getPublicInterface());
                    
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

                let boneyard = game.getBoneyard().getPublicInterface();
                let playerData = player.getPublicInterface();
                
                GameConnectionPool.notifyBoneyardChanged(gameId, { boneyard : boneyard });
                GameConnectionPool.notifyPlayerEntered(gameId, player.getId(), { player : playerData });

                resolve({
                    player : player, 
                    boneyard : boneyard, 
                    game : game
                });
            }catch(err){
                reject(err.message);
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
				
                let player = RoomService.findPlayer(gameId, userId, db);
				
                if(!player.hasDomino(value1, value2))
                    reject(`The player doesn't have the domino with value ${value1}|${value2}.`);

                let domino = player.removeDomino(value1, value2);
				let game = RoomService.findGame(gameId, db);
				game.playDomino(domino, data.moveType);

                resolve({domino: domino, moveType: moveType});
            }catch(err){
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
}

module.exports = RoomService;