var TentarJogarDeitadaNaDireitaMesa = function() {}

TentarJogarDeitadaNaDireitaMesa.prototype.Jogar = function(pedra, pedraAnterior, valorDireita) {
  if (!(pedra.valorSuperior == pedra.valorInferior && pedra.valorSuperior == valorDireita))
    throw new Exception("Jogada inválida");
    
  return new JogadaMesa(LadoPedra.Deitada, pedraAnterior);
}
