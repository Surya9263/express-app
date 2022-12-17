const express = require("express");
const connect = require("./src/configs/db");
const jobRoute = require("./src/features/job/job.route");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/job", jobRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  await connect();
  console.log("server started on port 8080");
});
