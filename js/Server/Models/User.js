class User{
    constructor(id, username, name){
        this.id = id;
        this.username = username;
        this.name = name;
    }

    getId(){
        return this.id;
    }

    getUsername(){
        return this.username;
    }

    getName(){
        return this.name;
    }
}

module.exports = User;