let express = require("express");
let router = express.Router();
let UserController = require("../controller/user.controller.js");

router.post("/getFunds", UserController.getFunds);
router.post("/subtractFunds", UserController.subtractFunds);
router.post("/getUser", UserController.getUser);
router.put("/updateUserInfo", UserController.updateUserInfo);
router.put("/updateAccountFunds", UserController.updateAccountFunds);
router.get("/getLockedUser", UserController.getLockedUser);

router.post("/addUser", UserController.addUser);

router.post("/updateAccountFundsByID", UserController.updateAccountFundsByID);
router.put("/updateProfile", UserController.updateUserInfo);
router.post(
  "/submitLockedAccountTicket",
  UserController.submitLockedAccountTicket
);
router.put("/unlockUser", UserController.unlockUser);

module.exports = router;
