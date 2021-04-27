let express = require("express");
let router = express.Router();
let UserController=require("../controller/user.controller.js");


router.get("/getUser",UserController.getUser);

router.put("/updateFunds",UserController.updateAccountFunds);
router.post("/addUser",UserController.addUser);

router.put("/updateFundsByID",UserController.updateAccountFundsByID);

router.put("/updateProfile",UserController.updateUserInfo);




module.exports=router;