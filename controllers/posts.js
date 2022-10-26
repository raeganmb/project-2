const Post = require("../models/post");

module.exports = {
  index,
  new: newPost,
  create,
};

function index(req, res) {
  Post.find({}, function (err, posts) {
    res.render("users/posts", { title: "All Posts", posts });
  });
}

function newPost(req, res) {
  res.render("users/create");
}

function create(req, res) {
  console.log(req.body, 'this is in post crt create function')
  const post = new Post(req.body);
  post.save(function (err) {
    // handle errors
    if (err) return res.render("users/posts");
    // redirect
    res.redirect("/users/posts");
  });
}
