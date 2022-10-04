const Product = require("../../models/Product");

class GetProduct {
  constructor() {
    this.type = "get";
    this.path = "/product";
  }
  attach(express) {
    express[this.type](this.path, this.endpoint);
  }
  async endpoint(req, res) {
    try {
      const products = await Product.find({});
      res.status(200);
      res.json(products);
      return res.end();
    } catch (err) {
      console.debug(err);
    }
  }
}

exports.GetProduct = GetProduct;
