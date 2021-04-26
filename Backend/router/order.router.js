let express = require("express");
let router = express.Router();
let OrderController=require("../controller/order.controller.js");

router.put("/updateOrderStatus",OrderController.updateOrderStatus);

module.exports=router;