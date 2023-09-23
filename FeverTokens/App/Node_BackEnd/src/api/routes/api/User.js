const express = require("express");
const router = express.Router();
const MainController = require("../../controllers/MainController");
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.json({ extended: false })

router.get("/condidate", urlencodedParser, (req, res) => {
    console.log("called")
});

router.post("/condidate", urlencodedParser, (req, res) => {
    let user = req.body;
    return MainController.addUser(req, res, user);
});

module.exports = router;