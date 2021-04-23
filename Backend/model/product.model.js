let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let ProductSchema = mongoose.Schema({
    productId:Number,
    productName:String,
    productPrice:Number,
    quantity:Number
})

let ProductModel = mongoose.model("",ProductSchema,"Product");

module.exports = ProductModel