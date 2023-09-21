const express = require("express");
const router = express.Router();
const users = require("../controllers/users");
const passport = require("passport");

// Login routes
// passport middleware used in 'login/post' to authenticate
router
    .route("/login")
    .get(users.renderLoginForm)
    .post(
        passport.authenticate("local", {
            failureFlash: true,
            failureRedirect: "/users/login",
            keepSessionInfo: true,
        }),
        users.userLogin
    );

// Register routes
router.route("/register").get(users.registerForm).post(users.userRegister);

// Logout route
router.route("/logout").get(users.logOut);

module.exports = router;
