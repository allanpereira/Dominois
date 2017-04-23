class DominoesSequence {
	constructor(domino, nextExpectedValue, previousDominoSequence) {
		this.domino = domino;
		this.nextExpectedValue = nextExpectedValue;
		this.previousDominoSequence = previousDominoSequence;
		this.nextDominoSequence = null;
	}
	
	AppendValue(domino) {
		if (domino.value1 == this.nextExpectedValue) {
			this.nextDominoSequence = new DominoesSequence(domino, domino.value2, this);			
		}
		
		if (domino.value2 == this.nextExpectedValue) {
			this.nextDominoSequence = new DominoesSequence(domino, domino.value1, this);			
		}
		
		return this.nextDominoSequence;
	}
}

module.exports = DominoesSequence;