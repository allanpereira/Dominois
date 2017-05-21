// Require Helper/RotacaoSprite

var DesvioSprite = function(jogada) {
	
	jogada.desvioSprite = {x: 0, y: 0};
	
	if (jogada.rotacaoSprite == RotacaoSprite.esquerda) {
		jogada.desvioSprite.y = jogada.pedra.sprite.largura * 1.5;
		jogada.desvioSprite.x = 0;
	}
	
	if (jogada.rotacaoSprite == RotacaoSprite.direita) {
		jogada.desvioSprite.y = jogada.pedra.sprite.largura/ 2;
		jogada.desvioSprite.x = jogada.pedra.sprite.altura;
	}
	
	return jogada;
}