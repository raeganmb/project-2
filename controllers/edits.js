const Post = require("../models/post");

module.exports = {
  edit,
};

// Edit a Post
function edit(req, res) {
  Post.put(function (err) {
    // handle errors
    if (err) return res.render("./users/posts");
    // redirect
    else res.redirect("/posts");
  });
}
