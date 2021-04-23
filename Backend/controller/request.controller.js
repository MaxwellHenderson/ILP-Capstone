let RequestModel=require("../model/request.model.js");

let getRequests=(req,res)=>{
    RequestModel.find({},(err,data)=>{
        if(!err){

        }else{

        }
    })
}
let addRequest=(req,res)=>{
    let request=new RequestModel({
        _id:req.body.rid,
        request:req.body.request,
        requestStatus:"Unfulfilled"
    });
    request.save((err,result)=> {
        if(!err){
            res.send("Record stored successfully ")
        }else {
            res.send("Record didn't store ");
        }
    })
}
let updateRequest=(req,res)=>{
    let requestId=req.params.rid;
    let requestStatus=req.params.status;
    RequestModel.updateOne({_id:requestId},{$set:{requestStatus:requestStatus}},(err,result)=> {
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

module.exports={getRequests,addRequest,updateRequest};