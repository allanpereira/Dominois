var TentarJogarSuperiorNaDireitaMesa = function() {}

TentarJogarSuperiorNaDireitaMesa.prototype.Jogar = function(pedra, valorDireita) {
  if (!pedra.valorSuperior == valorDireita) throw new Exception("Jogada inválida");
  return new JogadaMesa(MoveType.RightSide, LadoPedra.Superior);
}
