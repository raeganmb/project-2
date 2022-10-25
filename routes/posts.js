const express = require("express");
const router = express.Router();
const postsCtrl = require("../controllers/posts");

router.get("/create", postsCtrl.new);
router.post("/", postsCtrl.index);

router.get("/", function (req, res) {
    res.render("./users/posts");
});

// OAuth logout route
router.get("/logout", function (req, res, next) {
    req.logout(function (err) {
      if (err) return next(err);
    });
    res.redirect("/home");
  });
  
module.exports = router;
