const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("hello"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("server started on port 8080");
});
