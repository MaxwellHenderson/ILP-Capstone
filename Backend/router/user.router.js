let express = require("express");
let router = express.Router();
let UserController=require("../controller/user.controller.js");

router.get("/getUser",UserController.getUser);
router.put("/updateUserPassword",UserController.updateUserInfo);

module.exports=router;