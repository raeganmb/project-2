const express = require("express");
const router = express.Router();
const commentsCtrl = require("../controllers/comments");
const Post = require("../models/post");

router.get("/", function (req, res) {
    Post.find({}, function (err, posts) {
      console.log(posts);
      res.render("./users/show", { posts });
    });
  });
  
router.post("/posts/:id/show", commentsCtrl.create);

module.exports = router;
