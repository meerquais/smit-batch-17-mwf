const app = require("./app");

const connectDB = require("./config/db");

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
