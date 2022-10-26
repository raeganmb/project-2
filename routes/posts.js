const express = require("express");
const router = express.Router();
const postsCtrl = require("../controllers/posts");

const Post = require("../models/post");
// router.get("/", postsCtrl.index)
// router.get("/create", postsCtrl.new);
// router.post("/", postsCtrl.index);

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

// // Create Post route
// router.get("/create", function (req, res) {
//   res.render("./users/create");
// });

module.exports = router;
