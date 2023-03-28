const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("homepage");
});

app.listen(3000, (req, res) => {
    console.log("Listening at port 3000.");
});
