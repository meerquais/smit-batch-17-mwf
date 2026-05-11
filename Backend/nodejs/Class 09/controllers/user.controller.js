const userService = require("../services/user.service");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const signup = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const user = await userService.loginUser(req.body);
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.json({ user, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getUsers = async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
};

const updateUser = async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body);
  res.json(user);
};

const deleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);
  res.json({ message: "User Deleted!" });
};

module.exports = {
  signup,
  login,
  getUsers,
  updateUser,
  deleteUser,
};
