// Require MesaFactory
// Require Tela
// Require Mesa
// Require SpriteComprar
// Require SpritePassar
// Require MaoPrincipal

//Classe
var Jogo = function(gameId){
    this.jogador = null;
    this.jogadores = [];
    this.gameId = gameId;
    this.vez = false;
    this.iniciado = false;
    this.notificacao = new Notificacao();
    this.tela = new Tela(new Mesa(), new SpriteComprar(), new SpriteQtdePedrasJogadores());
    this.socketClient = new SocketClient(this);
};

//Enviar Eventos
Jogo.prototype.AoCriarEstadoInicial = function(){
    this.socketClient.RegistrarEntrada(this.gameId);
};

Jogo.prototype.JogarPedra = function(pedra, moveType) {
    this.socketClient.RealizarJogada(this.gameId, pedra.valorSuperior, pedra.valorInferior, moveType);
};

//Métodos do Jogo
Jogo.prototype.PodeJogar = function(){
    return this.iniciado && this.vez;
};

Jogo.prototype.RegistrarEntrada = function(player) {
    var pedras = PedraFactory.CriarPedrasAPartirDoServer(player.dominoes);
    this.jogador = new Jogador(player.id, player.name, pedras);
    
    console.log("[JOGO] Jogador criado e registrado no Server.");

    this.TrocarEstadoParaPartida();
    this.IniciarPartida();
};


Jogo.prototype.AlterarEstado = function(state){
    this.iniciado = state === "STARTED";
};

Jogo.prototype.AlterarTurno = function(turns) {
    for(var i = 0; i < turns.length; i++) {
        if (this.jogador.id == turns[i].playerId) {
            this.vez = turns[i].turn;
        }
    }
};

Jogo.prototype.MoverPedraParaMesa = function(domino, moveType) {
    var pedra = this.jogador.BuscarPedraPorValores(domino.value1, domino.value2);
    
    if (pedra != null) {
        this.tela.maoPrincipal.RemoverPedra(pedra, this.jogador);
    } else {
        pedra = PedraFactory.CriarPedra(domino.value1, domino.value2);
        pedra.sprite.CarregarSpritePhaser({x: this.tela.mesa.sprite.posicao.x, y: this.tela.mesa.sprite.posicao.y});
    }

    new TornarSpriteClicavel().Remover(pedra.sprite.phaserSprite);

    this.tela.mesa.JogarPedra(pedra, moveType);
    console.log("[JOGO] A pedra " + domino.value1 + "|" + domino.value2 + " foi jogada. MoveType: " + moveType);
};

Jogo.prototype.AdicionarPedra = function(domino) {	
    var pedra = PedraFactory.CriarPedra(domino.value1, domino.value2);
    this.jogador.AdicionarPedra(pedra);
    this.tela.maoPrincipal.AdicionarPedra(pedra, this.tela.tamanho);
};

Jogo.prototype.IniciarPartida = function(){
    console.log("[JOGO] Partida iniciada.");
    console.log("[JOGO] Jogador: ");
    console.log(this.jogador);
};

Jogo.prototype.AtualizarAreaDeCompra = function(size){
    this.tela.spriteComprar.AtualizarTexto(size);
};

// Troca de Estados
Jogo.prototype.TrocarEstadoParaPartida = function(){
    console.log("[JOGO] Carregando as pedras na tela...");
    game.state.start(new EstadoPrincipal(this).nome);
};

console.log("[JOGO] Objeto jogo criado.");

///---------------------------------------------------------------------------------Animação - Maiko ----------------------------------------------------------------------------
var backdom;
var bullets;
var bullet;
var qtdbullets;
var qtdbulletsatual;
var entrada;
var megalocal;

