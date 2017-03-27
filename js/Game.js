// Require PedrasHelper
// Require AssetsHelper

var Game = {};

Game.init = function() {
	game.stage.disableVisibilityChange = true;	
}

Game.preload = function() {
	game.load.image(MesaHelper.nomeImagem, AssetsHelper.BuscarImagemMesa());
	PedrasHelper.ForEachNomePedras(function(nomePedra) {
		game.load.image(nomePedra, AssetsHelper.BuscarImagemPedra(nomePedra));
	});
};

Game.create =  function() {
	game.add.sprite(0, 0, MesaHelper.nomeImagem);
	Client.PedirRegistroNovoJogador();
}