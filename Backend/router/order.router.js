let express = require("express");
let router = express.Router();
let OrderController = require("../controller/order.controller.js");

router.put("/updateOrderStatus", OrderController.updateOrderStatus);
router.post("/placeOrder", OrderController.placeOrder);
router.put("", OrderController.updateOrderStatus);
router.get("", OrderController.getOrderById);
router.get("/getOrderByUser", OrderController.getOrderByUser);


router.get("",OrderController.getOrderWeek)
router.get("",OrderController.getOrderMonth)
router.get("",OrderController.getOrderYear)


module.exports=router;

