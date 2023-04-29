const Product = require("../models/Product");

// renders form to add new item
module.exports.renderNewForm = (req, res) => {
    res.render("products/new");
};

// created new product
module.exports.newProduct = async (req, res) => {
    const product = new Product(req.body.product);

    await product.save();

    // redirect to new product
    res.redirect(`/products/show/${product.id}`);
};

// render all products from database
module.exports.renderAllProducts = async (req, res) => {
    const products = await Product.find();
    res.render("products/all", { products });
};

// display product single product, ref. id
module.exports.showProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/show", { product });
};

// Product update Form
module.exports.renderUpdateProductForm = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/update", { product });
};

// update product
module.exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, {
        ...req.body.product,
    });
    await product.save();

    res.redirect(`/products/show/${id}`);
};
