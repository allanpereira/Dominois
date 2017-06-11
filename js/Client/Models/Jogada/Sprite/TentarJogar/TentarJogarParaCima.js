var TentarJogarParaCima = function() {}

TentarJogarParaCima.prototype.Jogar = function(ladoPedra, pedra, mesa) {
  var jogadaSprite = new JogarParaCima().Jogar(ladoPedra, pedra);
  if (jogadaSprite.y < mesa.sprite.phaserSprite.position.y) throw new Exception("Posi��o inv�lida");
  return jogadaSprite;
}
