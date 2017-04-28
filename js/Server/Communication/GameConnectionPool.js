const GameConnection = require('./GameConnection');
const EventosHelper = require('../../Shared/Helpers/EventosHelper');
const ServerEventsRegister = require('./Events/ServerEventsRegister');

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

    const notifyPlayerEntered = function(gameId, playerId, data){
        let result = {success : true, data : data};
        resolveFor(gameId).emitExcept(playerId, EventosHelper.instance.eventosServer.entradaDeJogador, result);
    }

    const notifyBoneyardChanged = function(gameId, data){
        let result = {success : true, data : data};
        resolveFor(gameId).emit(EventosHelper.instance.eventosServer.areaDeCompraAlterada, result);
    }

    var pool = {
        hasConnectionFor : hasConnectionFor,
        addSocketFor : addSocketFor,
        removeSocketFor : removeSocketFor,
        createFor : createFor,
        resolveFor: resolveFor
    };

    ServerEventsRegister.register(pool);

    return pool;
})();

module.exports = GameConnectionPool;

//Definition after module.exports to solve problems caused by circular dependencies.
const ClientEventsRegister = require('./Events/ClientEventsRegister');
GameConnectionPool.addConnectionFor = function(gameId, socket){
    ClientEventsRegister.register(gameId, socket, function(gId, s){
        GameConnectionPool.removeSocketFor(gId, s);
    });

    if(GameConnectionPool.hasConnectionFor(gameId)){
        GameConnectionPool.resolveFor(gameId).addSocket(socket);
    } else {
        GameConnectionPool.createFor(gameId, socket);
    }
};