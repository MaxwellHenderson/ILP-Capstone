let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");

let url="";

const mongooseDbOption ={       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url,mongooseDbOption);
mongoose.connection;
var Admin=require("./router/admin.router.js");
var User=require("./router/user.router.js");
var Order=require("./router/order.router.js");