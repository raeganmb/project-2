var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

// load the env vars
require("dotenv").config();

// create Express app
var app = express();

// connect to the MongoDB with mongoose
require("./config/database");
require("./config/passport");

// require routes
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const createsRouter = require("./routes/creates");
const showRouter = require("./routes/show");
// const commentsRouter = require("./routes/comments");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "Raeganmb",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/create", createsRouter);
app.use("/show", showRouter);
// app.use("/test",(res, req) => console.log("test"));
// app.use("./comments", commentsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
