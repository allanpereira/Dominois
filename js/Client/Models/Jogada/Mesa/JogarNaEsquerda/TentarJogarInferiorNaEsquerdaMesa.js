var TentarJogarInferiorNaEsquerdaMesa = function() {}

TentarJogarInferiorNaEsquerdaMesa.prototype.Jogar = function(pedra, pedraAnterior, valorEsquerda) {
  if (pedra.valorInferior != valorEsquerda)
    throw "Jogada inválida";
    
  return new JogadaMesa(LadoPedra.Inferior, pedraAnterior, pedra.valorSuperior);
}
