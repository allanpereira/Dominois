var TentarJogarSuperiorNaEsquerdaMesa = function() {}

TentarJogarSuperiorNaEsquerdaMesa.prototype.Jogar = function(pedra, pedraAnterior, valorEsquerda) {
  if (pedra.valorSuperior != valorEsquerda)
    throw "Jogada inválida";
    
  return new JogadaMesa(LadoPedra.Superior, pedraAnterior, pedra.valorInferior);
}
