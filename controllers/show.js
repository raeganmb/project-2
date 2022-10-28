const Post = require("../models/post");

module.exports = {
  create,
  index,
  show,
};

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

// Show post by ID
function show(req, res) {
  Post.findById(req.params.id, function (err, posts) {
    res.render("users/show", { title: "Post Details", posts });
  });
}
