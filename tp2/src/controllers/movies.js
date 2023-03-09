const { findOne, find, insertOne, updateOne} = require("../services/db/crud");
const {getMovie} = require("../repositories/omdbapi");
const collection = "movies";

async function addMovie(req, res, next) {
    try {
      const movie = await getMovie(req.body.title);
      const result = await insertOne(collection, movie);
      return res.send(result);
    } catch (e) {
      console.log(e);
      return next(e);
    }
  }

module.exports = {
    addMovie
};