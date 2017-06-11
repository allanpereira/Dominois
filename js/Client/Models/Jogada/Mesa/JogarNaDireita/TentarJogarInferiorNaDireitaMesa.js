var TentarJogarInferiorNaDireitaMesa = function() {}

TentarJogarInferiorNaDireitaMesa.prototype.Jogar = function(pedra, pedraAnterior, valorDireita) {
  if (pedra.valorInferior != valorDireita) throw new Exception("Jogada inválida");
  return new JogadaMesa(LadoPedra.Inferior, pedraAnterior, pedra.valorSuperior);
}