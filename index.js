const express = require("express");
const connect = require("./src/configs/db");
const userRoute = require("./src/features/users/users.route");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", userRoute);

// app.get("/", (req, res) => res.send("hello users"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  await connect();
  console.log("server started on port 8080");
});
