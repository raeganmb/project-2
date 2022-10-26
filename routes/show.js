const express = require("express");
const router = express.Router();
const postsCtrl = require("../controllers/creates");
const showCtrl = require("../controllers/show");
const Post = require("../models/post");

router.get("/", function (req, res) {
  Post.find({}, function (err, posts) {
    console.log(posts);
    res.render("./users/show", { posts });
  });
});

// // OAuth logout route
router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) return next(err);
  });
  res.redirect("/home");
});

router.get("/show", function (req, res) {
  res.render("./users/show");
});

module.exports = router;
