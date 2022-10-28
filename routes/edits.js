const express = require("express");
const router = express.Router();
const editsCtrl = require("../controllers/edits");

router.get("/", function (req, res) {
  res.render("./users/edit");
});

// OAuth logout route
router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) return next(err);
  });
  res.redirect("/home");
});

// Update a post

router.put("/posts/:id", editsCtrl.updatePost);

module.exports = router;
