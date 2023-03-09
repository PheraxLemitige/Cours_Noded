const { findOne, find, insertOne, updateOne} = require("../services/db/crud");
const collection = "movies";

async function addMovie(req, res, next) {
    try {
      const result = await insertOne(collection, req.body);
      return res.send(result);
    } catch (e) {
      console.log(e);
      return next(e);
    }
  }

module.exports = {
    addMovie
};