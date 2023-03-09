const { findOne, find, insertOne, updateOne} = require("../services/db/crud");
const collection = "watchlists";

async function addWatchlist(req, res, next) {
    try {
      const user = await findOne("users", req.body);
      if (user){
        console.log("La watchlist existe deja");
        return res.send(null);
      }
      else{
        watchlist = {
          "user" : user,
          "listMovies" : [],
        }
        
      const result = await insertOne(collection, watchlist);
      return res.send(result);
      }
    } catch (e) {
      console.log(e);
      return next(e);
    }
  }

  async function changeStatue(req, res, next) {
    try {
      const watchlist = await findOne(collection, req.body.user);
      const movies = await findOne(watchlist, req.body.listMovies);
      for (let i = 0; i < movies.lenght; i++){

      }
      return res.send(result);
    } catch (e) {
      console.log(e);
      return next(e);
    }
  }

  async function getWatchListUser(req, res, next) {
    try {
      const result = await findOne(collection, res.body);
      return res.send(result);
    } catch (e) {
      console.log(e);
      return next(e);
    }
  }

  async function getWatchList(req, res, next) {
    try {
      const result = await findOne(collection, res.body);
      return res.send(result.listMovies);
    } catch (e) {
      console.log(e);
      return next(e);
    }
  }

module.exports = {
    addWatchlist, changeStatue, getWatchListUser
};