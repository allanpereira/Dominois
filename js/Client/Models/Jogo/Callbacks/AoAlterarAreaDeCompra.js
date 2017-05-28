var AoAlterarAreaDeCompra = function() {}
AoAlterarAreaDeCompra.prototype.Disparar = function(jogo, data) {
    jogo.AtualizarAreaDeCompra(data.boneyard.size);
}