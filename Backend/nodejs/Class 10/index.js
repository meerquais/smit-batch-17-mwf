// const bcrypt = require("bcrypt");

// const password = "admin@123";

// const hash = async () => {
//   const hashedPassword = await bcrypt.hash(password, 10);

//   console.log(hashedPassword);

//   const isMatch = await bcrypt.compare("admin123", hashedPassword);

//   console.log(isMatch);
// };

// hash();

const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());
