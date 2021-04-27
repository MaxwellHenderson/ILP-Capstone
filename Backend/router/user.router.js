let express = require("express");
let router = express.Router();
let UserController=require("../controller/user.controller.js");


router.get("/getUser",UserController.getUser);
router.put("/updateUserInfo",UserController.updateUserInfo);
router.put("/updateAccountFunds",UserController.updateAccountFunds);
router.post("/addUser",UserController.addUser);
router.put("/updateProfile",UserController.updateUserInfo);




module.exports=router;