const Product = require("../models/Product");

// renders form to add new item
module.exports.renderNewForm = (req, res) => {
    res.render("products/new");
};

// update database with new product
module.exports.newProduct = async (req, res) => {
    const product = new Product(req.body.product);

    await product.save();

    // redirect to newly created product
    res.redirect(`/products/show/${product.id}`);
};

// render all products from database
module.exports.renderAllProducts = async (req, res) => {
    const products = await Product.find();
    res.render("products/all", { products });
};

// display single product, using id
module.exports.showProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id).lean();
    res.render("products/show", { product });
};

// Render populated Product update Form
module.exports.renderUpdateProductForm = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/update", { product });
};

// save product update
module.exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, {
        ...req.body.product,
    });
    await product.save();

    res.redirect(`/products/show/${id}`);
};

// handle product detetion
module.exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect("/products");
};
