const Post = require("../models/post");
const posts = require("./posts");

module.exports = {
  create,
  index,
};

// Create a Post
function create(req, res) {
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
