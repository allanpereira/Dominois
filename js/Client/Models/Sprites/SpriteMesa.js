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
    
    this.posicaoPedraInicial = { x: 330, y: 220 };
    this.posicaoPedraEsquerda = JSON.parse(JSON.stringify(self.posicaoPedraInicial));
    this.posicaoPedraDireita = JSON.parse(JSON.stringify(self.posicaoPedraInicial));
};

SpriteMesa.prototype.Jogar = function(moveType, ladoPedra, pedra, pedraAnterior, mesa) {
	var jogadaSprite = this.PrepararJogada(moveType, ladoPedra, pedraAnterior, mesa);
	this.MoverPedra(jogadaSprite, pedra);
}

SpriteMesa.prototype.PrepararJogada = function(moveType, ladoPedra, pedraAnterior, mesa) {
	switch (moveType) {
		case MoveType.FirstDomino:
			this.proximaJogadaEsquerda = new TentarJogarParaEsquerdaOuParaBaixo();
			this.proximaJogadaDireita = new TentarJogarParaDireitaOuParaCima();
			return new PrimeiraJogada().Jogar(ladoPedra, pedraAnterior);
		
		case MoveType.LeftSide:
			return this.proximaJogadaEsquerda.Jogar(this.proximaJogadaEsquerda, ladoPedra, pedraAnterior, mesa);;
		
		case MoveType.RigthSide:
			return this.proximaJogadaDireita.Jogar(jogarSpritePedra, ladoPedra, pedraAnterior, mesa);;
	}
}

SpriteMesa.prototype.MoverPedra = function(jogadaSprite, pedra, pedraAnterior) {
	pedra.sprite.phaserSprite.position.x = pedraAnterior.sprite.phaserSprite.position.x;
	pedra.sprite.phaserSprite.position.y = pedraAnterior.sprite.phaserSprite.position.y;
	
	pedra.sprite.phaserSprite.rotation = jogadaSprite.rotacaoPedra;
	pedra.sprite.phaserSprite.position.x = jogadaSprite.x;
	pedra.sprite.phaserSprite.position.y = jogadaSprite.y;
}

