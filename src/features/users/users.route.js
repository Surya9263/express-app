const express = require("express");

const app = express.Router();

app.get("/", (req, res) => {
  res.send("Route is working");
});

module.exports = app;
