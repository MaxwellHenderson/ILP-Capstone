let express = require("express");
let router = express.Router();
let OrderController = require("../controller/order.controller.js");

router.post("/updateOrderStatus", OrderController.updateOrderStatus);
router.post("/placeOrder", OrderController.placeOrder);
router.post("", OrderController.updateOrderStatus);
router.get("", OrderController.getOrderById);
router.get("/getOrders", OrderController.getOrders);
router.get("/getOrderByUser/:uid", OrderController.getOrderByUser);

router.get("/getReportWeekly", OrderController.getOrderWeek);
router.get("/getReportMonthly", OrderController.getOrderMonth);
router.get("/getReportDaily", OrderController.getOrderDaily);

router.get("/getProductReports", OrderController.productReports);
router.post("/getCustomerReports", OrderController.costumerDetails);

module.exports = router;
