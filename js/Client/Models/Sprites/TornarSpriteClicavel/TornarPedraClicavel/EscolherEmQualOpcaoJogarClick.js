var EscolherEmQualOpcaoJogarClick = function() {}

EscolherEmQualOpcaoJogarClick.prototype.Tornar(jogo, pedra, opcoesJogada) {
	
	var Callback = function() {
		alert("TODO: Deixar o usuário selecionar em qual lado jogar");
		jogo.JogarPedra(pedra, opcoesJogada[0]);
	}
	
	return new TornarSpriteClicavel().Tornar(pedra.sprite.phaserSprite, Callback);
}