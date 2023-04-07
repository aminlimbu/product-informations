const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const Product = require("./models/Product");

const catalogueRoutes = require("./Routes/catalogue");

mongoose.connect("mongodb://localhost:27017/pidb");

const app = express();

// Templating engine setup
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

// public folder
app.use(express.static(path.join(__dirname, "public")));

// Routers
app.use("/catalogue", catalogueRoutes);

// render index file in views folder
app.get("/", (req, res) => {
    res.render("index");
});

// renders form to add new item, validation and database connection pending ...
app.get("/products", (req, res) => {
    res.render("products/new");
});

// ...pending
app.post("/products", (req, res) => {
    console.log(req.body);
    res.send("Hello");
});

// following loads catalogue of all the products with similar component in single page from the dataase

// listening port
app.listen(3000, (req, res) => {
    console.log("Listening at port 3000.");
});
