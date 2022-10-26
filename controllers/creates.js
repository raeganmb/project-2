const Post = require("../models/post");

module.exports = {
  // new: newPost,
  create,
};


function create(req, res) {
  const post = new Post(req.body);
  post.save(function (err) {
    // handle errors
    if (err) return res.render("users/posts");
    // redirect
    else res.redirect("/users/show");
  });
}
