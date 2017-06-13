var EscolherEmQualOpcaoJogarClick = function() {}

EscolherEmQualOpcaoJogarClick.prototype.Tornar = function(jogo, pedra, opcoesJogada) {
	
	var Callback = function() {
        var opcao = prompt("Digite 1 para jogar na esquerda e 2 para jogar na direita", "1");
        while (opcao != 1 && opcao != 2) {
            opcao = prompt("Valor inválido. Digite 1 para jogar na esquerda e 2 para jogar na direita", "1");
        }
		jogo.JogarPedra(pedra, opcoesJogada[Number(opcao) - 1]);
	}

	return new TornarSpriteClicavel().Tornar(pedra.sprite.phaserSprite, Callback);
}
