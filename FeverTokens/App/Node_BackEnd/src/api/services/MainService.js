const userModel = require("../models/UserModel");


class MainService{
    static async addUser(user){
        let added = await userModel.addUser(user);
        console.log("Added : "+added);
        if(added) return 1;
        return 0;  
    }
}

module.exports = MainService;