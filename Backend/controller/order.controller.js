let OrderModel = require("../model/order.model.js");

let updateOrderStatus = (req, res) => {
  let orderId = req.params._id;
  let orderStatus = req.params.orderStatus;
  let reasonForCancellation = req.params.reasonForCancellation;

  OrderModel.updateOne(
    { _id: orderId },
    {
      $set: {
        orderStatus: orderStatus,
        reasonForCancellation: reasonForCancellation,
      },
    },
    (err, result) => {
      if (!err) {
        if (result.nModified > 0) {
          res.send("Record updated succesfully");
        } else {
          res.send("Record is not available");
        }

      }
    }
)}
let getOrderMonth=(req,res)=>{
    OrderModel.find({
        orderDate:{
            $gte:new Date(new Date()-30*60*60*24*1000)
        }
    },(err,data)=>{
      if (!err) {
        res.json(data);
      }
    })
}
let getOrderDaily=(req,res)=>{
    OrderModel.find({
        orderDate:{
            $gte:new Date(new Date()-1*60*60*24*1000)
        }
    },(err,data)=>{
      if (!err) {
        res.json(data);
      }
    })
}

let getOrderById = (req, res) => {
  let oid = req.params.oid;

  OrderModel.find({ _id: oid }, (err, data) => {
    if (!err) {
      res.json(data);
    }
  });
};

let getOrderWeek = (req, res) => {
  OrderModel.find({
    orderDate: {
      $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000),
    },
  },(err,data)=>{
    if (!err) {
      res.json(data);
    }
  });
};

let getOrderByUser = (req, res) => {
  let user = req.params.userName;

  OrderModel.find({ userName: user }, (err, data) => {
    if (!err) {
      res.json(data);
    }
  });
};

let getOrders = (req, res) => {
  
  OrderModel.find({}, (err, data) => {
    if (!err) {
      console.log(data)
      res.json(data);
    }
  });
};


let placeOrder = (req, res) => {
  console.log("placing order");
  console.log(req.body);
  console.log(req.body.cart);
  let order = new OrderModel(req.body);
  order.save((err, result) => {
    if (!err) {
      res.send("Order stored succesfully ");
    } else {
      res.send("Order didn't store " + err);
    }
  });
};


module.exports={updateOrderStatus,getOrderById,getOrderWeek,getOrderMonth,getOrderDaily,placeOrder,getOrderByUser,getOrders};
