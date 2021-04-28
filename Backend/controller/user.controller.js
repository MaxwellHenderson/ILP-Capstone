let UserModel = require("../model/user.model.js");

// let getUser = (req, res) => {
//   console.log("Getting user");
//   console.log(req.body);
//   let userName = req.body.UserName;
//   let userPassword = req.body.UserPassword;

//   UserModel.find(
//     { $and: { userName: userName, userPassword: userPassword } },
//     (err, data) => {
//       console.log("Data");
//       console.log(data);
//       if (!err) {
//         if (data.length > 0) {
//           console.log(data);
//           // res.json(data);
//           res.json({
//             success: true,
//             user: {
//               _id: data.uid,
//               userEmail: data.userEmail,
//               userName: data.userName,
//               userLastName: data.userLastName,
//               userDob: data.userDob,
//               userAddress: data.userAddress,
//               fund: data.fund,
//             },
//           });
//         }
//       } else {
//         return res.json({ success: false, msg: "Incorrect password" });
//       }
//     }
//   );
// };

let getUser = (req, res) => {
  console.log("Getting user");
  console.log(req.body);
  let userName = req.body.userName;
  let userPassword = req.body.userPassword;

  UserModel.findOne({ _id: userName }, (err, result) => {
    if (err) throw err;
    console.log(result);
    if (!result) {
      console.log("No username");
      return res.json({ success: false, msg: "Incorrect User Name" });
    } else {
      if (result.userPassword == userPassword) {
        console.log("Correct");
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
  console.log(req.body);
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
      res.json({message:"Record stored successfully ",
      error:false
    });
    } else {
      console.log("Error");
      console.log(err);
      res.json({error:true,message:err})
    }
  });
};

let updateUserInfo = (req, res) => {
  let Uid = req.body.uid;
  let updatedPassword = req.body.userPassword;
  let updatedPhone = req.body.userPhone;
  let updatedEmail = req.body.userEmail;
  let updatedAddress = req.body.userAddress;
  UserModel.find((er, data) => {
    console.log(data);
  });
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
          res.send("Please fill all the details");
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
  let updatedAmount = req.body.fund;
  if (updatedAmount < 0) {
    res.send("You can't add negative money silly!");
  } else {
    UserModel.find({ accountNumber: aNum }, (err, data) => {
      if (!err && data.length != 0) {
        console.log(data);
        UserModel.updateOne(
          { accountNumber: aNum },
          { $set: { fund: data[0].fund + updatedAmount } },
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

let updateAccountFundsByID = (req, res) => {
  let userid = req.body.userid;
  let updatedAmount = req.body.amount;
  UserModel.updateOne(
    { _id: userid },
    { $set: { fund: updatedAmount } },
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

let getLockedUser = (req, res) => {
  UserModel.find({ accountLocked: true }, (err, data) => {
    if (!err) {
    } else {
    }
  });
};

module.exports = {
  getUser,
  updateUserInfo,
  updateAccountFunds,
  addUser,
  updateAccountFundsByID,
  getLockedUser,
};
