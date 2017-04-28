var serverSide = (typeof module === "object" && module && typeof module.exports === "object");

var EventosHelper = (function() {	
    var _eventosServer = {
        atualizarMesa: "atualizarMesa",
        entradaRegistrada : "entradaRegistrada",
        pedraJogada: "pedraJogada",
        jogadaRealizadaComSucesso : "jogadaRealizadaComSucesso",
<<<<<<< HEAD
        enviaPedra : "enviaPedra"
    }
    
    var _eventosClient = {
        pedirMesa: "pedirMesa",
        jogadorEntrou: "jogadorEntrou",
        jogadaRealizada: "jogadaRealizada",
        pedirPedra: "pedirPedra"
=======
        areaDeCompraAlterada : "boneyardChanged"
    }
    
    var _eventosClient = {
        registrarEntrada : "registrarEntrada",
        jogadaRealizada: "jogadaRealizada",
>>>>>>> b25419201b9a95882bb80c794ab548f680a95924
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