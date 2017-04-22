const express = require('express');
const RoomController = require('../../Controllers/RoomController');
const LoginController = require('../../Controllers/LoginController');

const router = express.Router();

//Gambiarra para compartilhar o dado enquanto nao implementamos acesso a BD.
let games = [];

/* POST api/login */
router.post('/login', LoginController.post);

/* GET api/rooms/avaliable */
//Gambiarra para compartilhar o dado enquanto nao implementamos acesso a BD.
router.get('/rooms/avaliable', function(req, res){
    RoomController.avaliable(req, res, games);
});

/* POST api/rooms */
//Gambiarra para compartilhar o dado enquanto nao implementamos acesso a BD.
router.post('/rooms', function(req, res){
    RoomController.post(req, res, games);
});

module.exports = router;