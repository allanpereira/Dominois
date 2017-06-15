var SpriteQtdePedrasJogadores = function() {
    this.phaserObjeto;
}

SpriteQtdePedrasJogadores.prototype.AtualizarTexto = function(jogo, turns) {

    if (jogo.tela.mesa.sprite.phaserSprite == null) return;

    if (this.phaserObjeto == null) {
        this.phaserObjeto = game.add.text(290, 30, "", { strokeThickness: 1});
    }
    this.phaserObjeto.setText(this.Mensagem(jogo, turns));
}

SpriteQtdePedrasJogadores.prototype.Mensagem = function(jogo, turns) {
    var mesangemBase = "{0}: {1} pedras";
    var mensagem = "";

    var turnsLength = turns.length;
    var nome;
    for (var i = 0; i < turnsLength; i++) {        
        if (turns[i].playerId != jogo.jogador.id) nome = turns[i].name;
        else nome = "Você";

        mensagem = mensagem.concat(mesangemBase.replace("{0}", nome).replace("{1}", turns[i].dominoes));
        if (i < turnsLength - 1) {
            mensagem = mensagem.concat(", ");
        }
    }
    return mensagem;
}