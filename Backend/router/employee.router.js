let express = require("express");
let router = express.Router();
let EmployeeController=require("../controller/employee.controller.js");

router.post("/getEmployee",EmployeeController.getEmployee);
router.put("/updateEmployeePassword",EmployeeController.updateEmployeePassword);
router.post("/addEmployee",EmployeeController.addEmployee);
router.delete("/deleteEmployee/:empID",EmployeeController.removeEmployee);
router.put("/updateCount",EmployeeController.updateLoginCount);
router.get("/getAllEmployees",EmployeeController.getAllEmployees);

module.exports=router;