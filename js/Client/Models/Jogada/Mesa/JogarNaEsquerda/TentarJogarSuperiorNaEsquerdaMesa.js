var TentarJogarSuperiorNaEsquerdaMesa = function() {}

TentarJogarSuperiorNaEsquerdaMesa.prototype.Jogar = function(pedra, pedraAnterior, valorEsquerda) {
  if (pedra.valorSuperior != valorEsquerda)
    throw new Exception("Jogada inválida");
    
  return new JogadaMesa(LadoPedra.Superior, pedraAnterior, pedra.valorInferior);
}
