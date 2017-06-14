// Require Game

var url = window.location.href;
if(url.endsWith("/"))
    url = url.substr(0, url.length - 1);

var gameId = url.substr(url.lastIndexOf("/") + 1);
var jogo = new Jogo(gameId);

var game = new Phaser.Game(
    jogo.tela.tamanho.largura,
    jogo.tela.tamanho.altura, 
    Phaser.AUTO, 
    jogo.tela.containerId
);


console.log("[MAIN] Jogo criado, dando start...");

var estadoInicialJogo = new EstadoInicial(jogo);
game.state.add(estadoInicialJogo.nome, estadoInicialJogo);

var estadoPrincipalJogo = new EstadoPrincipal(jogo);
game.state.add(estadoPrincipalJogo.nome, estadoPrincipalJogo);

game.state.start(estadoInicialJogo.nome);