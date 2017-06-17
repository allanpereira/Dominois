var TentarJogarParaDireita = function() {}

TentarJogarParaDireita.prototype.Jogar = function(ladoPedra, pedra, mesa) {
  var jogadaSprite = new JogarParaDireita().Jogar(ladoPedra, pedra);
  if (jogadaSprite.posicaoExtrema > mesa.sprite.auxiliarPedra.direita)
    throw "Posição inválida";
  return jogadaSprite;
}