const express = require("express");
const User = require("./users.model");

const app = express.Router();

app.post("/signup", async (req, res) => {
  let { email } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(404).send("Email already exists");
    }
    let newUser = await User.create(req.body);
    res.send({ msg: "User created successfully...", user: newUser });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).send("Authentication Failed...");
    }
    res.send({
      token: `${user.id}:${user.email}`,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/", async (req, res) => {
  const users = await User.find();
  // console.log(users);
  res.send(users);
});

module.exports = app;
