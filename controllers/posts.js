const Post = require("../models/post");

module.exports = {
  index,
  // new: newPost,
};

// Render created posts
function index(req, res) {
  Post.find({}, function (err, posts) {
    res.render("users/posts", { title: "All Posts", posts });
  });
}

// function newPost(req, res) {
//   res.render("users/create");
// }
