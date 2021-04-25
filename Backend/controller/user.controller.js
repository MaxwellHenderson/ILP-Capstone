let UserModel = require("../model/user.model.js");

let getUser = (req, res) => {
  let userName = req.params.UserName;
  let userPassword = req.params.UserPassword;

  UserModel.find(
    { userName: userName, userPassword: userPassword },
    (err, data) => {
      if (!err) {
      } else {
      }
    }
  );
};

let updateUserInfo = (req, res) => {
  let userName = req.body.userName;
  let updatedPassword = req.body.userPassword;
  UserModel.updateOne(
    { userName: userName },
    { $set: { userPassword: updatedPassword } },
    (err, result) => {
      if (!err) {
        if (result.nModified > 0) {
          res.send("Record updated succesfully");
        } else {
          res.send("Record is not available");
        }
      } else {
        res.send("Error generated " + err);
      }
    }
  );
};

//req.body.cart is an object of product objects
//req.body.userId is the _id of the the user who owns the cart
let createCart = (req, res) => {
  UserModel.updateOne(
    { _id: req.body.userId },
    { $set: { cart: req.body.cart } },
    (err, result) => {
      if (!err) {
      }
    }
  );
};

//Gets the user object from the other function
//Then retrieves just the cart field and returns it
let getCart = (req, res) => {
    let user = getUser()
}

let updateAccountFunds= (req,res)=> {
  let aid = req.body.aid;
  let updatedAmount = req.body.amount;
  UserModel.updateOne({accountNumber:aid},{$set:{amount:updatedAmount}},(err,result)=> {
      if(!err){
        console.log(result)
          if(result.nModified>0){
                  res.send("Record updated succesfully")
          }else {
                  res.send("Record is not available");
          }
      }else {
          res.send("Error generated "+err);
      }
  })

}


module.exports = { getUser, updateUserInfo,updateAccountFunds };



