const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for Comments

const commentSchema = new Schema(
  {
    comments: String,
  },
  {
    timestamps: true,
  }
);

// Schema for Posts
const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    question: {
      type: String,
    },
  },
  {
    comments: [commentSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
