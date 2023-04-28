const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const passport = require("passport");
const passportLocalStrategy = require("passport-local");
const session = require("express-session");

const User = require("./models/User");
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
app.use(methodOverride("_method"));

// public folder
app.use(express.static(path.join(__dirname, "public")));

// session
const sessionConfiguration = {
    name: "PI.session",
    secret: "J8gHmqeufpKZGLf9B6z3WT9e9FIxZCRy",
    resave: false,
    saveUninitialized: true,
    cookies: {
        httpOnly: true,
        expires: Date.now() + 1000 * 3600 * 24 * 7,
        maxAge: 1000 * 3600 * 24 * 7,
    },
};

app.use(session(sessionConfiguration));

// middle ware for password
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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
