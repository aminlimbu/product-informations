const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Brand = require("./Brand");

// Creating schema to use foor the model
const productSchema = new Schema({
    title: String,
    brand: String,
    sku: String,
    component: String,
    description: String,
    images: [String],
    channels: String,
    power: String,
    status: String,
});

// create "Product" model using schema and export
module.exports = mongoose.model("Product", productSchema);
