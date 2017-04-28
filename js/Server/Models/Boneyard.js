//Boneyard é a área de compra
class Boneyard{
    constructor(dominoes){
        this.dominoes = dominoes;
    }

    /**
    * Returns the object exposed to clients in browser.
    */
    getPublicInterface(){
        return {
            size : this.size(),
        };
    }

    isEmpty(){
        return this.size() === 0;
    }

    size(){
        return this.dominoes.length;
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