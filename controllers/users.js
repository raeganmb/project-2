const User = require("../models/user");

module.exports = {
  index,
};

function index(req, res, next) {
  console.log(req.query.name);
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, "i") }
    : {};
  let sortKey = req.query.sort || "name";
  console.log(modelQuery, "modelQuery");
  User.find(modelQuery)
    .sort(sortKey)
    .exec(function (err, users) {
      console.log(users, "users");
      if (err) return next(err);
      res.render("index.ejs", {
        users,
        user: req.user,
        name: req.query.name,
        sortKey,
      });
    });
}
