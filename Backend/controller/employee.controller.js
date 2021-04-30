let EmployeeModel = require("../model/employee.model.js");

let getEmployee = (req, res) => {
  let newname = req.body.userName;
  let newpassword = req.body.userPassword;

  EmployeeModel.findOne(
    { userName: newname, userPassword: newpassword },
    (err, data) => {
      if (!err && data != null) {
        res.json({ data: data });
      } else {
        res.send("invalid");
      }
    }
  );
};

let getAllEmployees=(req,res)=>{
  EmployeeModel.find({},(err,data)=>{
    if(!err){
      res.json(data);
    }
  })
}

let addEmployee = (req, res) => {
  let employee = new EmployeeModel({
    _id: req.body.eid,
    userName: req.body.userName, //firstname
    userLastName: req.body.userLastName,
    userEmail: req.body.userEmail,
    userPassword: req.body.userPassword, ////chaged from "password" to "req.body.userPassword"
    loginCount: 0,
  });

  employee.save((err, result) => {
    if (!err) {
      console.log("------ " + result);
      res.send("Record stored successfully ");
    } else {
      console.log(err);
      res.send("Record didn't store ");
      res.send(err);
    }
  });
};

let removeEmployee = (req, res) => {
  let empID = req.params.empID;
  EmployeeModel.deleteOne({ _id: empID }, (err, result) => {
    if (!err) {
      if (result.deletedCount > 0) {
        res.send("Record deleted successfully");
      } else {
        res.send("Record not present");
      }
    } else {
      res.send("Error generated " + err);
    }
  });
};

let updateEmployeePassword = (req, res) => {
  let empID = req.body.empID;
  let newPassword = req.body.password;
  EmployeeModel.updateOne(
    { _id: empID },
    { $set: { userPassword: newPassword } },
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
let updateLoginCount = (req, res) => {
  let username = req.body.userName;
  let userpassword = req.body.userPassword;
  EmployeeModel.findOne(
    { userName: username, userPassword: userpassword },
    (err, data) => {
      console.log(data);
      if (!err && data != null) {
        EmployeeModel.updateOne(
          { userName: username, userPassword: userpassword },
          { $set: { loginCount: data.loginCount + 1 } },
          (err, result) => {
            if (!err && data != null) {
              res.json({ loginCount: data.loginCount + 1 });
              console.log(result);
            }
          }
        );
      }
    }
  );
};

module.exports = {
  getEmployee,
  addEmployee,
  removeEmployee,
  updateEmployeePassword,
  updateLoginCount,
  getAllEmployees
};
