class Domino{
    constructor(value1, value2){
        this.value1 = value1;
        this.value2 = value2;
        this.nome = value1 + "|" + value2;
    }

    getValue1(){
        return this.value1;
    }

    getValue2(){
        return this.value2;
    }
}

module.exports = Domino;