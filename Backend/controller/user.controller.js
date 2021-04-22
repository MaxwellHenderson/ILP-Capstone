let UserModel=require("../model/user.model.js");

let getUser=(req,res)=>{
    let userName=req.params.UserName;
    let userPassword=req.params.UserPassword;

    UserModel.find({"userName":userName,"userPassword":userPassword},(err,data)=>{
        if(!err){

        }else{

        }
    })
}

let updateUserInfo= (req,res)=> {
    let userName = req.body.userName;
    let updatedPassword = req.body.userPassword;
    UserModel.updateOne({userName:userName},{$set:{userPassword:updatedPassword}},(err,result)=> {
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

module.exports={getUser, updateUserInfo};