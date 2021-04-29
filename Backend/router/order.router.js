let express = require("express");
let router = express.Router();
let OrderController = require("../controller/order.controller.js");

router.put("/updateOrderStatus", OrderController.updateOrderStatus);
router.post("/placeOrder", OrderController.placeOrder);
router.put("", OrderController.updateOrderStatus);
router.get("", OrderController.getOrderById);
router.get("", OrderController.getOrders);
router.get("/getOrderByUser", OrderController.getOrderByUser);


router.get("/getReportDailyWeekly",OrderController.getOrderWeek)
router.get("/getReportMothly",OrderController.getOrderMonth)
router.get("/getReportDaily",OrderController.getOrderDaily)

router.get("/getProductReports",OrderController.ProductReports)
router.get("/getCustomerReports",OrderController.CustomerReports)

module.exports=router;

