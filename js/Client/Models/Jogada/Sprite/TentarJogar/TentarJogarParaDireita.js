var TentarJogarParaDireita = function() {}

TentarJogarParaDireita.prototype.Jogar = function(ladoPedra, pedra, mesa) {
  var jogadaSprite = new JogarParaDireita().Jogar(ladoPedra, pedra);
  if (jogadaSprite.x > (mesa.sprite.phaserSprite.position.x + mesa.sprite.tamanho.largura - pedra.sprite.largura))
    throw "Posição inválida";
  return jogadaSprite;
}
