var serverSide = (typeof module === "object" && module && typeof module.exports === "object");

var EventosHelper = (function() {	
    var _eventosServer = {
        atualizarMesa: "atualizarMesa",
        jogadorEntrou: "jogadorEntrouS",
        pedraJogada: "pedraJogada",
        jogadaRealizadaComSucesso : "jogadaRealizadaComSucesso",
        enviaPedra : "enviaPedra"
    }
    
    var _eventosClient = {
        pedirMesa: "pedirMesa",
        jogadorEntrou: "jogadorEntrou",
        jogadaRealizada: "jogadaRealizada",
        pedirPedra: "pedirPedra"
    }
    
    var _eventosSocketIo = {
        connection: "connection",
        disconnect: "disconnect"
    }
    
    var _eventosHelper = {
        eventosServer: _eventosServer,
        eventosClient: _eventosClient,
        eventosSocketIo: _eventosSocketIo
    }
    
    if (serverSide) {
        exports.instance = _eventosHelper;
    } else {	
        return _eventosHelper;
    }	
})();