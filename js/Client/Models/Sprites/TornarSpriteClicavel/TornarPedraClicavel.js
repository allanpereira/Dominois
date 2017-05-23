var TornarPedraClicavel = function() {
	
}

TornarPedraClicavel.prototype.Tornar = function(pedra, opcoesJogada) {
	if (opcoesJogada.length == 0) {
		return new NenhumaOpcaoAJogarClick().Tornar(pedra);
	}
		
	if (opcoesJogada.length == 1) {
		return new JogarEmUnicaOpcaoClick().Tonar(pedra, opcoesJogada); 
	}
	
	return new EscolherEmQualOpcaoJogarClick().Tornar(pedra, opcoesJogada);
}