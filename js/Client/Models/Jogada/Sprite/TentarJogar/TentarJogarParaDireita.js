var TentarJogarParaDireita = function() {}

TentarJogarParaDireita.prototype.Jogar = function(ladoPedra, pedra, mesa) {
  var jogadaSprite = new JogarParaDireita().Jogar(ladoPedra, pedra);
  if (jogadaSprite.posicaoExtrema > mesa.sprite.posicao.x + mesa.sprite.tamanho.largura)
    throw "Posição inválida";
  return jogadaSprite;
}
