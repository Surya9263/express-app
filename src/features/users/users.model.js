const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  password: { type: String, required: true, minlength: 4 },
  email: { type: String, required: true, unique: true },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
