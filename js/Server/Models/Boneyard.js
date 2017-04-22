//Boneyard é a área de compra
class Boneyard{
    constructor(dominoes){
        this.dominoes = dominoes;
    }

    isEmpty(){
        return this.dominoes.length === 0;
    }

    take(amount){
        let dominoes = [];

        for(var i = 0; i < amount; i++){
            let position = Math.floor(Math.random() * this.dominoes.length);
            dominoes.push(this.dominoes.splice(position, 1)[0]);
        }
        
        return dominoes;
    }
}
module.exports = Boneyard;