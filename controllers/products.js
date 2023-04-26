const Product = require("../models/Product");

// renders form to add new item, validation and database connection pending ...
module.exports.renderNewForm = (req, res) => {
    res.render("products/new");
};

module.exports.renderAllProducts = async (req, res) => {
    const products = await Product.find();
    res.render("products/all", { products });
};

// created new product
module.exports.newProduct = async (req, res) => {
    const product = new Product(req.body.product);

    await product.save();

    // redirect to new product
    res.redirect(`/products/show/${product.id}`);
};

module.exports.showProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/show", { product });
};

module.exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, {
        ...req.body.product,
    });
    await product.save();

    res.redirect(`/product/show/${id}`);
};
