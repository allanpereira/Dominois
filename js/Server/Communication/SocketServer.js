const GameConnectionPool = require('./GameConnectionPool');
const EventosHelper = require('../../Shared/Helpers/EventosHelper');

/**
 * Receive all connection requests made to Socket.io.
 */
class SocketServer{
    constructor(io){
        this.io = io;
    }

    init(){
        let self = this;

        self.io.on(EventosHelper.instance.eventosSocketIo.connection, function(socket) {
            let gameId = parseInt(socket.request._query["gameId"]);

            console.log(`New client connection received, adding to pool...`);
            GameConnectionPool.addConnectionFor(gameId, socket);
        });
    }
}

module.exports = SocketServer;