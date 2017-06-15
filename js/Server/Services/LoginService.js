const User = require('../Models/User');

class LoginService {
    static post(data, db) {
        return new Promise((resolve, reject) => {
            try{
                if(!data)
                    reject("Invalid data!");

                //TODO: Load from DB. We can use Knex.
                let user = db.users.find(u => u.username == data.username);

                if(user == null){
                    let nextId = Math.max.apply(Math, db.users.map(u => u.getId())) + 1;
                    user = new User(nextId, data.username, "123456");
                    db.users.push(user);
                }

                return resolve(user);
            }catch(err){
                reject(err.message);
            }
        });
    }
}

module.exports = LoginService;