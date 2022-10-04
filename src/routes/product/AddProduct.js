const Product = require("../../models/Product");

class AddProduct {
  constructor() {
    this.type = "post";
    this.path = "/product";
  }
  attach(express) {
    express[this.type](this.path, this.endpoint);
  }
  async endpoint(req, res) {
    try {
      const payload = req.body;
      const product = new Product(payload);
      await product.save();
      res.status(201).end();
      return res.end();
    } catch (err) {
      console.debug(err);
    }
  }
}

exports.AddProduct = AddProduct;
