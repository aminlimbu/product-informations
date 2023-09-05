// checks if the user is logged in
// Middleware to authorise user actions
module.exports.isLoggedIn = (req, res, next) => {
    // isAuthienticate from possport middleware method
    if (!req.isAuthenticated()) {
        // set url to return to, after login
        req.session.redirectTo = req.originalUrl;
        return res.redirect("/users/login");
    }
    // If user already logged in
    next();
};
