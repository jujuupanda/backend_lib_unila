const express = require("express");
const controller = require("../controllers/controller");

const router = express.Router();

// LOGIN
router.post("/login", controller.authController.login);
router.get("url_client/auth/sso/callback", controller.authController.loginSSO)

module.exports = router;
