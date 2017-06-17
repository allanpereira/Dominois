var JogarEmPedraNoventaValorSuperiorParaCima = function() {}

JogarEmPedraNoventaValorSuperiorParaCima.prototype.Jogar = function(pedra) {
    console.log(this);
  return new JogadaSprite
  (
    pedra.sprite.phaserSprite.position.x - pedra.sprite.largura*0.5,
    pedra.sprite.phaserSprite.position.y,
    RotacaoSprite.CentoEOitenta,
    pedra.sprite.phaserSprite.position.y - pedra.sprite.altura
  );
}