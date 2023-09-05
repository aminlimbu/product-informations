const express = require("express");
const product = require("../controllers/products");
const router = express.Router();

// authorisation middleware to check creating and updating permissions
const { isLoggedIn } = require("../middlewares/permissions");

// Routes
router.route("/").get(product.renderAllProducts);

router.route("/:id").delete(isLoggedIn, product.deleteProduct);

router
    .route("/new")
    .get(isLoggedIn, product.renderNewForm)
    .post(isLoggedIn, product.newProduct);

router.route("/show/:id").get(product.showProduct);

router
    .route("/update/:id")
    .get(isLoggedIn, product.renderUpdateProductForm)
    .put(isLoggedIn, product.updateProduct);

module.exports = router;
