class Player{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.dominoes = [];
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    setDominoes(dominoes){
        dominoes.map(domino => this.dominoes.push(domino));
    }
}

module.exports = Player;