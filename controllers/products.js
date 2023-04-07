// renders form to add new item, validation and database connection pending ...
module.exports.renderNewForm = (req, res) => {
    res.render("products/new");
};

// ...pending
module.exports.newProduct = (req, res) => {
    console.log(req.body);
    res.send("Hello");
};
