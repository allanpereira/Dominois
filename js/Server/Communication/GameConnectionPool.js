const GameConnection = require('./GameConnection');
const EventosHelper = require('../../Shared/Helpers/EventosHelper');
/**
 * Mantain all active connections acessible for all application.
 */
var GameConnectionPool = (function(){
    const connections = {};

    const hasConnectionFor = (gameId) => (gameId in connections);
    const resolveFor = (gameId) => connections[gameId];

    const removeSocketFor = function(gameId, socket){
        resolveFor(gameId).removeSocket(socket);
    }

    const createFor = function(gameId, socket){
        connections[gameId] = new GameConnection(socket);
    }
    
    const addSocketFor = function(gameId, socket){
        resolveFor(gameId).addSocket(socket);
    }

    const notifyBoneyardChangedFor = function(gameId, data){
        let result = {success : true, data : data};
        resolveFor(gameId).emit(EventosHelper.instance.eventosServer.areaDeCompraAlterada, result);
    }

    return {
        hasConnectionFor : hasConnectionFor,
        addSocketFor : addSocketFor,
        removeSocketFor : removeSocketFor,
        createFor : createFor,
        resolveFor: resolveFor,
        notifyBoneyardChangedFor : notifyBoneyardChangedFor
    };
})();

module.exports = GameConnectionPool;

//Definition after module.exports to solve problems caused by circular dependencies.
const EventRegister = require('./EventRegister');
GameConnectionPool.addConnectionFor = function(gameId, socket){
    EventRegister.register(gameId, socket, function(gId, s){
        GameConnectionPool.removeSocketFor(gId, s);
    });

    if(GameConnectionPool.hasConnectionFor(gameId)){
        GameConnectionPool.resolveFor(gameId).addSocket(socket);
    } else {
        GameConnectionPool.createFor(gameId, socket);
    }
};