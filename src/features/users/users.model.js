const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  difficulty: { type: String, enum: ["high", "medium", "low"] },
  score: { type: Number, default: 0 },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
