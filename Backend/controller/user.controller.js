let UserModel = require("../model/user.model.js");


let getUser = (req, res) => {
  let userName = req.params.UserName;
  let userPassword = req.params.UserPassword;

  UserModel.find(
    { userName: userName, userPassword: userPassword },
    (err,data)=>{
      if (!err) {
       // res.json(data);
        res.json({
          success:true,
          user: {
              _id:result._id,
              userEmail:result.userEmail,
              userName:result.userName,
              userLastName:result.userLastName,
              userDob:result.userDob,
              userAddress:result.userAddress,
              fund:result.fund
          }
        })
      }else {
        return res.json({success:false, msg:"Incorrect password"})
        }
    }
  )};


/*

let getUser = (req,res) => {
    let userName = req.body.UserName;
    let userPassword = req.body.UserPassword;

UserModel.findOne({userName: userName}, (err,result)=>{
    if(err)throw err;
    if(!result){
        return res.json({success:false, msg:"Incorrect User Name"})
    }else{
        if(result.password == userPassword){
            res.json({
                success:true,
                user: {
                    _id:result._id,
                    userEmail:result.userEmail,
                    userName:result.userName,
                    userLastName:result.userLastName,
                    userDob:result.userDob,
                    userAddress:result.userAddress,
                    fund:result.fund
                }
            })
        }else {
            return res.json({success:false, msg:"Incorrect password"})
        }
    }
})
}*/


let addUser = (req, res) => {
  console.log("adding user");
  console.log(req.body);
  let user = new UserModel({
    _id: req.body.uid,
    userName: req.body.userName, //firstname
    userLastName: req.body.userLastName, //lastname
    userPassword: req.body.userPassword, //chaged from "password" to "req.body.userPassword"
    accountNumber: req.body.accountNumber,
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
      res.send("Record stored successfully ");
    } else {
      console.log("Error");
      console.log(err);
      res.send("Record didn't store ");
    }
  });
};

let updateUserInfo = (req, res) => {
  let userName = req.body.userName;
  let updatedPassword = req.body.userPassword;
  let updatedPhone = req.body.userPhone;
  let updatedEmail = req.body.userEmail;
  let updatedAddress = req.body.userAddress;
  UserModel.find((er, data) => {
    console.log(data);
  });
  UserModel.updateOne(
    { userName: userName },
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

let updateAccountFunds= (req,res)=> {
  let aNum = req.body.aid;
  let updatedAmount = req.body.fund;
  if(updatedAmount<0){res.send("No Sufficient Funds")}else{
  UserModel.find({accountNumber:aNum},(err,data)=>{
    if(!err && data.length!=0){

      console.log(data)
      console.log("888999")
      UserModel.updateOne({accountNumber:aNum},{$set:{fund:(data[0].fund)+updatedAmount}},(err,result)=> {
        if(!err){
          console.log(result)
            if(result.nModified>0){
                    res.send("Funds have been added to account")
            }else {
                    res.send("No Sufficient Funds");
            }
        }else {
            res.send("Error generated "+ err);
        }
    })
}else{
  res.send("Invalid account Number")
}
    
})
  }


}

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
