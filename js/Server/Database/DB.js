const User = require('../Models/User');

const DB = {
    "games" : [],
    "users" : [
        new User(1, "vitor", "Vitor"),
        new User(2, "akamine", "Akamine"),
        new User(3, "irineu", "Irineu"),
        new User(4, "arima", "Arima")
    ]
};
module.exports = DB;