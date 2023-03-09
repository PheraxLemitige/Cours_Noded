const { findOne, find, insertOne, updateOne} = require("../services/db/crud");
const collection = "users";

async function findUser(req, res, next) {
  try {
    const result = await findOne(collection, {"name": "Enzo"});
    return res.send(result);
  } catch (e) {
    console.log(e);
    return next(e);
  }
}

async function findUsers(req, res, next) {
  try {
    const result = await find(collection, {"name": "Enzo"});
    return res.send(result);
  } catch (e) {
    console.log(e);
    return next(e);
  }
}

async function insertUser(req, res, next) {
  try {
    const result = await insertOne(collection, {"name": "Paul"});
    return res.send(result);
  } catch (e) {
    console.log(e);
    return next(e);
  }
}

async function updateUser(req, res, next) {
  try {
    const result = await updateOne(collection, {"name": "Paul"}, {$set : {name : "Paulo"}});
    return res.send(result);
  } catch (e) {
    console.log(e);
    return next(e);
  }
}

async function createUser(req, res, next) {
  try {
    const result = await insertOne(collection, req.body);
    return res.send(result);
  } catch (e) {
    console.log(e);
    return next(e);
  }
}


module.exports = {
  findUser, findUsers, insertUser, updateUser, createUser
};