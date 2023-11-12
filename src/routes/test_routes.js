const express = require("express");
const controller = require("../controllers/controller");

const router = express.Router();

router.patch("/patch", controller.testController.testPatch);

module.exports = router;
