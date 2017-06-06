var TornarPassarClicavel = function() {}

TornarPassarClicavel.prototype.Tornar = function(jogo, spritePassar, liberarPassagem) {

	if (liberarPassagem) {
		return new LiberarPassagemDeVez().Tornar(jogo, spritePassar);
	}
	
	return new BloquearPassagemDeVez().Tornar(spritePassar);
}
