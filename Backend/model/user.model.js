let mongoose = require("mongoose");
mongoose.Promise = global.Promise; // creating reference.

let UserSchema = mongoose.Schema({
  _id: Number,
  userName: String, //firstname
  userLastName: String,
  userPassword: String,
  accountNumber: Number,
  fund: Number,
  userEmail: String,
  userPhone: Number,
  userDob: Date,
  userAddress: String,
  cart: [
    {
      productId: {
        productId: Number,
        productName: String,
        quantity: Number,
        unitPrice: Number,
        totalPrice: Number,
      },
    },
  ],
  accountLocked: Boolean,
  ticketId: Number,
  loginAttempts: Number,
});

let UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
