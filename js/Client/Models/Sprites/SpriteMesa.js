var SpriteMesa = function() {
    var self = this;
    
    this.nome = "mesa";
    
    this.posicao = {
        x: 0,
        y: 0
    };
    
    this.tamanho = {
        altura: 900,
        largura: 600
    };

	this.phaserSprite;
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
			this.proximaJogadaEsquerda = { jogada: new JogarParaEsquerdaOuParaBaixo() };
			this.proximaJogadaDireita = { jogada: new JogarParaDireitaOuParaCima()};
			return new PrimeiraJogada().Jogar(ladoPedra);
		
		case MoveType.LeftSide:
			return this.proximaJogadaEsquerda.jogada.Jogar(this.proximaJogadaEsquerda, ladoPedra, pedraAnterior, mesa);
		
		case MoveType.RightSide:
			return this.proximaJogadaDireita.jogada.Jogar(this.proximaJogadaDireita, ladoPedra, pedraAnterior, mesa);
	}
}

SpriteMesa.prototype.MoverPedra = function(jogadaSprite, pedra, pedraAnterior) {		
	pedra.sprite.phaserSprite.position.x = jogadaSprite.x;
	pedra.sprite.phaserSprite.position.y = jogadaSprite.y;
	pedra.sprite.phaserSprite.angle = jogadaSprite.rotacaoSprite;
	pedra.sprite.rotacaoSprite = jogadaSprite.rotacaoSprite;
	console.log(pedra);
}

SpriteMesa.prototype.CarregarSpritePhaser = function(larguraTela, alturaTela) {
	this.phaserSprite = game.add.tileSprite(0, 0, larguraTela, alturaTela, this.nome);
}
