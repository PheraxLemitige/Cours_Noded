const express = require("express");
const router = express.Router();
const { addMovie } = require("../controllers/watchlists");

router.post("/create", addMovie);

module.exports = router;
