const LoginService = require('../Services/LoginService');

class LoginController {
    static post(req, res) {
        LoginService.post(req.body)
        .then((user) => {
            if(user){
                req.session.user = user;
                res.status(200).send({ user: user });
            }else{
                res.status(404).send({ user: "User and password doesn't match any account!" });
            }
        })
        .catch((err) => {
            res.status(500).send({ message: 'Error while logging in.', error : err});
        });
    }

    static delete(req){
        req.session.destroy();
    }
}

module.exports = LoginController;