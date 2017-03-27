var serverSide = false;
if (typeof module === "object" && module && typeof module.exports === "object") {
	serverSide = true;
}

var stringHelper;
if (serverSide){
	stringHelper = require("./StringHelper");
} else {
	stringHelper = StringHelper;
}

var AssetsHelper = (function () {	
	var _caminhoBase = "assets";
	var _extensaoImagens = ".png";
	var _caminhoPedras = "pedras";
	var _caminhoMesa = "mesa";
	
	var BuscarImagem = function(pastas) {
		pastas.unshift(_caminhoBase);
		var path = stringHelper.MontarCaminho(pastas);
		return stringHelper.ApendarExtensao(path, _extensaoImagens);
	}
	
	var _assetsHelper = {
		BuscarImagemPedra: function(nomePedra) { 
			return BuscarImagem([_caminhoPedras, nomePedra])
		},		
		BuscarImagemMesa: function() { 
			return BuscarImagem([_caminhoMesa])
		}
	}
	
	if (serverSide) {
		exports.BuscarImagemPedra = _assetsHelper.BuscarImagemPedra;;
		exports.BuscarImagemMesa = _assetsHelper.BuscarImagemMesa;
	} else {
		return _assetsHelper;
	}	
})();