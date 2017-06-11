var TentarJogarDeitadaNaEsquerdaMesa = function() {}

TentarJogarDeitadaNaEsquerdaMesa.prototype.Jogar = function(pedra, pedraAnterior, valorEsquerda) {
  if (!(pedra.valorSuperior == pedra.valorInferior && pedra.valorSuperior == valorEsquerda))
    throw new Exception("Jogada inválida");
    
  return new JogadaMesa(LadoPedra.Deitada, pedraAnterior, pedra.valorSuperior);
}
