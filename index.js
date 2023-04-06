const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect("mongodb://localhost:27017/pidb");

const app = express();

// Templating engine setup
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

// public folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/products", (req, res) => {
    res.render("products/new");
});

app.post("/products", (req, res) => {
    console.log(req.body);
    res.send("Hello");
});

app.get("/amplifier", async (req, res) => {
    const products = await Product.find({ component: "Amplifier" });
    res.render("catalogue/productCatalogue", { products });
});
app.get("/receiver", async (req, res) => {
    const products = await Product.find({ component: "Receiver" });
    res.render("catalogue/productCatalogue", { products });
});
app.get("/network-player", async (req, res) => {
    const products = await Product.find({ component: "Network Player" });
    res.render("catalogue/productCatalogue", { products });
});
app.get("/cd-player", async (req, res) => {
    const products = await Product.find({ component: "CD Player" });
    res.render("catalogue/productCatalogue", { products });
});

app.listen(3000, (req, res) => {
    console.log("Listening at port 3000.");
});
