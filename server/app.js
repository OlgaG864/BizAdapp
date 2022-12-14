var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const headers = require("./middleware/headers");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var cardsRouter = require("./routes/cards");
var servicesRouter = require("./routes/services");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(headers);
const auth = require("./middleware/auth");
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/cards", cardsRouter);
app.use("/services", servicesRouter);

module.exports = app;
