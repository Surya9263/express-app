const express = require("express");
const User = require("./users.model");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/", async (req, res) => {
  const { name, difficulty, score } = req.body;
  try {
    let user = await User.find({ name });
    console.log(user);
    if (user.length !== 0) {
      return res.send(user);
    }
    user = await User.create({ name, difficulty, score });
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/playzone", (req, res) => {
  const random_string = randomString(8);
  res.send(random_string);
});

app.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send("user not found");
    }
    const update = await User.findByIdAndUpdate(
      id,
      {
        score: score + req.body,
      },
      { new: true }
    );
    res.send(update);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

function randomString(strLength) {
  let randomStr = "";
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < strLength; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return randomStr;
}

module.exports = app;