Jogo.prototype.AniEntrada = function(jogador){
    
    backdom = game.add.group();
    backdom.enableBody = true;
    backdom.physicsBodyType = Phaser.Physics.ARCADE;   
    qtdbullets = jogador.pedras.length;
    qtdbulletsatual =0;
    megalocal = {x:jogador.pedras[0].sprite.phaserSprite.x-170,y:jogador.pedras[0].sprite.phaserSprite.y-50};

    for(var i = 0; i < jogador.pedras.length; i++) {
       var c = game.add.sprite(jogador.pedras[i].sprite.phaserSprite.x,jogador.pedras[i].sprite.phaserSprite.y,'dominoback');
       c.nome = jogador.pedras[i].nome;
       backdom.add(c);
       
       this.AniMove(c,{x:this.tela.tamanho.largura/2,y:this.tela.tamanho.altura/2},null,0);  
       this.AniMove(jogador.pedras[i],{x:this.tela.tamanho.largura/2,y:this.tela.tamanho.altura/2},null,0);
    }

    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    for (var i = 0; i < 8; i++)
    {
        var b = bullets.create(0, 0, 'bullet');
        b.name = 'bullet' + i;
        b.exists = false;
        b.visible = false;
        b.checkWorldBounds = true;
        b.events.onOutOfBounds.add(resetBullet, this);
    }
    
    game.time.events.add(1500, megaman_entrada, this);
    
}

function megaman_entrada() {
    
    entrada = game.add.sprite(megalocal.x,0,'megaman');
    entrada.scale.setTo(2,2);
    entrada.animations.add('entada',[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]);

    var tween = game.add.tween(entrada,[1]);        
    tween.to( { x: megalocal.x, y: megalocal.y }, 500, Phaser.Easing.Sinusoidal.InOut, true);        

    tween.start();
    tween.onComplete.add(function() {
        entrada.animations.play('entada',10,false);
        entrada.events.onAnimationComplete.add(fireBullet,this);
    } );    
}

function fireBullet () {
    
        bullet = bullets.getFirstExists(false);
        qtdbulletsatual+=1;
        if (bullet)
        {
            bullet.reset(megalocal.x+110, megalocal.y+90);
            bullet.body.velocity.x = 500;            
        }
        
        if(qtdbulletsatual<qtdbullets){
            game.time.events.add(500, fireBullet);
        }
        else{
            var saida = game.add.sprite(megalocal.x,megalocal.y,'megaman');
            saida.scale.setTo(2,2);
            saida.animations.add('saida',[23,24,25,26,27,28,29,30,31,32]);
            saida.animations.play('saida',10,false);
            entrada.kill();
            saida.events.onAnimationComplete.add(function(){                
                var tween = game.add.tween(saida,[1]);        
                tween.to( { x: megalocal.x, y: -20 }, 500, Phaser.Easing.Sinusoidal.InOut, true); 
                tween.start();
                tween.onComplete.add(function() {saida.kill()});
            },this);
        }
        
}

//  Called if the bullet goes out of the screen
function resetBullet (bullet) {
    bullet.kill();
}

//  Called if the bullet hits one of the sprites
Jogo.prototype.collisionHandler =function  (bullet, backdom) {
       
    var explosion = this.add.sprite(bullet.x, bullet.y, 'explosion');
    bullet.kill(); 
    backdom.kill();
    explosion.anchor.setTo(0.5, 0.5);
    explosion.scale.setTo(2,2);
    explosion.animations.add('boom');
    explosion.play('boom', 15, false, true);
}


