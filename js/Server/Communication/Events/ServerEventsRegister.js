const EventosHelper = require('../../../Shared/Helpers/EventosHelper');

/**
 * Handle registration of server events for each new socket connection.
 */
class ServerEventsRegister{
    static register(gameConnectionPool){
        ServerEventsRegister.registerNotifyBoneyardChanged(gameConnectionPool);
        ServerEventsRegister.registerNotifyPlayerEntered(gameConnectionPool);
    }

    static registerNotifyBoneyardChanged(gameConnectionPool){
        gameConnectionPool.notifyBoneyardChanged = function(gameId, data){
            let result = {success : true, data : data};
            this.resolveFor(gameId)
                .emit(EventosHelper.instance.eventosServer.areaDeCompraAlterada, result);
        }
    }
    
    static registerNotifyPlayerEntered(gameConnectionPool){
        gameConnectionPool.notifyPlayerEntered = function(gameId, playerId, data){
            let result = {success : true, data : data};
            this.resolveFor(gameId)
                .emitExcept(playerId, EventosHelper.instance.eventosServer.entradaDeJogador, result);
        }
    }
}

module.exports = ServerEventsRegister;