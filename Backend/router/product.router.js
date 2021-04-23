let express = require("express");
let router = express.Router();
let ProductController=require("../controller/product.controller.js");

router.get("",ProductController.viewProducts);
router.post("",ProductController.addProduct);
router.delete("",ProductController.deleteProduct);
router.put("",ProductController.updateProduct)

module.exports=router;