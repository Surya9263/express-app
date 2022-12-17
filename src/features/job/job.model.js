const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: { type: String },
  postedAt: { type: String },
  city: { type: String },
  location: { type: String },
  role: { type: String, enum: ["Frontend", "Backend", "FullStack"] },
  level: {
    type: String,
    enum: ["Junior", "Senior"],
  },
  contract: { type: String, enum: ["full time", "part time"] },
  position: {
    type: String,
    enum: [
      "Backend Developer",
      "Junior Frontend Developer",
      "Junior Backend Developer",
      "FSD",
    ],
  },
  language: { type: String, enum: ["Javascript", "Java", "C", "C++"] },
});

const Job = mongoose.model("job", jobSchema);

module.exports = Job;
