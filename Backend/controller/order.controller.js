let OrderModel = require("../model/order.model.js");
let ProductModel = require("../model/product.model.js");

let updateOrderStatus = (req, res) => {
  console.log("updating Order");
  console.log(req.body);
  let orderId = req.body._id;
  let orderStatus = req.body.orderStatus;
  let reasonForCancellation = req.body.reasonForCancellation;

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
  );
};
let getOrderMonth = (req, res) => {
  OrderModel.find(
    {
      orderDate: {
        $gte: new Date(new Date() - 30 * 60 * 60 * 24 * 1000),
      },
    },
    (err, data) => {
      if (!err) {
        res.json(data);
      }
    }
  );
};
let getOrderDaily = (req, res) => {
  OrderModel.find(
    {
      orderDate: {
        $gte: new Date(new Date() - 1 * 60 * 60 * 24 * 1000),
      },
    },
    (err, data) => {
      if (!err) {
        res.json(data);
      }
    }
  );
};

let getOrderById = (req, res) => {
  let oid = req.params.oid;

  OrderModel.find({ _id: oid }, (err, data) => {
    if (!err) {
      res.json(data);
    }
  });
};

let getOrderWeek = (req, res) => {
  OrderModel.find(
    {
      orderDate: {
        $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000),
      },
    },
    (err, data) => {
      if (!err) {
        res.json(data);
      }
    }
  );
};

let getOrderByUser = (req, res) => {
  console.log("entred.......");
  console.log(req.params.uid);
  let Uid = req.params.uid;

  OrderModel.find({ userId: Uid }, (err, data) => {
    if (!err) {
      console.log(data);
      res.json(data);
    }
  });
};

let getOrders = (req, res) => {
  OrderModel.find({}, (err, data) => {
    if (!err) {
      console.log(data);
      res.json(data);
    }
  });
};

let placeOrder = (req, res) => {
  //Get the size of the db to increment order number
  OrderModel.countDocuments({}, (err, count) => {
    if (!err) {
      //After getting count, can set orderId
      req.body._id = count + 1;

      let order = new OrderModel(req.body);
      order.save((err, result) => {
        if (!err) {
          res.send("Order stored succesfully ");
        } else {
          res.send("Order didn't store " + err);
        }
      });
    } else {
      console.log("Error in placing order" + err);
    }
  });
};

let productReports = (req, res) => {
  let pName=req.body.pName
  ProductModel.find({productName:pName}, (err, result) => {
    if (!err) {
      res.json(result);
      console.log(result);
    }
  });
};

let costumerDetails = (req, res) => {
  let uName=req.body.Uid
  console.log(req.body)
  //let idNum=parseInt(uid)
  OrderModel.find({userName:uName}, (err, result) => {
    if (!err) {
      res.json(result);
      console.log(result);
    }
  });
};

module.exports = {
  updateOrderStatus,
  getOrderById,
  getOrderWeek,
  getOrderMonth,
  getOrderDaily,
  placeOrder,
  getOrderByUser,
  getOrders,
  costumerDetails,
  productReports,
};
