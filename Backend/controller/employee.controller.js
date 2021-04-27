let EmployeeModel=require("../model/employee.model.js");

let getEmployee=(req,res)=>{
    let userName=req.params.userName;
    let userPassword=req.params.userPassword;

    EmployeeModel.find({"userName":userName,"userPassword":userPassword},(err,data)=>{
        if(!err){
                res.send("Login Success")
        }else{
         res.send("Invalid Credentials ...........")
        }
    })
}

let addEmployee=(req,res)=>{
    let employee=new EmployeeModel({
        _id:req.body.eid,
        userName:req.body.userName, //firstname
        userLastName:req.body.userLastName,
        userEmail:req.body.userEmail,
        userPassword:req.body.userPassword ////chaged from "password" to "req.body.userPassword"
    });
    employee.save((err,result)=> {
        if(!err){
            res.send("Record stored successfully ")
        }else {
            res.send("Record didn't store ");
        }
    })
}

let removeEmployee=(req,res)=>{
    let empID=req.params.empID;
    EmployeeModel.deleteOne({_id:empID},(err,result)=> {
        if(!err){
                if(result.deletedCount>0){
                    res.send("Record deleted successfully")
                }else {
                    res.send("Record not present");
                }
        }else {
            res.send("Error generated "+err);
        }
    })
}

let updateEmployeePassword=(req,res)=>{
    let empID = req.body.empID;
    let newPassword = req.body.password;
    EmployeeModel.updateOne({_id:empID},{$set:{userPassword:newPassword}},(err,result)=> {
        if(!err){
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

module.exports={getEmployee,addEmployee,removeEmployee,updateEmployeePassword};