var TentarJogarDeitadaNaDireitaMesa = function() {}

TentarJogarDeitadaNaDireitaMesa.prototype.Jogar = function(pedra, pedraAnterior, valorDireita) {
  if (!(pedra.valorSuperior == pedra.valorInferior && pedra.valorSuperior == valorDireita))
    throw "Jogada inválida";
    
  return new JogadaMesa(LadoPedra.Deitada, pedraAnterior, pedra.valorSuperior);
}
