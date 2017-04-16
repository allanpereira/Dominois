const Domino = require("../Models/Domino");

var DominoFactory = {
    create : function(){
        let tiles = [];
        if(tiles.length == 0)
        {
            for (var i = 0; i <= 6; i++) {
                for (var j = i; j <= 6; j++) {
                    let tile = new Domino(i, j);
                    tiles.push(tile);
                }
            }
        }

        return tiles;
    }
};

module.exports = DominoFactory;