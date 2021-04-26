let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let EmployeeSchema = mongoose.Schema({
    _id:Number,
    userName:String,
    userPassword:String,
    loginCount:Number
})

let EmployeeModel = mongoose.model("Employee",EmployeeSchema);

module.exports = EmployeeModel