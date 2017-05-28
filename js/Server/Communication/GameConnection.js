/**
 * Represents the connection between all sockets connected to the same game.
 */
class GameConnection{
    constructor(socket){
        this.sockets = [];
        this.addSocket(socket);
    }

    addSocket(socket){
        if(socket)
            this.sockets.push(socket);
    }

    removeSocket(socket){
        if(socket)
            return this.sockets.splice(this.sockets.indexOf(socket), 1);

        return null;
    }

    emit(event, data) {
        this.sockets.map(s => s.emit(event, data));
    }

    emitFor(playerId, event, data) {
        this.sockets.map(s => {
            if(s.request.session.user && s.request.session.user.id === playerId)
                s.emit(event, data)
        });
    }

    emitExcept(playerId, event, data) {
        this.sockets.map(s => {
            if(s.request.session.user && s.request.session.user.id != playerId)
                s.emit(event, data)
        });
    }
}

module.exports = GameConnection;