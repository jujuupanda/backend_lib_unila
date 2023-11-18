const userController = require("./user_controller");
const authController = require("./auth_controller");
const bookController = require("./book_controller");
const testController = require("./test_controller");
const circulationController = require("./circulation_controller");
const controller = {};

controller.userController = userController;
controller.authController = authController;
controller.bookController = bookController;
controller.testController = testController;
controller.circulationController = circulationController;

module.exports = controller;
