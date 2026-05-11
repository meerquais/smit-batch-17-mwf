const mongoose = require("mongoose");
const userSchema = require("../schemas/user.schema");

const User = mongoose.model("Users", userSchema);

module.exports = User;
