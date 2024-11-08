const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

function mongooseConnection() {
  mongoose.set("strictQuery", true);
  mongoose.connect("mongodb://localhost:27017/olx-clone");
  mongoose.connection.on("error", (err) => {
    console.log("mongodb connection error : ", err);
  });
  mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected");
  });
}

mongooseConnection();

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is runnig on port", PORT);
});
