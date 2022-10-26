const Post = require("../models/post");
const posts = require("./posts");

module.exports = {
  // new: newPost,
  create,
  index,
};

function create(req, res) {
  console.log(req.body, 'this is in creates controller, create function');
  const post = new Post(req.body);
  post.save(function (err) {
    // handle errors
    if (err) return res.render("./users/posts");
    // redirect
    else res.redirect("/posts");
  });
}

function index(req, res) {
  Post.find({}, function (err, posts) {
    console.log(posts);
    res.render("./users/posts", { posts });
  });
}
