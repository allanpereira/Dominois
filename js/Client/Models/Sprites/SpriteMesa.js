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

SpriteMesa.prototype.CarregarSpritePhaser = function() {
	this.phaserSprite = game.add.sprite(this.posicao.x, this.posicao.y, this.nome);
}
