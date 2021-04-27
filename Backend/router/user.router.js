let express = require("express");
let router = express.Router();
let UserController=require("../controller/user.controller.js");

//router.get("",UserController.getAdmin);
router.put("/updateProfile",UserController.updateUserInfo);
router.put("/updateFunds",UserController.updateAccountFunds);


module.exports=router;