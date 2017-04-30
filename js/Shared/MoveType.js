var serverSide = (typeof module === "object" && module && typeof module.exports === "object");

var MoveType = (function() {	
    var _moveType = {
        NoMove: 0,
        FirstDomino: 1,
        RightSide: 2,
        LeftSide: 3
    }

    if (serverSide) {
        exports.instance = _moveType;
    } else {	
        return _moveType;
    }	
})();
