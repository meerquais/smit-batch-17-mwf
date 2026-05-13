const express = require("express");
const router = express.Router();

const passport = require("passport");

const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
  }),
  authController.googleLoginSuccess
);

router.get("/profile", authMiddleware, authController.profile);

module.exports = router;
