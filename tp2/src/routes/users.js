const express = require("express");
const router = express.Router();
const { findUser, findUsers, insertUser, updateUser } = require("../controllers/users");

router.get("/find", findUser);

router.get("/findUsers", findUsers);

router.get("/insert", insertUser);

router.get("/update", updateUser);

module.exports = router;
