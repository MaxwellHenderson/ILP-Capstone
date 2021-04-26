let express = require("express");
let router = express.Router();
let AdminController=require("../controller/admin.controller.js");

router.get("/getAdmin",AdminController.getAdmin);

module.exports=router;