let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let OrderSchema = mongoose.Schema({
    _id:Number,
    orderBy:String,
    orderDate:Number,
    cart:[{
        productId:{
            productId:Number,
            productName:String,
            quantity:Number,
            unitPrice:Number,
            totalPrice:Number
        }
    }],
    orderStatus:String,
    totalPrice:Number,
    userId:Number,
    reasonForCancellation:String
})

let OrderModel = mongoose.model("Order",OrderSchema);

module.exports = OrderModel