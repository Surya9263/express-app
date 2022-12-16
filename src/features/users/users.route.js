const express = require("express");
const User = require("./users.model");

const app = express.Router();

app.get("/", async (req, res) => {
  const users = await User.find();
  // console.log(users);
  res.send(users);
});

module.exports = app;
