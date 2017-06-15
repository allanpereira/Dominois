var SpriteQtdePedrasJogadores = function() {
    this.phaserObjeto;
}

SpriteQtdePedrasJogadores.prototype.AtualizarTexto = function(jogo, turns) {
    //debugger;
    if (this.phaserObjeto == null) {
        this.phaserObjeto = game.add.text(15, 0, "", { strokeThickness: 1});
        //jogo.tela.mesa.sprite.phaserSprite.addChild(this.phaserObjeto);
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
        if (i < turnsLength) {
            mensagem = mensagem.concat(", ");
        }
    }
    return mensagem;
}