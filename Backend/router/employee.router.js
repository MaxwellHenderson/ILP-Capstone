let express = require("express");
let router = express.Router();
let EmployeeController=require("../controller/employee.controller.js");

router.get("/getEmployee",EmployeeController.getEmployee);
router.put("/updateEmployee",EmployeeController.updateEmployeePassword);
router.post("/addEmployee",EmployeeController.addEmployee);
router.delete("/deleteEmployee/:empID",EmployeeController.removeEmployee);

module.exports=router;