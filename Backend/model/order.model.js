let mongoose = require("mongoose");
mongoose.Promise = global.Promise; // creating reference.

let OrderSchema = mongoose.Schema({
  _id: Number,
  userName: String,
  orderDate: Number,
  cart: Object,
  orderStatus: String,
  totalPrice: Number,
  userId: Number,
  reasonForCancellation: String
});

let OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel;
