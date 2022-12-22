const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ["Sports", "General Knowledge", "Geography"],
  },
  type: { type: String },
  difficulty: { type: String, enum: ["easy", "medium", "hard"] },
  question: String,
  correct_answer: String,
  incorrect_answers: Array,
});

const Question = mongoose.model("question", questionSchema);

module.exports = Question;
