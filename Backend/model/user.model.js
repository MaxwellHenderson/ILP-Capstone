let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let UserSchema = mongoose.Schema({
    _id:Number,
    userName:String,
    userPassword:String,
    accountNumber:Number,
    amount:Number,
    userEmail:String,
    userPhone:Number,
    userAddress:String,
    cart:[{
        productId:{
            productId:Number,
            productName:String,
            quantity:Number,
            unitPrice:Number,
            totalPrice:Number
        }
    }],
    accountLocked:Boolean,
    ticketId:Number
    
})

let UserModel = mongoose.model("",UserSchema,"User");

module.exports = UserModel