const jwt = require("jsonwebtoken");

const googleLoginSuccess = async (req, res) => {
  const token = jwt.sign(
    {
      id: req.user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  res.cookie("token", token, {
    httpOnly: true,
  });
  res.json({
    message: "Google Login Success",
    token,
    user: req.user,
  });
};

const profile = async (req, res) => {
  res.json({
    message: "Protected Profile",
    user: req.user,
  });
};

module.exports = {
  googleLoginSuccess,
  profile,
};
