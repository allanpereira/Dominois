var TentarJogarParaCima = function() {}

TentarJogarParaCima.prototype.Jogar = function(ladoPedra, pedra, mesa) {
  var jogadaSprite = new JogarParaCima().Jogar(ladoPedra, pedra);
  if (jogadaSprite.posicaoExtrema < mesa.sprite.auxiliarPedra.superior)
    throw "Posição inválida";
  return jogadaSprite;
}
