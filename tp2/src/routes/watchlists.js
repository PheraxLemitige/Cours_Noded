const express = require("express");
const router = express.Router();
const { addMovie, getWatchListUser, getWatchList } = require("../controllers/watchlists");

router.post("/create", addMovie);
router.get("/getWatchlistUser", getWatchListUser);
router.get("/getWatchlist", getWatchList);

module.exports = router;
