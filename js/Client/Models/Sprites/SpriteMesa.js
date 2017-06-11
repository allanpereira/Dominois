var SpriteMesa = function() {
    var self = this;
    
    this.nome = "mesa";
    
    this.posicao = {
        x: 50,
        y: 50
    };
    
    this.tamanho = {
        altura: 500,
        largura: 700
    };

	this.proximaJogadaEsquerda;
	this.proximaJogadaDireita;
};

SpriteMesa.prototype.Jogar = function(moveType, ladoPedra, pedra, pedraAnterior, mesa) {
	var jogadaSprite = this.PrepararJogada(moveType, ladoPedra, pedraAnterior, mesa);
	this.MoverPedra(jogadaSprite, pedra, pedraAnterior);
}

SpriteMesa.prototype.PrepararJogada = function(moveType, ladoPedra, pedraAnterior, mesa) {
	switch (moveType) {
		case MoveType.FirstDomino:
			this.proximaJogadaEsquerda = new JogarParaEsquerdaOuParaBaixo();
			this.proximaJogadaDireita = new JogarParaDireitaOuParaCima();
			return new PrimeiraJogada().Jogar(ladoPedra);
		
		case MoveType.LeftSide:
			return this.proximaJogadaEsquerda.Jogar(this.proximaJogadaEsquerda, ladoPedra, pedraAnterior, mesa);;
		
		case MoveType.RigthSide:
			return this.proximaJogadaDireita.Jogar(jogarSpritePedra, ladoPedra, pedraAnterior, mesa);;
	}
}

SpriteMesa.prototype.MoverPedra = function(jogadaSprite, pedra, pedraAnterior) {

	if (pedraAnterior != null) {
		pedra.sprite.phaserSprite.position.x = pedraAnterior.sprite.phaserSprite.position.x;
		pedra.sprite.phaserSprite.position.y = pedraAnterior.sprite.phaserSprite.position.y;
	}
	
	debugger;
	pedra.sprite.phaserSprite.rotation = jogadaSprite.rotacaoSprite;
	pedra.sprite.phaserSprite.position.x = jogadaSprite.x;
	pedra.sprite.phaserSprite.position.y = jogadaSprite.y;
}

