var EstadoPrincipal = function(jogo) {
    this.nome = "Game";

    this.preload = function(){
        console.log(jogo.tela.mesa);
        game.load.image(jogo.tela.mesa.sprite.nome, AssetsHelper.BuscarImagemMesa(jogo.tela.mesa.sprite.nome));
        game.load.image(jogo.tela.spriteComprar.nome, AssetsHelper.BuscarImagemComprar(jogo.tela.spriteComprar.nome));
		
		game.load.atlasJSONArray('megaman', '/assets/AniSprites/megaman.png', '/assets/AniSprites/megaman.json');
        game.load.image('dominoback', AssetsHelper.BuscarImagemPassar('dominoback'), 68, 130);
        game.load.image('bullet', '/assets/AniSprites/bullet45.png');       
        game.load.spritesheet('explosion', '/assets/AniSprites/explosion.png', 32, 32);  
		game.load.atlasJSONArray('win', '/assets/AniSprites/win.png', '/assets/AniSprites/win.json');        
        game.load.bitmapFont('desyrel', '/assets/AniSprites/desyrel.png', '/assets/AniSprites/desyrel.xml');

        PedraFactory.ParaCadaPedraPossivel(function(pedra) {   
            game.load.image(pedra.sprite.nome, AssetsHelper.BuscarImagemPedra(pedra.sprite.nome));
        });
    };

     this.create = function() {
        jogo.tela.mesa.sprite.CarregarSpritePhaser(jogo.tela.tamanho.largura, jogo.tela.tamanho.altura);
        jogo.tela.spriteComprar.CarregarSpritePhaser(jogo.tela.spriteComprar.texto.quantidade);
        jogo.jogador.ParaCadaPedra(function(pedra) {
            jogo.tela.maoPrincipal.AdicionarPedra(pedra, jogo.tela.tamanho);
        });
		jogo.AniEntrada(jogo.jogador);
		jogo.PreFinalizarJogo();
    };
	
	this.update = function(){
        game.physics.arcade.overlap(bullets, backdom, jogo.collisionHandler, null, this);
        game.physics.arcade.collide(textwin, aniwin,  jogo.onCollidewin);
    }
}