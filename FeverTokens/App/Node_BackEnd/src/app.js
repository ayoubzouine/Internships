const express = require("express");
const app = express();
const routes = require("./api/routes/index");
const path = require("path");
const cors = require('cors');

const port = 3000;
app.use(cors());

app.listen(port,()=>console.log(`Server litening on port ${port}`));

app.use("/public",express.static(__dirname+"/../public"));

app.use(cors({
    origin: 'http://localhost:3001', // Replace with the actual domain of your React app
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type,Authorization',
  }));

app.use("/",routes);