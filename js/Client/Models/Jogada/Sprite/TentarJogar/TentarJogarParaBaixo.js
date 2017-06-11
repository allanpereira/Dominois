var TentarJogarParaBaixo = function() {}

TentarJogarParaBaixo.prototype.Jogar = function(ladoPedra, pedra, mesa) {
  var jogadaSprite = new JogarParaBaixo.Jogar(ladoPedra, pedra);
  if (jogadaSprite.y > (mesa.sprite.phaserSprite.position.y + mesa.sprite.altura))
    throw new Exception("Posição inválida");
  return jogadaSprite;
}
