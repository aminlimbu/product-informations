// next to run next after the middleware
module.exports.isLoggedIn = (req, res, next) => {
    // isAuthienticate from possport.js
    if (!req.isAuthenticated()) {
        // get the url request is from
        // set it to session for redirection redirectTo
        req.session.redirectTo = req.originalUrl;
        return res.redirect("/users/login");
    }
    // user already logged in pass next
    next();
};
