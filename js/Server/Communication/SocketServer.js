const EventosHelper = require('../../Shared/Helpers/EventosHelper');
const GameController = require('../Controller/GameController');

class SocketServer{
    constructor(io){
        this.io = io;
        this.sockets = [];

        this.controller = new GameController();
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
        this.registerNewPlayerHasEntered(socket);
    }

    registerDisconnection(socket){
        let self = this;
        socket.on(EventosHelper.instance.eventosSocketIo.disconnect, function() {
            self.sockets.splice(self.sockets.indexOf(socket), 1);
            console.log(`[SERVER] A player has disconnected.`);
        });
    }

    registerNewPlayerHasEntered(socket){
        var self = this;
        socket.on(EventosHelper.instance.eventosClient.novoJogadorEntrou, function() {
            let player = self.controller.addNewPlayer();
            socket.emit(EventosHelper.instance.eventosServer.novoJogadorCriado, player);

            console.log(`[SERVER] New player has entered with id ${player.getId()}.`);
        });
    }
}

module.exports = SocketServer;