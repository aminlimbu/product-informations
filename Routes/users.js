const express = require("express");
const router = express.Router();
const users = require("../controllers/users");
const passport = require("passport");

router
    .route("/login")
    .get(users.renderLoginForm)
    .post(
        passport.authenticate("local", {
            failureRedirect: "/login",
            keepSessionInfo: true,
        }),
        users.userLogin
    );

router.route("/register").get(users.registerForm).post(users.userRegister);

module.exports = router;
