const Post = require('../models/post');

module.exports = {
  create,
};

// Add a Comment
function create(req, res) {
  Post.findById(req.params.id, function(err, post) {
    post.comments.push(req.body);
    post.save(function(err) {
      res.redirect(`/show/${post._id}`);
    });
  });
}

