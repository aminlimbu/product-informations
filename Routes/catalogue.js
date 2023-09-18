const express = require("express");
const catalogue = require("../controllers/catalogue");
const router = express.Router();
const asyncCatch = require("../utilities/asyncCatch");

// handle request and load controller
router.route("/amplifiers").get(asyncCatch(catalogue.renderAmplifiers));
router.route("/receivers").get(asyncCatch(catalogue.renderReceivers));
router
    .route("/network-players")
    .get(asyncCatch(catalogue.renderNetworkPlayers));
router.route("/cd-players").get(asyncCatch(catalogue.renderCDPlayers));

module.exports = router;
