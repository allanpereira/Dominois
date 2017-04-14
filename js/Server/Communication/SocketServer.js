const EventosHelper = require('../../Shared/Helpers/EventosHelper');
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
        this.registerNewPlayerHasEntered(socket);
    }

    registerNewPlayerHasEntered(socket){
        var self = this;
        socket.on(EventosHelper.instance.eventosClient.novoJogadorEntrou, function() {
            let playerId = self.getNextPlayerId();
            socket.emit(EventosHelper.instance.eventosServer.novoJogadorCriado, playerId);

            console.log(`[SERVER] New player has entered with id ${playerId}.`);
        });
    }

    getNextPlayerId(){
        return 1; //TODO: Should be dynamic
    }
}

module.exports = SocketServer;