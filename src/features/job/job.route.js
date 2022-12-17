const express = require("express");
const Job = require("./job.model");

const app = express.Router();

app.post("/", async (req, res) => {
  const { company, city, location, role, level, contract, position, language } =
    req.body;

  try {
    const newJob = await Job.create({
      company,
      city,
      location,
      role,
      level,
      contract,
      position,
      language,
      postedAt: new Date(),
    });
    res.send({ msg: "Job posted", data: newJob });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/role", async (req, res) => {
  try {
    const filteredJob = await Job.find({ role: req.body.role });
    res.send(filteredJob);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/language", async (req, res) => {
  try {
    const filteredJob = await Job.find({ language: req.body.language });
    res.send(filteredJob);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = app;

module.exports = app;
