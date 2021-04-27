let express = require("express");
let router = express.Router();
let OrderController=require("../controller/order.controller.js");


router.put("/updateOrderStatus",OrderController.updateOrderStatus);

router.put("",OrderController.updateOrderStatus);
router.get("",OrderController.getOrderById)


module.exports=router;