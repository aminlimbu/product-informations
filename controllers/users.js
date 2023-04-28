const User = require("../models/User");

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login");
};

module.exports.userLogin = (req, res) => {
    res.send(req.body);
};

module.exports.registerForm = (req, res) => {
    res.render("users/register");
};

module.exports.userRegister = async (req, res) => {
    const { firstName, lastName, email, username, password } = req.body;
    const user = new User({ firstName, lastName, email, username });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (error) => {
        if (error) {
            return console.log(error);
        }
        res.render("users/login");
    });
};
