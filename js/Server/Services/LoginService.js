const User = require('../Models/User');

class LoginService {
    static post(data, db) {
        return new Promise((resolve, reject) => {
            try{
                if(!data)
                    reject("Invalid data!");

                //TODO: Load from DB. We can use Knex.
                let user = db.users.find(u => u.username == data.username);
                return resolve(user);
            }catch(err){
                reject(err.message);
            }
        });
    }
}

module.exports = LoginService;