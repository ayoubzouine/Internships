const express = require("express");
const userRoute = require("./api/User");

const router = express.Router();


// router.use("../assets",express.static("../../../"+__dirname+"assets"));

router.use("/",userRoute);

module.exports = router;