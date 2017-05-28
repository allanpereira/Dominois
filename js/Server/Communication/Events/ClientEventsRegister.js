const DB = require('../../Database/DB');
const RoomService = require('../../Services/RoomService');
const EventosHelper = require('../../../Shared/Helpers/EventosHelper');

/**
 * Handle registration of client events for each new socket connection.
 */
class ClientEventsRegister{
    static register(gameId, socket, io, disconnectionCallback, notifyPlayerLeaveCallback){
        ClientEventsRegister.registerDisconnection(gameId, socket, disconnectionCallback, notifyPlayerLeaveCallback);
        ClientEventsRegister.registerPlayerHasEntered(gameId, socket);
        ClientEventsRegister.registerMove(gameId, socket, io);
        ClientEventsRegister.registerTakeFromBoneyard(gameId, socket);
    }

    static registerDisconnection(gameId, socket, disconnectionCallback, notifyPlayerLeaveCallback){
        socket.on(EventosHelper.instance.eventosSocketIo.disconnect, function() {
            disconnectionCallback(gameId, socket);

            //We do not want stop the application if it is not possible to notify a player's exit.
            try {
                let user = socket.request.session.user;
                let player = { name : user.name };
                notifyPlayerLeaveCallback(user.id, {player : player});
            } catch (err) {
                console.log(`Unable to notify disconnection to other players.`);
            }

            console.log(`A player has disconnected.`);
        });
    }

    static registerPlayerHasEntered(gameId, socket){
        socket.on(EventosHelper.instance.eventosClient.registrarEntrada, function() {
            let user = socket.request.session.user;

            RoomService.playerEntered(gameId, user, DB)
            .then((data) => {
                console.log(`Player ${data.player.id} has entered in game ${gameId}.`);
                socket.emit(EventosHelper.instance.eventosServer.entradaRegistrada, { success : true, data : data});
            })
            .catch((err) => {
                console.log(err);
                socket.emit(EventosHelper.instance.eventosServer.entradaRegistrada, { success : false, error : err});
            });
        });
    }

    static registerMove(gameId, socket, io){
        socket.on(EventosHelper.instance.eventosClient.jogadaRealizada, function(req) {
            let userId = socket.request.session.user.id;
            RoomService.play(req, userId, DB)
            .then((data) => {
                console.log(`The domino ${data.domino.value1} | ${data.domino.value2} has been placed on board.`);
                io.emit(EventosHelper.instance.eventosServer.jogadaRealizadaComSucesso, { success : true, data : data});
            })
            .catch((err) => {
                console.log(err);
                socket.emit(EventosHelper.instance.eventosServer.jogadaRealizadaComSucesso, { success : false, error : err});
            });
        });
    }

    static registerTakeFromBoneyard(gameId, socket){
        socket.on(EventosHelper.instance.eventosClient.pedirPedra, function(data) {
            let user = socket.request.session.user;
            RoomService.buyPiece(data.gameId, user, DB)
            .then((data) => {
                socket.emit(EventosHelper.instance.eventosServer.enviaPedra, { success : true, domino : data });
                console.log(`A player has bought a piece.`);
            })
            .catch((err) => {
                console.log(err);
                socket.emit(EventosHelper.instance.eventosServer.enviaPedra, { success : false, error : err});
            });
        });
    }
}

module.exports = ClientEventsRegister;