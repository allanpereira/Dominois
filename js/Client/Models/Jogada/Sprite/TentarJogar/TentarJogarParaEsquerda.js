var TentarJogarParaEsquerda = function() {}

TentarJogarParaEsquerda.prototype.Jogar = function(ladoPedra, pedra, mesa) {
  var jogadaSprite = new JogarParaEsquerda().Jogar(ladoPedra, pedra);
  if (jogadaSprite.x < mesa.sprite.phaserSprite.position.x)
    throw new Exception("Posição inválida");
  return jogadaSprite;
}
