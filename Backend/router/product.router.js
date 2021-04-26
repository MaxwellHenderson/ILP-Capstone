let express = require("express");
let router = express.Router();
let ProductController=require("../controller/product.controller.js");

router.get("/getProducts",ProductController.viewProducts);
router.post("/addProduct",ProductController.addProduct);
router.delete("/deleteProduct/:pid",ProductController.deleteProduct);
router.put("/updateProduct",ProductController.updateProduct)

module.exports=router;