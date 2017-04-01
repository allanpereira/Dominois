// Require MesaFactory
// Require Tela
// Require SpriteMesa
// Require MaoPrincipal

var Game = {};

Game.init = function() {
	game.stage.disableVisibilityChange = true;	
}

Game.preload = function() {
	Game.mesa = MesaFactory.CriarMesa();
	Game.tela = new Tela(new SpriteMesa(), new MaoPrincipal());
	
	game.load.image(Game.tela.spriteMesa.nome, AssetsHelper.BuscarImagemMesa(Game.tela.spriteMesa.nome));
	
	Game.mesa.ParaCadaPedraDisponivel(function(pedra) {
		game.load.image(pedra.sprite.nome, AssetsHelper.BuscarImagemPedra(pedra.sprite.nome));
	});
};

Game.create =  function() {
	game.add.sprite(Game.tela.spriteMesa.posicao.x, Game.tela.spriteMesa.posicao.y, Game.tela.spriteMesa.nome);
	Client.PedirRegistroNovoJogador();
}

Game.AdicionarNovoJogador = function(jogador) {
	Game.mesa.AdicionarNovoJogador(jogador);
	console.log(jogador);
	//jogador.ParaCadaPedra(MostrarPedraNaTela);
}

var MostrarPedraNaTela = function(pedra) {
	game.add.sprite(Game.tela.maoPrincipal.posicaoProximaPedra.x, Game.tela.maoPrincipal.posicaoProximaPedra.y, pedra.sprite.nome);
	Game.tela.maoPrincipal.AdicionarPedra(pedra);
}