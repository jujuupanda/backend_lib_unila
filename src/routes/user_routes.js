const express = require("express");
const controller = require("../controllers/controller");
const verifyToken = require("../middlewares/verify_token.js");

const router = express.Router();

// GET
router.get("/getUser", verifyToken, controller.userController.getUser);

// // POST
// router.post("/", userController.createUser);

// UPDATE
router.patch("/patchUser", controller.userController.updateUser);

// // DELETE
// router.delete("/:idUser", userController.deleteUser);

module.exports = router;
