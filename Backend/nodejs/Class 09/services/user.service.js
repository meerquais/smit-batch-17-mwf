const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const createUser = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await User.create({
    name: data.name,
    email: data.email,
    password: hashedPassword,
  });

  return user;
};

const loginUser = async (data) => {
  const user = await User.findOne({ email: data.email });

  if (!user) throw new Error("user not found");

  const isMatch = await bcrypt.compare(data.password, user.password);

  if (!isMatch) throw new Error("Invalid Password!");

  return user;
};

const getUsers = async () => {
  return await User.find();
};

const updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  createUser,
  loginUser,
  getUsers,
  updateUser,
  deleteUser,
};
