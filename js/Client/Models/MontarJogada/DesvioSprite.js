// Require Helper/RotacaoSprite

var DesvioSprite = function(jogada) {
	
	jogada.desvioSprite = {x: 0, y: 0};
	
	var ajusteVertical = 0;
	var ajusteHorizontal = 0;
	
	if (jogada.rotacaoSprite == RotacaoSprite.esquerda) {
		ajusteVertical = 0.7;
		ajusteHorizontal = 0.5;
	}
	
	if (jogada.rotacaoSprite == RotacaoSprite.direita) {
		ajusteVertical = 1;
		ajusteHorizontal = -1;
	}
	
	jogada.desvioSprite.y = jogada.pedra.sprite.altura * ajusteVertical;
	jogada.desvioSprite.x = jogada.pedra.sprite.largura * ajusteHorizontal;
	
	return jogada;
}