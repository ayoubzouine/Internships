const mainService = require("../services/MainService");


class MainController{

    static async addUser(req,res,user){
        let added = await mainService.addUser(user);
        console.log("added = "+added);
        return added;
    };
}

module.exports = MainController;