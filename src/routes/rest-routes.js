const express = require("express");
const router = express.Router();

const healthCheck = require("./health-check/HealthCheck");
const getProduct = require("./product/GetProduct");
const addProduct = require("./product/AddProduct");

new healthCheck.HealthCheck().attach(router);
new getProduct.GetProduct().attach(router);
new addProduct.AddProduct().attach(router);

module.exports = router;
