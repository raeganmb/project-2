const Post = require("../models/post");
const { router } = require("../server");

module.exports = {
  updatePost,
};

// Edit a Post
function updatePost(req, res) {
  console.log("I am here", req.body);
  Post.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) console.log(err);
  });
  res.redirect("/posts");
}
