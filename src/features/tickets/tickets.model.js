const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  Category: { type: String },
  Title: { type: String },
  Message: { type: String },
  time: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId },
});

const Ticket = mongoose.model("ticket", ticketSchema);

module.exports = Ticket;
