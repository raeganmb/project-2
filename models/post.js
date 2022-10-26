const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comments: String,
}, {
  timestamps: true
});

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  question: {
    type: String,
    }
  }, {
  comments: [commentSchema]
}, {timestamps: true
});

module.exports = mongoose.model('Post', postSchema);