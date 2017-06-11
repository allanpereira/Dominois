var TentarJogarInferiorNaDireitaMesa = function() {}

TentarJogarInferiorNaDireitaMesa.prototype.Jogar = function(pedra, valorDireita) {
  if (!pedra.valorInferior == valorDireita) throw new Exception("Jogada inválida");
  return new JogadaMesa(MoveType.RightSide, LadoPedra.Inferior);
}