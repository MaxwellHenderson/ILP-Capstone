let ProductModel = require("../model/product.model.js");

let addProduct = (req, res) => {
  let product = new ProductModel({
    _id: req.body.pid,
    productName: req.body.productName,
    productPrice: req.body.price,
    quantity: req.body.quantity,
  });
  product.save((err, result) => {
    if (!err) {
      res.send("Record stored successfully ");
    } else {
      res.send("Record didn't store " + err);
    }
  });
};

let getMultipleProducts = (req, res) => {
  console.log(req.body);
  ProductModel.find({ _id: { $in: req.body.products } }, (err, docs) => {
    console.log(docs);
    res.json({ products: docs });
  });
};

//Get all the product entries in the database as an array of objects
let getProducts = (req, res) => {
  console.log("getting products");
  ProductModel.find({}, (err, result) => {
    if (!err) {
      console.log(result);
      res.json({ products: result });
    }
  });
};

//Return the quantity value of the given product
let getProductQuantity = (req, res) => {
  let pid = req.params.pid;
  ProductModel.findById({ productId: pid }, (err, result) => {
    if (!err) {
      res.send(result.quantity);
    }
  });
};

let deleteProduct = (req, res) => {
  let pid = req.params.pid;
  ProductModel.deleteOne({ _id: pid }, (err, result) => {
    if (!err) {
      if (result.deletedCount > 0) {
        res.send("Record deleted successfully");
      } else {
        res.send("Record not present");
      }
    } else {
      res.send("Error generated " + err);
    }
  });
};

let updateProduct = (req, res) => {
  console.log(req.body);
  let pid = req.body.pid;
  let updatedPrice = req.body.price;
  let updatedQuantity = req.body.quantity;
  ProductModel.updateOne(
    { _id: pid },
    { $set: { productPrice: updatedPrice, quantity: updatedQuantity } },
    (err, result) => {
      if (!err) {
        if (result.nModified > 0) {
          res.send("Record updated succesfully");
        } else {
          res.send("Record is not available");
        }
      } else {
        res.send("Error generated " + err);
      }
    }
  );
};

let reduceManyProductQuantity = (req, res) => {
  console.log("Reducing Many Products");
  console.log(req.body);
  let productInfo = req.body.productInfo;
  productInfo.forEach((product) => {
    ProductModel.updateOne(
      { _id: product.productId },
      { $inc: { quantity: -product.productQuantity } },
      (result) => {
        console.log(result);
      }
    );
  });
};

module.exports = {
  getMultipleProducts,
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  getProductQuantity,
  reduceManyProductQuantity,
};
