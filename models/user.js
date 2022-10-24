const mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    avatar: String,
    googleId: String,
  },
  {
    timestamps: true,
  }
);
