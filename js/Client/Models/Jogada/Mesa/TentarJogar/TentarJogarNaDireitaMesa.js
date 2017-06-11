var TentarJogarNaDireitaMesa = function() {}

TentarJogarNaDireitaMesa.prototype.Jogar = function(pedra, valorDireita) {
  return this.TentarJogarDeitada(pedra, valorDireita);
}

TentarJogarNaDireitaMesa.prototype.JogarDeitada = function(pedra, valorDireita) {
    try {
        return new TentarJogarDeitadaNaDireitaMesa().Jogar(pedra, valorDireita);
    } catch (ex) {
        this.TentarJogarSuperior(pedra, valorDireita);
    }
}

TentarJogarNaDireitaMesa.prototype.JogarSuperior = function(pedra, valorDireita) {
    try {
        return new TentarJogarSuperiorNaDireitaMesa().Jogar(pedra, valorDireita);
    } catch (ex) {
        this.TentarJogarInferior(pedra, valorDireita);
    }
}

TentarJogarNaDireitaMesa.prototype.JogarInferior = function(pedra, valorDireita) {
    try {
        return new TentarJogarInferiorNaDireitaMesa().Jogar(pedra, valorDireita);
    } catch (ex) {
        throw new Exception("Jogada inválida");
    }
}
