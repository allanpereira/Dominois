const RoomService = require('../Services/RoomService');
const DB = require('../Database/DB');

class RoomController {
    static avaliable(req, res) {
        RoomService.avaliable(req.session.user.id, DB)
        .then((rooms) => {
            res.status(200).send({rooms : rooms});
        })
        .catch((err) => {
            res.status(500).send({ message: 'Error while getting avaliable rooms.', error : err});
        });
    }

    static post(req, res) {
        RoomService.post(req.session.user, req.body, DB)
        .then((room) => {
            res.status(200).send(room);
        })
        .catch((err) => {
            res.status(500).send({ message: 'Error while getting avaliable rooms.', error : err});
        });
    }
}

module.exports = RoomController;