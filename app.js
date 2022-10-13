const express = require("express");
const app = express();
const cors = require("cors");
const studentRoute = require("./api/routes/student");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose.connect("mongodb+srv://Admin:Admin@db.e6le9.mongodb.net/test");
mongoose.connection.on("error", (err) => {
  console.log("failed");
});
mongoose.connection.on("connected", (connected) => {
  console.log("connected");
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/student", studentRoute);

module.exports = app;
