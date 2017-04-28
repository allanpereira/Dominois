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

<<<<<<< HEAD
        socket.on(EventosHelper.instance.eventosClient.pedirPedra, function(data) {
            let user = socket.request.session.user;
            RoomService.buyPiece(data.gameId, user, DB)
            .then((data) => {
                socket.emit(EventosHelper.instance.eventosServer.enviaPedra, { success : true, domino : data });
                console.log(`[SERVER] A player has bought a piece.`);
            })
            .catch((err) => {
                console.log(err);
                socket.emit(EventosHelper.instance.eventosServer.enviaPedra, { success : false, error : err});
            });
        });

        socket.on(EventosHelper.instance.eventosClient.jogadaRealizada, function(data) {
            let userId = socket.request.session.user.id;
            RoomService.play(data, userId, DB)
            .then((data) => {
				console.log(`[SERVER] The domino ${data.domino.value1} | ${data.domino.value2} has been placed on board.`);
                socket.emit(EventosHelper.instance.eventosServer.jogadaRealizadaComSucesso, { success : true, domino : data.domino, moveType: data.moveType });
            })
            .catch((err) => {
				console.log(err);
                socket.emit(EventosHelper.instance.eventosServer.jogadaRealizadaComSucesso, { success : false, error : err});
            });
=======
            console.log(`New client connection received, adding to pool...`);
            GameConnectionPool.addConnectionFor(gameId, socket);
>>>>>>> b25419201b9a95882bb80c794ab548f680a95924
        });

    }

}

module.exports = SocketServer;