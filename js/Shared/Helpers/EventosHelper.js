var serverSide = (typeof module === "object" && module && typeof module.exports === "object");

var EventosHelper = (function() {	
    var _eventosServer = {
        atualizarMesa: "atualizarMesa",
        novoJogadorCriado: "novoJogadorCriado",
        pedraJogada: "pedraJogada",
        jogadaRealizadaComSucesso : "jogadaRealizadaComSucesso"
    }
    
    var _eventosClient = {
        pedirMesa: "pedirMesa",
        novoJogadorEntrou: "novoJogadorEntrou",
        jogadaRealizada: "jogadaRealizada"
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
