const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("landingPage/index");
});

app.get("/amplifier", (req, res) => {
    res.render("catalogue/productCatalogue");
});
app.get("/receiver", (req, res) => {
    res.send("Page under Construction");
});
app.get("/network-player", (req, res) => {
    res.send("Page under Construction");
});
app.get("/cd-player", (req, res) => {
    res.send("Page under Construction");
});

app.listen(3000, (req, res) => {
    console.log("Listening at port 3000.");
});
