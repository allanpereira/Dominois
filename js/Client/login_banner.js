window.onload = function () {
    var distance = 300;
    var speed = 4;
    var pedras;
    var max = 1500;
    var xx = [];
    var yy = [];
    var zz = [];
    var game2 = undefined;

    var preload = function() {                   
        game2.load.spritesheet('pedras', '/assets/AniSprites/spritesheetpedras.png', 68, 130);
        game2.load.image('logo', '/assets/AniSprites/logo-dominois.jpg');
    }

    function create () {                    
        game2.stage.backgroundColor = '#8DC26F';
        var sprites = game2.add.spriteBatch();
        pedras = [];
        var frame;
        for (var i = 0; i < max; i++) {
            xx[i] = Math.floor(Math.random() * 800) - 400;
            yy[i] = Math.floor(Math.random() * 600) - 300;
            zz[i] = Math.floor(Math.random() * 1700) - 100;
            if(frame < 29){
                frame += 1;
            } else {
                frame=0;
            }
            var pedra = game2.make.sprite(0, 0, 'pedras', frame);
            pedra.anchor.set(0.5);
            sprites.addChild(pedra);
            pedras.push(pedra);
        }
        game2.time.events.add(1500, function(){
            var sprite = game2.add.sprite(game2.world.centerX, game2.world.centerY, 'logo');
            sprite.anchor.setTo(0.5, 0.5);
            sprite.alpha = 0;
            game2.add.tween(sprite).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
        }, this);                  
    }        

    function update() {
        for (var i = 0; i < max; i++) {
            pedras[i].perspective = distance / (distance - zz[i]);
            pedras[i].x = game2.world.centerX + xx[i] * pedras[i].perspective;
            pedras[i].y = game2.world.centerY + yy[i] * pedras[i].perspective;

            zz[i] += speed;

            if (zz[i] > 290) {
                //  zz[i] -= 600;
            }
            pedras[i].alpha = Math.min(pedras[i].perspective / 2, 1);
            pedras[i].scale.set(pedras[i].perspective / 2);
            pedras[i].rotation += 0.1;
        }
    }

    var options = { 
        preload: preload, 
        create: create, 
        update: update 
    };

    var game2 = new Phaser.Game(766, 199, Phaser.AUTO, document.getElementById('banner'), options);
}