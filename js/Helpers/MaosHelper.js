var serverSide = false;
if (typeof module === "object" && module && typeof module.exports === "object") {
	serverSide = true;
}

var MaosHelper = (function() {
	var _maosHelper = {
		posicaoPedraInicial: {
			x: 100,
			y: 100			
		}		
	}
	
	if (serverSide) {
		exports.posicaoPedraInicial = _maosHelper.posicaoPedraInicial;
	} else {
		return _maosHelper;
	}
})();