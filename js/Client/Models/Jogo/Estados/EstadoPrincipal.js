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

    var aoClicarEmPassar = function() {
        var boneyardCount = document.getElementById("boneyard");
        boneyardCount.innerHTML = size;
         if (size <= 0)
         {
             this.socketClient.PassarAVez(jogo.gameId);
         }else{
             alert("Ainda há pedras disponíveis para comprar.");
         };
    };

    this.preload = function(){
        console.log(jogo.tela.mesa);
        game.load.image(jogo.tela.mesa.sprite.nome, AssetsHelper.BuscarImagemMesa(jogo.tela.mesa.sprite.nome));
        game.load.image(jogo.tela.spriteComprar.nome, AssetsHelper.BuscarImagemComprar(jogo.tela.spriteComprar.nome));
        game.load.image(jogo.tela.spritePassar.nome, AssetsHelper.BuscarImagemPassar(jogo.tela.spritePassar.nome));


        //TODO: Workaround. Fix it.
        PedraFactory.ParaCadaPedraPossivel(function(pedra) {
            var pathSkin = localStorage["skin"];
            var nomePedra = pedra.sprite.nome;
            if (pathSkin != null && pathSkin.length != 0) {
                nomePedra = pathSkin.concat(nomePedra);
            }            
            game.load.image(pedra.sprite.nome, AssetsHelper.BuscarImagemPedra(nomePedra));
        });
    };

     this.create = function() {
        jogo.tela.mesa.sprite.CarregarSpritePhaser();
        jogo.tela.spriteComprar.CarregarSpritePhaser();
        jogo.tela.spritePassar.CarregarSpritePhaser();
        jogo.jogador.ParaCadaPedra(function(pedra) {
            jogo.tela.maoPrincipal.AdicionarPedra(pedra);
        });
    };
}