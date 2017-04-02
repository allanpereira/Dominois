var Jogador = function() {
	var self = this;
	this.pedras = [];
	this.ParaCadaPedra = function(callback) {
		for (var i = 0; i < self.pedras.length; i++) {
			callback(self.pedras[i]);
		}
	}
}