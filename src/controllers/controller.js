const userController = require("./user_controller");
const authController = require("./auth_controller");
const bookController = require("./book_controller");
const controller = {};

controller.userController = userController;
controller.authController = authController;
controller.bookController = bookController;

module.exports = controller;
