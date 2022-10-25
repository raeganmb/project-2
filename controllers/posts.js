const Post = require("../models/post");

module.exports = {
    index,
    // new: newPost,
};

function index(req, res) {
    console.log("You have reached index in post")
    Post.find({}, function(err, posts) {
        res.render("users/posts", { title: 'All Posts', posts });
    });
};
  
  // function newPost(req, res) {
  //   res.render('posts/create', { title: 'Create Post' });
  // }
