const express = require("express");
const router = express.Router();
const commentsCtrl = require("../controllers/comments");
const Post = require("../models/post");

router.post("/posts/:id/comments", commentsCtrl.create);

module.exports = reouter;
