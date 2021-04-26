let express = require("express");
let router = express.Router();
let RequestController=require("../controller/request.controller.js");

router.get("/getRequest",RequestController.getRequests);
router.post("/addRequest",RequestController.addRequest);
router.put("/updateRequest",RequestController.updateRequest);

module.exports=router;