const DB = require('../../Database/DB');
const RoomService = require('../../Services/RoomService');
const EventosHelper = require('../../../Shared/Helpers/EventosHelper');

/**
 * Handle registration of client events for each new socket connection.
 */
class ClientEventsRegister{
    static register(gameId, socket, disconnectionCallback){
        ClientEventsRegister.registerDisconnection(gameId, socket, disconnectionCallback);
        ClientEventsRegister.registerPlayerHasEntered(gameId, socket);
    }

    static registerDisconnection(gameId, socket, disconnectionCallback){
        socket.on(EventosHelper.instance.eventosSocketIo.disconnect, function() {
            disconnectionCallback(gameId, socket);
            console.log(`A player has disconnected.`);
        });
    }

    static registerPlayerHasEntered(gameId, socket){
        socket.on(EventosHelper.instance.eventosClient.registrarEntrada, function() {
            let user = socket.request.session.user;

            RoomService.playerEntered(gameId, user, DB)
            .then((data) => {
                console.log(`Player ${data.player.getId()} has entered in game ${gameId}.`);
                socket.emit(EventosHelper.instance.eventosServer.entradaRegistrada, { success : true, data : data});
            })
            .catch((err) => {
                console.log(err);
                socket.emit(EventosHelper.instance.eventosServer.entradaRegistrada, { success : false, error : err});
            });
        });

        socket.on(EventosHelper.instance.eventosClient.jogadaRealizada, function(req) {
            let userId = socket.request.session.user.id;
            RoomService.play(req, userId, DB)
            .then((data) => {
                console.log(`The domino ${data.domino.value1} | ${data.domino.value2} has been placed on board.`);
                socket.emit(EventosHelper.instance.eventosServer.jogadaRealizadaComSucesso, { success : true, data : data});
            })
            .catch((err) => {
                console.log(err);
                socket.emit(EventosHelper.instance.eventosServer.jogadaRealizadaComSucesso, { success : false, error : err});
            });
        });
    }
}

module.exports = ClientEventsRegister;