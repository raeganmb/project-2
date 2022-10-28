const express = require("express");
const router = express.Router();
const postsCtrl = require("../controllers/creates");
const showCtrl = require("../controllers/show");
const Post = require("../models/post");

// // OAuth logout route
router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) return next(err);
  });
  res.redirect("/home");
});

//  Show Post by ID
router.get("/:id", function (req, res) {
  Post.findById(req.params.id, function (err, post) {
    res.render("users/show", { post });
  });
});

module.exports = router;
