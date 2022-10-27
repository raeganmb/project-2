const express = require("express");
const router = express.Router();
const editsCtrl = require("../controllers/edits");

router.get("/", function (req, res) {
  res.render("./users/create");
});

// OAuth logout route
router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) return next(err);
  });
  res.redirect("/home");
});

router.put("/create", editsCtrl.edit);

module.exports = router;