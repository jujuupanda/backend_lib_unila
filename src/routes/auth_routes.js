const express = require("express");
const controller = require("../controllers/controller");

const router = express.Router();

// LOGIN
router.post("/login", controller.authController.login);

module.exports = router;
