const express = require("express");
const controller = require("../controllers/controller");

const router = express.Router();

// GET BOOK BY TITLE
router.post("/getBook", controller.bookController.getBooks);
router.post("/getBook/itemBook", controller.bookController.getItemBooks);
router.post("/getBook/authorBook", controller.bookController.getAuthorBooks);

module.exports = router;
