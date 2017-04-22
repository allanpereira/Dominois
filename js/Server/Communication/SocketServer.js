const EventosHelper = require('../../Shared/Helpers/EventosHelper');
const RoomService = require('../Services/RoomService');
const DB = require('../Database/DB');

class SocketServer{
    constructor(io){
        this.io = io;
        this.sockets = [];
    }

    init(){
        let self = this;

        self.io.on(EventosHelper.instance.eventosSocketIo.connection, function(socket) {
            console.log(`[SERVER] New client connection received, registering events.`);
            
            self.sockets.push(socket);
            self.registerEvents(socket);
        });
    }

    registerEvents(socket){
        this.registerDisconnection(socket);
        this.registerPlayerHasEntered(socket);
    }

    registerDisconnection(socket){
        let self = this;
        socket.on(EventosHelper.instance.eventosSocketIo.disconnect, function() {
            self.sockets.splice(self.sockets.indexOf(socket), 1);
            console.log(`[SERVER] A player has disconnected.`);
        });
    }

    registerPlayerHasEntered(socket){
        socket.on(EventosHelper.instance.eventosClient.jogadorEntrou, function(data) {
            let user = socket.request.session.user;
            RoomService.playerEntered(data.gameId, user, DB)
            .then((player) => {
                socket.emit(EventosHelper.instance.eventosServer.jogadorEntrou, { success : true, player : player});
                console.log(`[SERVER] Player ${player.getId()} has entered in game ${data.gameId}.`);
            })
            .catch((err) => {
                socket.emit(EventosHelper.instance.eventosServer.jogadorEntrou, { success : false, error : err});
            });
        });

        socket.on(EventosHelper.instance.eventosClient.jogadaRealizada, function(data) {
            let userId = socket.request.session.user.id;
            RoomService.play(data, userId, DB)
            .then((domino) => {
                socket.emit(EventosHelper.instance.eventosServer.jogadaRealizadaComSucesso, { success : true, domino : domino});
                console.log(`[SERVER] The domino ${domino.value1} | ${domino.value2} has been placed on board.`);
            })
            .catch((err) => {
                socket.emit(EventosHelper.instance.eventosServer.jogadaRealizadaComSucesso, { success : false, error : err});
            });
        });
    }
}

module.exports = SocketServer;