const express = require("express");
const catalogue = require("../controllers/catalogue");
const router = express.Router();

// handle requrest, load controller
router.route("/amplifiers").get(catalogue.renderAmplifiers);
router.route("/receivers").get(catalogue.renderReceivers);
router.route("/network-players").get(catalogue.renderNetworkPlayers);
router.route("/cd-players").get(catalogue.renderCDPlayers);

module.exports = router;
