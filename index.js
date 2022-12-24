const express = require("express");
const connect = require("./src/configs/db");
const userRoute = require("./src/features/users/users.route");
const ticketRoute = require("./src/features/tickets/tickets.route");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user", userRoute);
app.use("/ticket", ticketRoute);
const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  await connect();
  console.log("server started on port 8080");
});
