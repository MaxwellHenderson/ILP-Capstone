let OrderModel=require("../model/order.model.js");

let updateOrderStatus=(req,res)=>{
    let orderId=req.params._id;
    let orderStatus=req.params.orderStatus;
    let reasonForCancellation=req.params.reasonForCancellation

    OrderModel.updateOne({_id:orderId},{$set:{orderStatus:orderStatus,reasonForCancellation:reasonForCancellation}},(err,result)=>{
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

module.exports=updateOrderStatus;