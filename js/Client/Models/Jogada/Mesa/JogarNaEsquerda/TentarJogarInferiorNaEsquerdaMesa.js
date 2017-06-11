var TentarJogarInferiorNaEsquerdaMesa = function() {}

TentarJogarInferiorNaEsquerdaMesa.prototype.Jogar = function(pedra, valorEsquerda) {
  if (pedra.valorInferior != valorEsquerda)
    throw new Exception("Jogada inválida");
    
  return new JogadaMesa(MoveType.LeftSide, LadoPedra.Inferior);
}
