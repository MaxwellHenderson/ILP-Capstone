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
  console.log(req.params.uid);
  let Uid = req.params.uid;

  OrderModel.find({ userId: Uid }, (err, data) => {
    if (!err) {
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

module.exports = {
  updateOrderStatus,
  getOrderById,
  getOrderWeek,
  getOrderMonth,
  getOrderDaily,
  placeOrder,
  getOrderByUser,
  getOrders,
};
