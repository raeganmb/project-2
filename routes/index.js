var express = require("express");
var router = express.Router();
const passport = require("passport");
const { nextTick } = require("process");
const userCtrl = require("../controllers/users");

/* GET home page. */
router.get("/home", userCtrl.index);

router.get("/", function (req, res) {
  res.redirect("/home");
});

// Google OAuth login route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/home",
    failureRedirect: "/home",
  })
);

// OAuth logout route
router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) return next(err);
  });
  res.redirect("/");
});

module.exports = router;
