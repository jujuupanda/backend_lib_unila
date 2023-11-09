const express = require("express");
const controller = require("../controllers/controller");

const router = express.Router();

// GET BOOK BY TITLE
router.get("/getBook", controller.bookController.getBibIdFromTitle);

module.exports = router;
