const router = require("express").Router();
const {
  signup,
  login,
  forgetPassword,
  resetPassword,
  dashboard,
} = require("../controllers/authController");
const protect = require("../middlewares/authMiddleware");

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgot-password", forgetPassword);
router.post("/reset-password/:token", resetPassword);
router.get("/dashboard", protect, dashboard);

module.exports = router;
