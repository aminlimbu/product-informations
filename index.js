const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");

const catalogueRoutes = require("./Routes/catalogue");
const productRoutes = require("./Routes/products");
const usersRoutes = require("./Routes/users");

mongoose.connect("mongodb://localhost:27017/pidb");

const app = express();

// Templating engine setup
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

// public folder
app.use(express.static(path.join(__dirname, "public")));

// Routers middleware
app.use("/catalogue", catalogueRoutes);
app.use("/products", productRoutes);
app.use("/users", usersRoutes);

// render index file in views folder
app.get("/", (req, res) => {
    res.render("index");
});

// listening port
app.listen(3000, (req, res) => {
    console.log("Listening at port 3000.");
});
