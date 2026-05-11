const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");

dotenv.config();

const app = express();
connectDB();

app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(3000, () => {
  console.log("Server running on 3000 port!");
});
