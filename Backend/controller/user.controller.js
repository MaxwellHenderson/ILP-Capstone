let UserModel = require("../model/user.model.js");

let getFunds = (req, res) => {
  // console.log("getting funds");
  UserModel.findById(req.body._id, (err, result) => {
    if (err) {
      throw err;
    }
    res.json({ funds: result.fund });
  });
};

let getUser = (req, res) => {
  console.log("Getting user");
  // console.log(req.body);
  let userName = req.body._id;
  let userPassword = req.body.userPassword;

  UserModel.findOne({ _id: userName }, (err, result) => {
    if (err) throw err;

    if (!result) {
      console.log("No username");
      return res.json({ success: false, msg: "Incorrect User Name" });
    } else {
      if (result.userPassword == userPassword) {
        res.json({
          success: true,
          user: {
            _id: result._id,
            userEmail: result.userEmail,
            userName: result.userName,
            userLastName: result.userLastName,
            userDob: result.userDob,
            userAddress: result.userAddress,
            fund: result.fund,
          },
        });
      } else {
        console.log("Wrong pass");
        return res.json({ success: false, msg: "Incorrect password" });
      }
    }
  });
};

let addUser = (req, res) => {
  console.log("adding user");
  // console.log(req.body);
  let user = new UserModel({
    _id: req.body.uid,
    userName: req.body.userName, //firstname
    userLastName: req.body.userLastName, //lastname
    userPassword: req.body.userPassword, //chaged from "password" to "req.body.userPassword"
    accountNumber: 123456789, //Dummy bank account number, same for all users because we are absolutely not implementing a seperate bank system like what?
    fund: 1000,
    userEmail: req.body.userEmail,
    userDob: req.body.userDob, //user DOB
    userPhone: req.body.userPhone,
    userAddress: req.body.userAddress,
    cart: [],
    accountLocked: false,
    ticketId: 0,
  });
  user.save((err, result) => {
    if (!err) {
      res.json({ message: "Record stored successfully ", error: false });
    } else {
      console.log("Error");
      console.log(err);
      res.json({ error: true, message: err });
    }
  });
};

let updateUserInfo = (req, res) => {
  let Uid = req.body.uid;
  console.log(Uid);
  console.log("entered");
  let updatedPassword = req.body.userPassword;
  let updatedPhone = req.body.userPhone;
  let updatedEmail = req.body.userEmail;
  let updatedAddress = req.body.userAddress;

  UserModel.updateOne(
    { _id: Uid },
    {
      $set: {
        userPassword: updatedPassword,
        userPhone: updatedPhone,
        userEmail: updatedEmail,
        userAddress: updatedAddress,
      },
    },
    (err, result) => {
      if (!err) {
        if (result.nModified > 0) {
          res.send("Record updated succesfully");
        } else {
          res.send("Record did not store");
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
  let user = getUser();
};

let updateAccountFunds = (req, res) => {
  let aNum = req.body.aid;
  let id=req.body._id
  let updatedAmount = req.body.fund;
  if (updatedAmount < 0) {
    res.send("You can't add negative money silly!");
  } else {
    UserModel.find({ accountNumber: aNum,_id:id }, (err, data) => {
      if (!err && data.length != 0) {
        console.log(data);
        UserModel.updateOne(
          { accountNumber: aNum,_id:id },
          { $inc: { fund: +updatedAmount } },
          (err, result) => {
            if (!err) {
              console.log(result);
              if (result.nModified > 0) {
                res.send("Funds have been added to account");
              } else {
                res.send("No Sufficient Funds");
              }
            } else {
              res.send("Error generated " + err);
            }
          }
        );
      } else {
        res.send("Invalid account Number");
      }
    });
  }
};

let subtractFunds = (req, res) => {
  console.log("\n\nSubtracting funds");
  let amount = req.body.amount;
  let _id = req.body._id;

  UserModel.updateOne(
    { _id: _id },
    { $inc: { fund: -amount } },
    (err, result) => {
      if (!err) {
        console.log(result);
        if (result.nModified > 0) {
          console.log("Funds have been subtracted succesffuly");
        } else {
          console.log("Funds not subtracted");
        }
      } else {
        console.log("Error " + err);
      }
    }
  );
};

let updateAccountFundsByID = (req, res) => {
  console.log("\nUpdating funds by id\n");
  let userid = req.body.userId;
  let updatedAmount = req.body.fund;
  UserModel.updateOne(
    { _id: userid },
    { $inc: { fund: updatedAmount } },
    (err, result) => {
      if (!err) {
        console.log(result);
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

let submitLockedAccountTicket = (req, res) => {
  console.log("Submit ticket");
  console.log(req.body);
  UserModel.updateOne(
    { _id: req.body.userId },
    { $set: { accountLocked: true } },
    (result) => console.log(result)
  );
};

let getLockedUser = (req, res) => {
  UserModel.find({ accountLocked: true }, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
    }
  });
};

let unlockUser = (req, res) => {
  console.log(req.body);
  let userid = req.body._id;
  let accountLocke = false;
  UserModel.updateOne(
    { _id: userid },
    { $set: { accountLocked: accountLocke } },
    (err, result) => {
      if (!err) {
        console.log(result);
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

module.exports = {
  getFunds,
  subtractFunds,
  getUser,
  updateUserInfo,
  updateAccountFunds,
  addUser,
  updateAccountFundsByID,
  getLockedUser,
  unlockUser,
  submitLockedAccountTicket,
};
