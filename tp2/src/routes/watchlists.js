const express = require("express");
const router = express.Router();
const { addMovie, getWatchListUser, getWatchList, changeStatue } = require("../controllers/watchlists");

router.post("/create", addMovie);
router.get("/getWatchlistUser", getWatchListUser);
router.get("/getWatchlist", getWatchList);
router.post("/changeStatue", changeStatue);

module.exports = router;
