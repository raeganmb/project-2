const express = require("express");
const router = express.Router();
const postsCtrl = require("../controllers/posts");
const Post = require("../models/post");

router.get("/", function (req, res) {
  Post.find({}, function (err, posts) {
    console.log(posts);
    res.render("./users/posts", { posts });
  });
});

// OAuth logout route
router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) return next(err);
  });
  res.redirect("/home");
});

router.get("/show", function (req, res) {
  res.render("./users/show");
});

router.delete("/:id", function (req, res) {
  Post.findByIdAndDelete(req.params.id)
    .then(function (res) {
      console.log(res); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
  res.redirect("/posts");
});

router.get("/show/:id/edit", function (req, res) {
  Post.findById(req.params.id)
    .then(function (post) {
      res.render("./users/edit", { post: post });
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
