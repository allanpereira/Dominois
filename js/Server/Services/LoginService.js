class LoginService {
    static post(data) {
        return new Promise((resolve, reject) => {
            try{
                if(!data)
                    reject("Invalid data!");

                //TODO: Load from DB. We can use Knex.
                if(data.username === "vitao" && data.password === "unilever"){
                    return resolve({
                        "id" : 1,
                        "name" : "Vitor",
                        "username" : "vitao"
                    });
                }

                return null;
            }catch(err){
                reject(err);
            }
        });
    }
}

module.exports = LoginService;