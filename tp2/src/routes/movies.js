const express = require("express");
const router = express.Router();
const { addMovie } = require("../controllers/movies");

router.post("/create", addMovie);

module.exports = router;
