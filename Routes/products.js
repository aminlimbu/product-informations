const express = require("express");
const product = require("../controllers/products");
const router = express.Router();

router.route("/new").get(product.renderNewForm).post(product.newProduct);

module.exports = router;
