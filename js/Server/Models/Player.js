class Player{
    constructor(user){
        this.id = user.id;
        this.name = user.name;
        this.dominoes = [];
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getDominoes(){
        return this.dominoes;
    }

    getPublicInterface(){
        return {
            id : this.id,
            name : this.name,
            dominoes : this.dominoes
        }
    }

    addDomino(domino){
        this.dominoes.push(domino);
    }

    addDominoes(dominoes){
        dominoes.map(domino => this.addDomino(domino));
    }

    setDominoes(dominoes){
        this.dominoes = [];
        this.addDominoes(dominoes);
    }

    hasDomino(value1, value2){
        return this.dominoes.find(d => d.getValue1() == value1 && d.getValue2() == value2);
    }

    removeDomino(value1, value2){
        const index = this.dominoes.findIndex(d => d.getValue1() == value1 && d.getValue2() == value2);
        return this.dominoes.splice(index, 1)[0];
    }
}

module.exports = Player;