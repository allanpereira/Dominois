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
        game.load.atlasJSONArray('ahri', '/assets/AniSprites/ahri.png', '/assets/AniSprites/ahri.json');    
        game.load.image('ball','/assets/AniSprites/ball.png',121,77);
        game.load.image('ahri_explode','/assets/AniSprites/ahri_explode.png',200,120);
        game.load.spritesheet('buttonNotOK', '/assets/AniSprites/naoOK.png', 135, 130);
        game.load.spritesheet('buttonOK', '/assets/AniSprites/OK.png', 135, 130);
        game.load.spritesheet('out', '/assets/AniSprites/botton_out.png', 85, 43);
        game.load.image('star', '/assets/AniSprites/star.png');
        game.load.image('1Up', '/assets/AniSprites/1up.png');
        game.load.image('btnLetstry', '/assets/AniSprites/btnLetstry.png');

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
		game.world.bringToTop(aniwin);
        game.world.bringToTop(umUp);
        
        if(stars!=null && maxstars!=null){
            jogo.UpdateStar();
        }
    }
}