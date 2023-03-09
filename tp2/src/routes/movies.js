const express = require("express");
const router = express.Router();
const { addMovie, getMovies } = require("../controllers/movies");

router.post("/create", addMovie);
router.post("/getMovies", getMovies);

module.exports = router;
