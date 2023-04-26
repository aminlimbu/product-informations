const express = require("express");
const router = express.Router();
const users = require("../controllers/users");

router.route("/login").get(users.userLogin);
router.route("/register").get(users.userRegister);

module.exports = router;
