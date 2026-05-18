const express = require("express");

const dotenv = require("dotenv").config();

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", require("./routes/fileRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running!");
});
