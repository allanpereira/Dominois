// Require MesaFactory
// Require Tela
// Require SpriteMesa
// Require MaoPrincipal

var Game = {};
Game.tela = new Tela(new SpriteMesa(), new MaoPrincipal());
console.log("Game: objeto game criado");

Game.init = function() {
	game.stage.disableVisibilityChange = true;	
}

Game.preload = function() {
	console.log("Game: Carregando os arquivos para a partida");

	Game.mesa = MesaFactory.CriarMesa();
	game.load.image(Game.tela.spriteMesa.nome, AssetsHelper.BuscarImagemMesa(Game.tela.spriteMesa.nome));
	
	Game.mesa.ParaCadaPedraDisponivel(function(pedra) {
		game.load.image(pedra.sprite.nome, AssetsHelper.BuscarImagemPedra(pedra.sprite.nome));
	});
};

Game.create =  function() {
	console.log("Game: Criando o jogo e pedindo novo jogador para o client");
	game.stage.backgroundColor = Game.tela.backgroundColor;
	game.add.sprite(Game.tela.spriteMesa.posicao.x, Game.tela.spriteMesa.posicao.y, Game.tela.spriteMesa.nome);
	Client.PedirRegistroNovoJogador();
}

Game.AdicionarNovoJogador = function(idJogador) {
	Game.jogador = new Jogador();
	Game.mesa.AdicionarNovoJogador(Game.jogador);
	console.log("Game: Jogador criado e registrado na mesa");
	Game.IniciarPartida();
}

Game.IniciarPartida = function() {
	console.log("Game: partida iniciada");
	Game.mesa.DistribuirPedrasParaJogadores();
	
	console.log("Game: status jogador: ");
	console.log(Game.jogador);
	
	console.log("Game: exibir as pedras na tela");
	Game.jogador.ParaCadaPedra(MostrarPedraNaTela);
}

var MostrarPedraNaTela = function(pedra) {
	game.add.sprite(Game.tela.maoPrincipal.posicaoProximaPedra.x, Game.tela.maoPrincipal.posicaoProximaPedra.y, pedra.sprite.nome);
	Game.tela.maoPrincipal.AdicionarPedra(pedra);
}