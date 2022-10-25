const Post = require("../models/post");

module.exports = {
    index,
    new: newPost,
};

  function newPost(req, res) {
    res.render('posts/create', { title: 'Create Post' });
  }