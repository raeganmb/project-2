const express = require("express");
const router = express.Router();
const postsCtrl = require("../controllers/creates");
const showCtrl = require("../controllers/show");
const Post = require("../models/post");

// router.get("/", function (req, res) {
//   Post.find({}, function (err, posts) {
//     console.log(posts);
//     res.render("users/show", { posts });
//   });
// });

// // OAuth logout route
router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) return next(err);
  });
  res.redirect("/home");
});

router.get("/:id", function (req, res) {
  console.log(req.params.id);
  Post.findById(req.params.id, function (err, post) {
    console.log(post, 'wihtin show routes /id ');
    res.render("users/show", { post });
  });
});

// router.delete("/:id", function(req, res) {
//   Post.findById(req.params.id, function (err, post) {
//     res.render("/", )
//   })
// })

module.exports = router;
