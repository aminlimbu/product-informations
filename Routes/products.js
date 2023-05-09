const express = require("express");
const product = require("../controllers/products");
const router = express.Router();

// middlewares
const { isLoggedIn } = require("../middlewares/permissions");

router.route("/").get(product.renderAllProducts);

router.route("/:id").delete(product.deleteProduct);

router
    .route("/new")
    .get(isLoggedIn, product.renderNewForm)
    .post(isLoggedIn, product.newProduct);

router.route("/show/:id").get(product.showProduct);

router
    .route("/update/:id")
    .get(product.renderUpdateProductForm)
    .put(product.updateProduct);

module.exports = router;
