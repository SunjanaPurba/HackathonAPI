const express = require("express");
const router = express.Router();
const { movie } = require("../controllers/movies");

router.route("/").get(movie);

module.exports = router;