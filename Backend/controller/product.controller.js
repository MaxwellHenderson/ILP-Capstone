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

//Get all the product entries in the database as an array of objects
let getProducts = (req, res) => {
  // ProductModel.find({},(err,result)=> {
  //     if(!err){
  //         res.json(result);
  //     }
  // })

  //Dummy return value for testing.
  let dummyProducts = [
    {
      productId: 123,
      productName: "Mouse",
      productPrice: 40,
      quantity: 10,
    },
    {
      productId: 222,
      productName: "Monitor",
      productPrice: 33.75,
      quantity: 5,
    },
    {
      productId: 444,
      productName: "Router",
      productPrice: 110.56,
      quantity: 20,
    },
    {
      productId: 555,
      productName: "Modem",
      productPrice: 99.99,
      quantity: 25,
    },
  ];

  res.json(dummyProducts);
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
  ProductModel.deleteOne({ productId: pid }, (err, result) => {
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
  let pid = req.body.pid;
  let updatedPrice = req.body.price;
  let updatedQuantity = req.body.quantity;
  ProductModel.updateOne(
    { productId: pid },
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

module.exports = {
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  getProductQuantity,
};
