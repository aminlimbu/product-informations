const express = require("express");
const product = require("../controllers/products");
const router = express.Router();

router.route("/").get(product.renderAllProducts);

router.route("/new").get(product.renderNewForm).post(product.newProduct);

router.route("/show/:id").get(product.showProduct);

module.exports = router;
