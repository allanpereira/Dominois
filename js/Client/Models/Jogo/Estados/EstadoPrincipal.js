var EstadoPrincipal = function(jogo) {
    this.nome = "Game";

    this.preload = function(){
        console.log(jogo.tela.mesa);
        game.load.image(jogo.tela.mesa.sprite.nome, AssetsHelper.BuscarImagemMesa(jogo.tela.mesa.sprite.nome));
        game.load.image(jogo.tela.spriteComprar.nome, AssetsHelper.BuscarImagemComprar(jogo.tela.spriteComprar.nome));
		
		game.load.atlasJSONArray('megaman', '/assets/AniSprites/megaman.png', '/assets/AniSprites/megaman.json');
        game.load.image('dominoback','/assets/AniSprites/dominoback.png',68,130);
        game.load.image('bullet', '/assets/AniSprites/bullet45.png');
        game.load.spritesheet('explosion', '/assets/AniSprites/explosion.png', 32, 32);        

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
        jogo.tela.spriteComprar.CarregarSpritePhaser(jogo.tela.spriteComprar.texto.quantidade);
        jogo.jogador.ParaCadaPedra(function(pedra) {
            jogo.tela.maoPrincipal.AdicionarPedra(pedra);
        });
		jogo.AniEntrada(jogo.jogador);
    };
	
	this.update = function(){
        var colide = game.physics.arcade.overlap(bullets, backdom, jogo.collisionHandler, null, this);
    }
}