var Mesa = function(pedras) {
	var self = this;
	
	this.valorPedraSuperior = null;
	this.valorPedraInferior = null;
	this.jogadores = [];
	this.pedras = pedras;
	
	this.ParaCadaPedraDisponivel = function(callback) {
		for (var i = 0; i < self.pedras.length; i ++){
			callback(self.pedras[i]);
		}
	}
	
	this.AdicionarNovoJogador = function(jogador) {
		self.jogadores.push(jogador);
	}
	
	this.DistribuirPedrasParaJogadores = function() {
		self.ParaCadaJogador(DistribuirPedrasParaJogador);
	}
			
	this.PegarPedraAleatoria = function() {
		var posicaoPedra = Math.floor(Math.random() * self.pedras.length);
		var pedra = self.pedras[posicaoPedra];
		RemoverPedraDaMesa(posicaoPedra);
		return pedra;
	}
			
	this.ParaCadaJogador = function(callback) {
		for (var i = 0; i < self.jogadores.length; i++) {
			callback(self.jogadores[i]);
		}
	}
	
	var DistribuirPedrasParaJogador = function(jogador) {
		var qtdePedrasNaMao = 7;
		var pedra = {};
		for (var i = 0; i < qtdePedrasNaMao; i++) {
			var pedra = self.PegarPedraAleatoria();
			jogador.pedras.push(pedra);
		}
	}
	
	var RemoverPedraDaMesa = function(posicaoPedra) {
		self.pedras.splice(posicaoPedra, 1);
	}
};