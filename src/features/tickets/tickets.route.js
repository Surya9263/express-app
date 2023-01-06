const express = require("express");
const authMiddleware = require("../../middleware/auth");
const Ticket = require("./tickets.model");

const app = express.Router();

app.post("/", authMiddleware, async (req, res) => {
  const { Category, Title, Message } = req.body;
  try {
    const newTicket = await Ticket.create({
      Category,
      Title,
      Message,
      userId: req.headers.id,
      time: new Date(),
    });
    res.send({ msg: "Ticket created successfully", ticket: newTicket });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = app;
