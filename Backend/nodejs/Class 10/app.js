require("dotenv").config();

const express = require("express");

const cookieParser = require("cookie-parser");

const passport = require("./config/passport");

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use("/api/auth", authRoutes);

module.exports = app;
