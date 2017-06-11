var TentarJogarNaEsquerdaMesa = function() {}

TentarJogarNaEsquerdaMesa.prototype.Jogar = function(pedra, pedraAnterior, valorEsquerda) {
  return this.TentarJogarDeitada(pedra, pedraAnterior, valorEsquerda);
}

TentarJogarNaEsquerdaMesa.prototype.TentarJogarDeitada = function(pedra, pedraAnterior, valorEsquerda) {
    try {
        return new TentarJogarDeitadaNaEsquerdaMesa().Jogar(pedra, pedraAnterior, valorEsquerda);
    } catch (ex) {
        return this.TentarJogarSuperior(pedra, pedraAnterior, valorEsquerda);
    }
}

TentarJogarNaEsquerdaMesa.prototype.TentarJogarSuperior = function(pedra, pedraAnterior, valorEsquerda) {
    try {
        return new TentarJogarSuperiorNaEsquerdaMesa().Jogar(pedra, pedraAnterior, valorEsquerda);
    } catch  (ex) {
        return this.TentarJogarInferior(pedra, pedraAnterior, valorEsquerda);
    }
}

TentarJogarNaEsquerdaMesa.prototype.TentarJogarInferior = function(pedra, pedraAnterior, valorEsquerda) {
    try {
        return new TentarJogarInferiorNaEsquerdaMesa().Jogar(pedra, pedraAnterior, valorEsquerda);
    } catch  (ex)  {
        throw new Exception("Jogada inválida");
    }
}
