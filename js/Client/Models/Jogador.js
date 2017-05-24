var Jogador = function(pedras) {
    this.pedras = pedras;
};

Jogador.prototype.AdicionarPedra = function(pedra){
    this.pedras.push(pedra);
};

Jogador.prototype.ParaCadaPedra = function(callback) {
    for (var i = 0; i < this.pedras.length; i++) {
        callback(this.pedras[i]);
    }
};

Jogador.prototype.BuscarPedraPorValores = function(valorSuperior, valorInferior) {
	var pedraBuscada = null;
	
	this.ParaCadaPedra(function(pedra) {
		if (pedra.valorSuperior == valorSuperior && pedra.valorInferior == valorInferior) {
			pedraBuscada = pedra;
		}
	});
	
	return pedraBuscada;
};