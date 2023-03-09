const express = require("express");
const router = express.Router();
const { addMovie, getWatchListUser } = require("../controllers/watchlists");

router.post("/create", addMovie);
router.get("/getWatchlistUser", getWatchListUser)

module.exports = router;