Jogo.prototype.AniMove=function (pedra, posini,posfim,tipomove) {
        
        if(pedra==null){return;}
        var stone;
        if(pedra.sprite==null){
            stone = pedra;
        }
        else{
            stone = pedra.sprite.phaserSprite;
        }        
        var inicial;
        var final;        
       
        if(posini!=null && posfim==null){
            inicial = {x:posini.x,y:posini.y};
            final =  {x:stone.x,y:stone.y};
            stone.x=inicial.x;
            stone.y=inicial.y;
        }        
        else{
            return;
        }
       
        var tween = game.add.tween(stone);        
        tween.to( { x: final.x, y: final.y }, 500, Phaser.Easing.Sinusoidal.InOut, true);        

        tween.start();

    };
	
	var textwin;
    var aniwin;
    var umUp 
    Jogo.prototype.PreFinalizarJogo = function(data){
            
            game.physics.startSystem(Phaser.Physics.ARCADE);

            textwin = game.add.bitmapText(-200, -200, 'desyrel', 'You Win', 64);
            aniwin = game.add.sprite(-250, -150, 'win');
            game.physics.arcade.enable([ textwin, aniwin ]);

            umUp = game.add.sprite(game.world.centerX, game.world.centerY,'1Up');
            umUp.anchor.set(0.5);        
            umUp.alpha = 0;
            
    }
    var fireball1;
    var fireball2;
    var fireball3;
    var buttonNok;
    var buttonOk;
    var textlose;
    var textplrwon;
    var bar;
    Jogo.prototype.FinalizarJogo = function(data){
       
        if(this.jogador.id==data.getplayerwinID){ 

            textwin.x=200;
            textwin.y=120;
            textwin.body.velocity.setTo(400, -350);
            textwin.body.collideWorldBounds = true;
            textwin.body.bounce.set(1);            
            
            aniwin.x=game.world.centerX;
            aniwin.y=game.world.centerY;
            aniwin.z=99;
            aniwin.anchor.set(0.5);
            aniwin.body.immovable = true;
            aniwin.scale.setTo(3,3);
            aniwin.animations.add('rock');
            aniwin.play('rock', 15, true, false);

            game.add.button(95, 100, 'out', getout, this, 1);
        }
        else{
            
            buttonNok = game.add.button(game.world.centerX +100, game.world.centerY, 'buttonNotOK', CallAhri, this, 0, 1, 2);
            buttonOk = game.add.button(game.world.centerX -100, game.world.centerY, 'buttonOK', Call1UP, this, 0, 1, 2);

            bar = game.add.graphics();
            bar.beginFill(0x000000, 0.2);
            bar.drawRect(game.world.centerX-80, game.world.centerY-300, 350, 100);
            
            var style = { font: "bold 40px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

            //  The Text is positioned at 0, 100
            textlose = game.add.text(0, 0, "You Lose", style);
            textlose.setShadow(3, 3, 'rgba(0,0,0,0.9)', 2);
            textlose.padding.set(0, 16);

            //  We'll set the bounds to be from x0, y100 and be 800px wide by 100px high
            textlose.setTextBounds(game.world.centerX-80, game.world.centerY-300, 350, 100);

            textplrwon = game.add.text(0, 0, data.getplayerwinNome + " Won", style);
            textplrwon.font = 'Fontdiner Swanky';
            textplrwon.fontSize = 20;
            textplrwon.boundsAlignH= "center";
            textplrwon.boundsAlignV= "bottom";
            // textplrwon.padding.set(0,16 );
            textplrwon.setTextBounds(game.world.centerX-80, game.world.centerY-300, 350, 100);

            game.add.button(95, 100, 'out', getout, this, 1);
            
        }
    };

    function getout(){
        //TO DO: o jogador ao sair deve ter sua referencia ao jogo destruida pra não voltar e último a sair deve destruir a sala ou talvez reiniciar pra poder começar um novo jogo
        window.history.back();
    }

    function CallAhri(){
            buttonNok.kill();
            buttonOk.kill();

            ahri = game.add.sprite(game.world.centerX+250,game.world.bounds.height+300,'ahri');
            
            ahri.animations.add('ahri',[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);

            var tween = game.add.tween(ahri,[1]);        
            tween.to( { x: game.world.bounds.width/2, y: 100 }, 500, Phaser.Easing.Sinusoidal.InOut, true);   
            tween.start();

            tween.onComplete.add(function() {
                ahri.animations.play('ahri',10,false);
                ahri.events.onAnimationComplete.add(function(){
                    fireball1 = game.add.sprite(ahri.x, ahri.y+100, 'ball');
                    fireball2 = game.add.sprite(ahri.x+180, ahri.y+50, 'ball');
                    fireball3 = game.add.sprite(ahri.x+220, ahri.y+150, 'ball');
                    var tween1 = game.add.tween(fireball1); 
                    tween1.to( { x: game.world.centerX-150, y: game.world.centerY}, 150, Phaser.Easing.Sinusoidal.InOut,true, false);  
                    tween1.start();
                    var tween2 = game.add.tween(fireball2); 
                    tween2.to( { x: game.world.centerX-150, y: game.world.centerY}, 140, Phaser.Easing.Sinusoidal.InOut, true,false);  
                    tween2.start();
                    var tween3 = game.add.tween(fireball3); 
                    tween3.to( { x: game.world.centerX-150, y: game.world.centerY}, 100, Phaser.Easing.Sinusoidal.InOut,true,false);  
                    tween3.start();

                    var tween = game.add.tween(ahri,[20]);        
                    tween.to( { x: game.world.bounds.width/2+1000 }, 150,Phaser.Easing.Sinusoidal.InOut, true);   
                    tween.start();  
                    
                },this);
            } );
             game.time.events.add(2700, endexplosion, this);
    }

    function endexplosion(){
        textlose.kill();
        textplrwon.kill();
        bar.kill();
        fireball1.kill();
        fireball2.kill();
        fireball3.kill();
        jogo.tela.mesa.pedras.direita.forEach((p) => {
            p.sprite.phaserSprite.scale.setTo(0.0, 0.0);                
        });
        jogo.tela.mesa.pedras.esquerda.forEach((p) => {
            p.sprite.phaserSprite.scale.setTo(0.0, 0.0);                
        });
        var ahexpl = game.add.sprite(game.world.centerX-150, game.world.centerY,'ahri_explode');
        ahexpl.scale.setTo(0.0, 0.0);
        ahexpl.anchor.setTo(0.5, 0.5);
        ahexpl.alpha = 0;
        var tween = game.add.tween(ahexpl).to( { alpha: 1 }, 700, "Linear", true); 
        game.add.tween(ahexpl.scale).to({x: 9.0, y: 9.0}, 700, Phaser.Easing.Sinusoidal.InOut, true);
        
        tween.start();
        tween.onComplete.add(function(){
            // tween.to( { alpha: 0 }, 200, "Linear", true,true);},this);
            game.add.tween(ahexpl).to( { alpha: 0 }, 800, "Linear", true);
            },this);
    }

    var distance = 300;
    var speed = 5;
    var stars;

    var maxstars = 600;
    var xx = [];
    var yy = [];
    var zz = [];
    function Call1UP(){

        textlose.kill();
        textplrwon.kill();
        bar.kill();
        buttonNok.kill();
        buttonOk.kill();
        
        game.add.tween(umUp).to( { alpha: 1 }, 800, "Linear", true);

        game.world.bringToTop(umUp);

        var style = { font: "bold 48px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        
        var text = game.add.text(game.world.centerX, game.world.centerY+120, "1UP", style);
        text.anchor.set(0.5);
        text.align = 'center';
        text.fontWeight = 'bold';
        
        var textReflect = game.add.text(game.world.centerX, game.world.centerY + 150, "1UP");

        textReflect.anchor.set(0.5);
        textReflect.align = 'center';
        textReflect.scale.y = -1;

        textReflect.font = 'Arial';
        textReflect.fontWeight = 'bold';
        textReflect.fontSize = 48;

        var grd = textReflect.context.createLinearGradient(0, 0, 0, text.canvas.height);

        grd.addColorStop(0, 'rgba(255,255,255,0)');
        grd.addColorStop(1, 'rgba(255,255,255,0.7)');

        textReflect.fill = grd;

        var buttonLets = game.add.button(game.world.centerX, game.world.centerY+220, 'btnLetstry', getout, this);
        buttonLets.anchor.set(0.5);
        var sprites = game.add.spriteBatch();
        stars = [];

        for (var i = 0; i < maxstars; i++)
        {
            xx[i] = Math.floor(Math.random() * 800) - 400;
            yy[i] = Math.floor(Math.random() * 600) - 300;
            zz[i] = Math.floor(Math.random() * 1700) - 100;

            var star = game.make.sprite(0, 0, 'star');
            star.anchor.set(0.5);

            sprites.addChild(star);

            stars.push(star);
        }

    }

    Jogo.prototype.UpdateStar = function(){
        for (var i = 0; i < maxstars; i++)
        {
            stars[i].perspective = distance / (distance - zz[i]);
            stars[i].x = game.world.centerX + xx[i] * stars[i].perspective;
            stars[i].y = game.world.centerY + yy[i] * stars[i].perspective;

            zz[i] += speed;

            if (zz[i] > 290)
            {
                zz[i] -= 600;
            }

            stars[i].alpha = Math.min(stars[i].perspective / 2, 1);
            stars[i].scale.set(stars[i].perspective / 2);
            stars[i].rotation += 0.1;

        }
    }

 Jogo.prototype.onCollidewin=function() {
    if(textwin.text=="You Win"){
        textwin.text = "Voce Venceu";
    }
    else{
        textwin.text = "You Win";
    }  

}

