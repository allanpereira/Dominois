var AoReceberPedra = function() {}
AoReceberPedra.prototype.Disparar = function(jogo, data) {
    console.log("[JOGO] A pedra " + data.domino.value1 + "|" + data.domino.value2 + " foi recebida.");
    var turno = new Turno();
    turno.LimparEventos(jogo);
    jogo.AdicionarPedra(data.domino);
    turno.AnalisarPedrasJogador(jogo);
}
