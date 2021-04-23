let express = require("express");
let router = express.Router();
let OrderController=require("../controller/order.controller.js");

router.put("",OrderController.updateOrderStatus);

module.exports=router;