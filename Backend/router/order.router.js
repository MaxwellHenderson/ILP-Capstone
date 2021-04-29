let express = require("express");
let router = express.Router();
let OrderController = require("../controller/order.controller.js");

router.post("/updateOrderStatus", OrderController.updateOrderStatus);
router.post("/placeOrder", OrderController.placeOrder);
router.post("", OrderController.updateOrderStatus);
router.get("", OrderController.getOrderById);
router.get("/getOrders", OrderController.getOrders);
router.get("/getOrderByUser/:uid", OrderController.getOrderByUser);

router.get("/getReportDailyWeekly", OrderController.getOrderWeek);
router.get("/getReportMothly", OrderController.getOrderMonth);
router.get("/getReportDaily", OrderController.getOrderDaily);

module.exports = router;
