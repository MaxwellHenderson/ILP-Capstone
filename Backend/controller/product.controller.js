let ProductModel=require("../model/product.model.js");


let addProduct=(req,res)=>{
    let product=new ProductModel({
        productId:req.body.pid,
        productName:req.body.productName,
        productPrice:req.body.price,
        quantity:req.body.quantity
    });
    product.save((err,result)=> {
        if(!err){
            res.send("Record stored successfully ")
        }else {
            res.send("Record didn't store ");
        }
    })
}

let viewProducts=(req,res)=>{
    ProductModel.find({},(err,result)=> {
        if(!err){
            res.json(result);
        }
    })
}

let deleteProduct=(req,res)=>{
    let pid = req.params.pid;
    ProductModel.deleteOne({productId:pid},(err,result)=> {
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

let updateProduct=(req,res)=>{
    let pid = req.body.pid;
    let updatedPrice = req.body.price;
    let updatedQuantity = req.body.quantity;
    ProductModel.updateOne({productId:pid},{$set:{productPrice:updatedPrice,quantity:updatedQuantity}},(err,result)=> {
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

module.exports={addProduct,viewProducts,deleteProduct,updateProduct};