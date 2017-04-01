var serverSide = false;
if (typeof module === "object" && module && typeof module.exports === "object") {
	serverSide = true;
}

var EventosHelper = (function() {	
	var _eventosServer = {
		atualizarMesa: "atualizarMesa",
		novoJogadorCriado: "novoJogadorCriado",
		pedraJogada: "pedraJogada"
	}
	
	var _eventosClient = {
		pedirMesa: "pedirMesa",
		novoJogadorEntrou: "novoJogadorEntrou",
		jogadorClicouPedra: "jogadorJogouPedra"
	}
	
	var _eventosSocketIo = {
		connection: "connection"
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
