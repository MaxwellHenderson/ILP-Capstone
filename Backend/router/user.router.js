let express = require("express");
let router = express.Router();
let UserController = require("../controller/user.controller.js");

router.post("/getUser", UserController.getUser);
router.put("/updateUserInfo", UserController.updateUserInfo);
router.put("/updateAccountFunds", UserController.updateAccountFunds);
router.get("/getLockedUser", UserController.getLockedUser);

router.post("/addUser", UserController.addUser);

router.put("/updateFundsByID", UserController.updateAccountFundsByID);
router.put("/updateProfile", UserController.updateUserInfo);

module.exports = router;
