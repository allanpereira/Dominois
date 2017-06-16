const GameConnectionPool = require('../Communication/GameConnectionPool');
const RoomService = require('../Services/RoomService');

class LogoutService {
    static post(user, db) {
        return new Promise((resolve, reject) => {
            try{
                let player = { name : user.name };
                let response = { player : player };

                RoomService.forEachGameOfPlayer(user.id, function(game){
                    GameConnectionPool.notifyPlayerLeave(game.getId(), user.id, response);
                }, db);
                
                return resolve();
            }catch(err){
                reject(err.message);
            }
        });
    }
}

module.exports = LogoutService;