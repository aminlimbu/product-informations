const Product = require("../models/Product");

// Load a catalogue of all the products with similar components on a single page from the database

module.exports.renderAmplifiers = async (req, res) => {
    const products = await Product.find({ component: "Amplifier" });
    res.render("catalogue/productCatalogue", { products });
};

module.exports.renderReceivers = async (req, res) => {
    const products = await Product.find({ component: "Receiver" });
    res.render("catalogue/productCatalogue", { products });
};

module.exports.renderNetworkPlayers = async (req, res) => {
    const products = await Product.find({ component: "Network Player" });
    res.render("catalogue/productCatalogue", { products });
};

module.exports.renderCDPlayers = async (req, res) => {
    const products = await Product.find({ component: "CD Player" });
    res.render("catalogue/productCatalogue", { products });
};
