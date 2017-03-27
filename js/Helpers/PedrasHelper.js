var serverSide = false;
if (typeof module === "object" && module && typeof module.exports === "object") {
	serverSide = true;
}

var PedrasHelper = (function() {	
	var _pedrasHelper = {
		larguraPedra: 125,
		alturaPedra: 68,
		
		GerarNomePedras: function() {
			var pedras = [];
			for (var i = 0; i <= 6; i++) {
				for (var j = i; j <= 6; j++) {
					pedras.push(this.GerarNomePedra(i, j));
				}
			}
			return pedras;
		},

		GerarNomePedra: function(i, j) {
			return String(i).concat(j);
		},
		
		ForEachNomePedras: function(callback) {
			var nomePedras = this.GerarNomePedras();			
			for (var i = 0; i < nomePedras.length; i++) {
				callback(nomePedras[i]);
			}
		}
	}
	
	if (serverSide) {		
		exports.larguraPedra = _pedrasHelper.larguraPedra;
		exports.alturaPedra = _pedrasHelper.alturaPedra;	
		exports.GerarNomePedras = _pedrasHelper.GerarNomePedras;
		exports.GerarNomePedra  = _pedrasHelper.GerarNomePedra;		
		exports.ForEachNomePedras = _pedrasHelper.ForEachNomePedras;		
	} else {
		return _pedrasHelper;
	}	
})();