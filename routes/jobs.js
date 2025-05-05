const express = require("express");
const router = express.Router();
const { job } = require("../controllers/jobs");

router.route("/").get(job);

module.exports = router;