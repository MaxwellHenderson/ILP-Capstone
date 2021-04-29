let express = require("express");
let router = express.Router();
let ProductController = require("../controller/product.controller.js");

router.get("/getProducts", ProductController.getProducts);
router.post("/getMultipleProducts", ProductController.getMultipleProducts);
router.post("/addProduct", ProductController.addProduct);
router.delete("/deleteProduct/:pid", ProductController.deleteProduct);
router.put("/updateProduct", ProductController.updateProduct);
router.get("/getProductQuantity/:pid", ProductController.getProductQuantity);
router.post(
  "/reduceManyProductQuantity",
  ProductController.reduceManyProductQuantity
);

module.exports = router;
