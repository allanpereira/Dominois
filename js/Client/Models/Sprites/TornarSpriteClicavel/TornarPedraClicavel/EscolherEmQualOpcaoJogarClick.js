var EscolherEmQualOpcaoJogarClick = function() {}

EscolherEmQualOpcaoJogarClick.prototype.Tornar = function(jogo, pedra, opcoesJogada) {
	
	var Callback = function() {
        jogo.JogarNaEsquerda = function() {
            jogo.JogarPedra(pedra, MoveType.LeftSide);
        }

        jogo.JogarNaDireita = function() {
            jogo.JogarPedra(pedra, MoveType.RightSide);
        }

        $("#escolherLado").modal("show");
	}

	return new TornarSpriteClicavel().Tornar(pedra.sprite.phaserSprite, Callback);
}
