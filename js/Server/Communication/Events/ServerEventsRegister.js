const EventosHelper = require('../../../Shared/Helpers/EventosHelper');

/**
 * Handle registration of server events for each new socket connection.
 */
class ServerEventsRegister{
    static register(gameConnectionPool){
        gameConnectionPool.notifyBoneyardChanged = function(gameId, data){
            let result = {success : true, data : data};
            this.resolveFor(gameId)
                .emit(EventosHelper.instance.eventosServer.areaDeCompraAlterada, result);
        }

        gameConnectionPool.notifyPlayerEntered = function(gameId, playerId, data){
            let result = {success : true, data : data};
            this.resolveFor(gameId)
                .emitExcept(playerId, EventosHelper.instance.eventosServer.entradaDeJogador, result);
        }

        gameConnectionPool.notifyPlayerLeave = function(gameId, playerId, data){
            let result = {success : true, data : data};
            this.resolveFor(gameId)
                .emitExcept(playerId, EventosHelper.instance.eventosServer.saidaDeJogador, result);
        }

        gameConnectionPool.notifyGameStarted = function(gameId, playerId, data) {
            let result = {success: true, data: data }
            this.resolveFor(gameId)
                .emitExcept(playerId, EventosHelper.instance.eventosServer.jogoIniciado, result);
        }

        gameConnectionPool.notifyTurnForPlayer = function(playerId, gameId, data){
            let result = {success : true, data : data};
            this.resolveFor(gameId)
                .emitFor(playerId, EventosHelper.instance.eventosServer.vez, result);
        }
    }
}

module.exports = ServerEventsRegister;