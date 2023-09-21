const express = require("express");
const catalogue = require("../controllers/catalogue");
const router = express.Router();
const asyncCatch = require("../utilities/asyncCatch");

// Amplifiers route
router.route("/amplifiers").get(asyncCatch(catalogue.renderAmplifiers));

// Receivers route
router.route("/receivers").get(asyncCatch(catalogue.renderReceivers));

// Networkplayer route
router
    .route("/network-players")
    .get(asyncCatch(catalogue.renderNetworkPlayers));

// CD-Player route
router.route("/cd-players").get(asyncCatch(catalogue.renderCDPlayers));

module.exports = router;
