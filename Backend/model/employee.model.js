let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let EmployeeSchema = mongoose.Schema({
    _id:Number,
    userName:String,
    userPassword:String
})

let EmployeeModel = mongoose.model("",EmployeeSchema,"Employee");

module.exports = EmployeeModel