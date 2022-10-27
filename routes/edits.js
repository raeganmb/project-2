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


// Edit a Post
router.put(function (err) {
      // handle errors
      if (err) return res.render("./users/posts");
      // redirect
      else res.redirect("/posts");
    });

    router.put("/create", editsCtrl.edit);

module.exports = router;