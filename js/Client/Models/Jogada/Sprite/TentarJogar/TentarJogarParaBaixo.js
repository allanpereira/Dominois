var TentarJogarParaBaixo = function() {}

TentarJogarParaBaixo.prototype.Jogar = function(ladoPedra, pedra, mesa) {
  var jogadaSprite = new JogarParaBaixo().Jogar(ladoPedra, pedra);
  if (jogadaSprite.posicaoExtrema > mesa.sprite.posicao.y + mesa.sprite.tamanho.altura)
    throw "Posição inválida";
  return jogadaSprite;
}
