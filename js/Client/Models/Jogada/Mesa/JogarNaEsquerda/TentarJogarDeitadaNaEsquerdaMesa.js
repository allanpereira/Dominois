var TentarJogarDeitadaNaEsquerdaMesa = function() {}

TentarJogarDeitadaNaEsquerdaMesa.prototype.Tentar = function(pedra, valorEsquerda) {
  if (!(pedra.valorSuperior == pedra.valorInferior && pedra.valorSuperior == valorEsquerda))
    throw new Exception("Jogada inválida");
    
  return new JogadaMesa(MoveType.LeftSide, LadoPedra.Deitada);
}
