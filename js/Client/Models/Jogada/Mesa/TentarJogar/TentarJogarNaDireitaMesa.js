var TentarJogarNaDireitaMesa = function() {}

TentarJogarNaDireitaMesa.prototype.Jogar = function(pedra, pedraAnterior, valorDireita) {
  return this.TentarJogarDeitada(pedra, pedraAnterior, valorDireita);
}

TentarJogarNaDireitaMesa.prototype.TentarJogarDeitada = function(pedra, pedraAnterior, valorDireita) {
    try {
        return new TentarJogarDeitadaNaDireitaMesa().Jogar(pedra, pedraAnterior, valorDireita);
    } catch (ex) {
        return this.TentarJogarSuperior(pedra, pedraAnterior, valorDireita);
    }
}

TentarJogarNaDireitaMesa.prototype.TentarJogarSuperior = function(pedra, pedraAnterior, valorDireita) {
    try {
        return new TentarJogarSuperiorNaDireitaMesa().Jogar(pedra, pedraAnterior, valorDireita);
    } catch (ex) {
        return this.TentarJogarInferior(pedra, pedraAnterior, valorDireita);
    }
}

TentarJogarNaDireitaMesa.prototype.TentarJogarInferior = function(pedra, pedraAnterior, valorDireita) {
    try {
        return new TentarJogarInferiorNaDireitaMesa().Jogar(pedra, pedraAnterior, valorDireita);
    } catch (ex) {
        throw new Exception("Jogada inválida");
    }
}
