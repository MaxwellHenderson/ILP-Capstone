let express = require("express");
let router = express.Router();
let UserController=require("../controller/user.controller.js");


router.get("/getUser",UserController.getUser);
router.put("/updateUserPassword",UserController.updateUserInfo);

router.put("/updateFunds",UserController.updateAccountFunds);



module.exports=router;