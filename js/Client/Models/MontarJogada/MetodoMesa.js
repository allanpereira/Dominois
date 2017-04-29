var MetodoMesa = function(jogada) {
	
	var _metodo = function(jogada) {
		jogada.mesa.pedrasJogadas.push(jogada.pedra);
		
		if (jogada.valorEsquerdaMesa != null) jogada.mesa.valorEsquerda = jogada.valorEsquerdaMesa;		
		if (jogada.valorDireitaMesa != null) jogada.mesa.valorDireita = jogada.valorDireitaMesa;
	}
	jogada.MetodoMesa = _metodo;
	return jogada;
}