var TentarJogarNaEsquerdaMesa = function() {}

TentarJogarNaEsquerdaMesa.prototype.Jogar = function(pedra, valorEsquerda) {
  return this.TentarJogarDeitada(pedra, valorEsquerda);
}

TentarJogarNaEsquerdaMesa.prototype.JogarDeitada = function(pedra, valorEsquerda) {
    try {
        return new TentarJogarDeitadaNaEsquerdaMesa().Jogar(pedra, valorEsquerda);
    } catch (ex) {
        this.TentarJogarSuperior(pedra, valorEsquerda);
    }
}

TentarJogarNaEsquerdaMesa.prototype.JogarSuperior = function(pedra, valorEsquerda) {
    try {
        return new TentarJogarSuperiorNaEsquerdaMesa().Jogar(pedra, valorEsquerda);
    } catch  (ex) {
        this.TentarJogarInferior(pedra, valorEsquerda);
    }
}

TentarJogarNaEsquerdaMesa.prototype.JogarInferior = function(pedra, valorEsquerda) {
    try {
        return new TentarJogarInferiorNaEsquerdaMesa().Jogar(pedra, valorEsquerda);
    } catch  (ex)  {
        throw new Exception("Jogada inválida");
    }
}
