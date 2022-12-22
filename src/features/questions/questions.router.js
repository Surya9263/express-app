const express = require("express");
const Question = require("./questions.model");

const app = express.Router();

app.post("/", async (req, res) => {
  const { category, difficulty, no_of_questions } = req.body;
  try {
    let questions = await Question.find({
      category: category,
      difficulty: difficulty,
    }).limit(no_of_questions);
    res.send(questions);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = app;
