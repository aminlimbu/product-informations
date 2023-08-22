const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const passport = require("passport");
const passportLocalStrategy = require("passport-local");
const session = require("express-session");
const flash = require("connect-flash");
const dotenv = require("dotenv");

const User = require("./models/User");
const catalogueRoutes = require("./Routes/catalogue");
const productRoutes = require("./Routes/products");
const usersRoutes = require("./Routes/users");

dotenv.config();
// mongoose.connect("mongodb://127.0.0.1:27017/pidb");
try {
    //Establish a connection
    mongoose.connect(
        process.env.MONGODB_URI || process.env.DB_URI,
        //Provide options object
        {
            dbName: "product-info",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );
    console.log("Database connected");
} catch (err) {
    console.log("error from DB connection:", err.message);
}

const app = express();

// Templating engine setup
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// public folders
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
app.use(flash());

// middleware for password
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    // set locals accessible only in views
    res.locals.currentUser = req.user;
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

// Routers middleware
app.use("/catalogue", catalogueRoutes);
app.use("/products", productRoutes);
app.use("/users", usersRoutes);

// render index file in the views folder
app.get("/", (req, res) => {
    res.render("index");
});

// listening port
const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log(`Listening at port ${port}.`);
});
