const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const {PORT} = require("./configs/server.config");
const {DB_URL} = require("./configs/db.config")
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
mongoose.connect(DB_URL).then(()=>{
    console.log("Connected to DataBase");
}).catch((err)=>{
    console.log({message : err});
})

app.use(bodyParser.json());

app.listen(PORT,()=>{
    console.log("server online");
})