let express = require("express");
let router = express.Router();
let EmployeeController=require("../controller/employee.controller.js");

router.get("",EmployeeController.getEmployee);
router.put("",EmployeeController.updateEmployeePassword);
router.post("",EmployeeController.addEmployee);
router.delete("",EmployeeController.removeEmployee);

module.exports=router;