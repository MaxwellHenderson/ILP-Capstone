let express = require("express");
let router = express.Router();
let EmployeeController=require("../controller/employee.controller.js");

router.post("/getEmployee",EmployeeController.getEmployee);
router.put("",EmployeeController.updateEmployeePassword);
router.put("/updateCount",EmployeeController.updateLoginCount);
router.post("",EmployeeController.addEmployee);
router.delete("",EmployeeController.removeEmployee);

module.exports=router;