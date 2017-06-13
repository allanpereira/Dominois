var TentarJogarParaEsquerda = function() {}

TentarJogarParaEsquerda.prototype.Jogar = function(ladoPedra, pedra, mesa) {
  var jogadaSprite = new JogarParaEsquerda().Jogar(ladoPedra, pedra);
  if ((jogadaSprite.x - pedra.sprite.largura) < mesa.sprite.phaserSprite.position.x)
    throw "Posição inválida";
  return jogadaSprite;
}
