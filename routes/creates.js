const express = require("express");
const router = express.Router();
const postsCtrl = require("../controllers/creates");

router.get("/", function (req, res) {
  res.render("./create");
});

// OAuth logout route
router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) return next(err);
  });
  res.redirect("/home");
});

// All Posts route
router.get("/posts", function (req, res) {
  res.render("./users/posts");
});

module.exports = router;
