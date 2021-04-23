let express = require("express");
let router = express.Router();
let RequestController=require("../controller/request.controller.js");

router.get("",RequestController.getRequests);
router.post("",RequestController.addRequest);
router.put("",RequestController.updateRequest);

module.exports=router;