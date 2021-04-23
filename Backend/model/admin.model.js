let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let AdminSchema = mongoose.Schema({
    _id:Number,
    adminName:String,
    adminUsername:String,
    adminPassword:String
})

let AdminModel = mongoose.model("",AdminSchema,"Admin");

module.exports = AdminModel