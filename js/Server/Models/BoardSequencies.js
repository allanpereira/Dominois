const DominoesSequence = require('./DominoesSequence');

class BoardSequencies {
    constructor(firstDomino) {
        this.sequence1 = new DominoesSequence(firstDomino, firstDomino.value1, null);
        this.sequence2 = new DominoesSequence(firstDomino, firstDomino.value2, null);
    }
    
    PlayInSequence1(domino) {
        this.sequence1 = this.sequence1.AppendDomino(domino);
    }
    
    PlayInSequence2(domino) {
        this.sequence2 = this.sequence2.AppendDomino(domino);
    }
}

module.exports = BoardSequencies;