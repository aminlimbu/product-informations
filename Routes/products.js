const express = require("express");
const product = require("../controllers/products");
const router = express.Router();
const asyncCatch = require("../utilities/asyncCatch");

// authorisation middleware, checks creating and updating permissions
const { isLoggedIn } = require("../middlewares/permissions");

// Routes
router.route("/").get(asyncCatch(product.renderAllProducts));

router.route("/:id").delete(isLoggedIn, asyncCatch(product.deleteProduct));

router
    .route("/new")
    .get(isLoggedIn, product.renderNewForm)
    .post(isLoggedIn, asyncCatch(product.newProduct));

router.route("/show/:id").get(asyncCatch(product.showProduct));

router
    .route("/update/:id")
    .get(isLoggedIn, asyncCatch(product.renderUpdateProductForm))
    .put(isLoggedIn, asyncCatch(product.updateProduct));

module.exports = router;
