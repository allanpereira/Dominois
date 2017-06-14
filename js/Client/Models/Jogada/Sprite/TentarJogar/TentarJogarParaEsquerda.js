var TentarJogarParaEsquerda = function() {}

TentarJogarParaEsquerda.prototype.Jogar = function(ladoPedra, pedra, mesa) {
  var jogadaSprite = new JogarParaEsquerda().Jogar(ladoPedra, pedra);
  if (jogadaSprite.posicaoExtrema < mesa.sprite.posicao.x)
    throw "Posição inválida";
  return jogadaSprite;
}
