const User = require("../models/User");

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login");
};

module.exports.userLogin = (req, res) => {
    req.flash("success", `welcome back! ${req.session.passport.user}`);
    const redirectUrl = req.session.redirectTo || "/products";
    // clear session value for redirectTo
    delete req.session.redirectTo;
    res.redirect(redirectUrl);
};

module.exports.registerForm = (req, res) => {
    res.render("users/register");
};

module.exports.userRegister = async (req, res) => {
    try {
        const { firstName, lastName, email, username, password } = req.body;
        const user = new User({ firstName, lastName, email, username });
        const registeredUser = await User.register(user, password);
        // try loging in newly created user; automatic login
        req.login(registeredUser, (error) => {
            if (error) {
                return next(error);
            }
            req.flash("success", "Successfully Registered");
            res.redirect("/products");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/users/register");
    }
};

module.exports.logOut = (req, res, next) => {
    // logout is passportJS method; middleware
    req.logout((error) => {
        if (error) {
            return next(error);
        }

        res.redirect("/");
    });
};
