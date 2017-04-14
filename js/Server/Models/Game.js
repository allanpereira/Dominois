class Game{
    constructor(playersAmount){
        this.playersAmount = playersAmount;
        this.players = [];
    }

    addPlayer(player){
        if(this.players.length === this.playersAmount)
            throw new Error("The game has reached the maximum players amount(${this.playersAmount).");

        this.players.push(player);
    }
}

module.exports = Game;