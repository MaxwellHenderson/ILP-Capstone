let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let OrderSchema = mongoose.Schema({
    _ID:Number,
    orderBy:String,
    orderDate:Number,
    cart:{
        productId:{
            productId:Number,
            productName:String,
            quantity:Number,
            unitPrice:Number,
            totalPrice:Number
        }
    },
    orderStatus:String,
    totalPrice:Number
})

let OrderModel = mongoose.model("",OrderSchema,"Order");

module.exports = OrderModel