let express = require("express");
let router = express.Router();
let UserController=require("../controller/user.controller.js");

router.get("",UserController.getAdmin);
router.put("",UserController.updateUserInfo);

module.exports=router;