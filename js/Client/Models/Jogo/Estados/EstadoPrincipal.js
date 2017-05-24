var EstadoPrincipal = function(jogo) {
    this.nome = "Game";
    
    // TODO: Só implementar o evento de click no sprite da pedra a cada rodada,
    // por que assim teremos bloqueamos o clique caso ela não seja jogável
    var aoClicarNaPedra = function(pedra){
        if(!jogo.PodeJogar())
            return;
        
        jogo.pedraJogando = pedra;

        pedra.AoReceberClique(jogo.tela.mesa, function(pedra, moveType) {
            jogo.AoJogarPedra(pedra.valorSuperior, pedra.valorInferior, moveType);
        });
    };

    // TODO: Só permitir a compra em caso do usuário não ter nenhuma pedra a jogar
    var aoClicarEmComprar = function() {
        jogo.socketClient.comprarPedra(jogo.gameId);
    };

    this.preload = function(){
        console.log(jogo.tela.mesa);
        game.load.image(jogo.tela.mesa.sprite.nome, AssetsHelper.BuscarImagemMesa(jogo.tela.mesa.sprite.nome));
        game.load.image(jogo.tela.spriteComprar.nome, AssetsHelper.BuscarImagemComprar(jogo.tela.spriteComprar.nome));


        //TODO: Workaround. Fix it.
        PedraFactory.ParaCadaPedraPossivel(function(pedra) {
            game.load.image(pedra.sprite.nome, AssetsHelper.BuscarImagemPedra(pedra.sprite.nome));
        });
    };

     this.create = function() {
        game.add.sprite(jogo.tela.mesa.sprite.posicao.x, jogo.tela.mesa.sprite.posicao.y, jogo.tela.mesa.sprite.nome);

        jogo.jogador.ParaCadaPedra(function(pedra){
            jogo.adicionarSpritePedra(pedra, aoClicarNaPedra);
        });

        var spriteComprar = game.add.sprite(jogo.tela.spriteComprar.posicao.x, jogo.tela.spriteComprar.posicao.y, jogo.tela.spriteComprar.nome);
        new TornarSpriteClicavel().Tornar(spriteComprar, aoClicarEmComprar);  
    };
}