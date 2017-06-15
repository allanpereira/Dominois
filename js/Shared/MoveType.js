var serverSide = (typeof module === "object" && module && typeof module.exports === "object");

var MoveType = (function() {	
    var _moveType = {
        FirstDomino: 1,
        LeftSide: 2,
        RightSide: 3
    }

    if (serverSide) {
        exports.instance = _moveType;
    } else {
        return _moveType;
    }
})();
