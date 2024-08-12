const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const {PORT} = require("./configs/server.config");

const app = express();

app.listen(PORT,()=>{
    console.log("server online");
})