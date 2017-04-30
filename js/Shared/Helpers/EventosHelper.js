var serverSide = (typeof module === "object" && module && typeof module.exports === "object");

var EventosHelper = (function() {	
    var _eventosServer = {
        atualizarMesa: "atualizarMesa",
        entradaRegistrada : "entradaRegistrada",
        pedraJogada: "pedraJogada",
        jogadaRealizadaComSucesso : "jogadaRealizadaComSucesso",
        areaDeCompraAlterada : "boneyardChanged",
        entradaDeJogador : "entradaDeJogador",
        saidaDeJogador : "saidaDeJogador",
        jogoIniciado : "jogoIniciado",
        enviaPedra : "enviaPedra"
    }
        
    var _eventosClient = {
        registrarEntrada : "registrarEntrada",
        jogadaRealizada: "jogadaRealizada",
        pedirPedra: "pedirPedra",
        areaDeCompraAlterada : "boneyardChanged"
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