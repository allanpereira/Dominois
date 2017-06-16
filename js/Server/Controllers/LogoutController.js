const LogoutService = require('../Services/LogoutService');
const DB = require('../Database/DB');

class LogoutController {
    static post(req, res) {
        LogoutService.post(req.session.user, DB)
        .then(() => {
            req.session.destroy();
            res.status(200).send();
        })
        .catch(() => {
            req.session.destroy();
            res.status(200).send();
        });
    }
}

module.exports = LogoutController;