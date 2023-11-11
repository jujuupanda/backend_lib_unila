const express = require("express");
const routes = require("../routes/routes");
const dotenv = require("dotenv").config();
var bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", routes.userRoute);
app.use("/auth", routes.authRoute);
app.use("/book", routes.bookRoute);

module.exports = app;
