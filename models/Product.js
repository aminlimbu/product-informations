const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

module.exports = mongoose.model("Product", productSchema);
