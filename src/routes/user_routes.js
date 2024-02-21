const express = require("express");
const controller = require("../controllers/controller");
const verifyToken = require("../middlewares/verify_token.js");

const router = express.Router();

// GET
router.get("/getUser", verifyToken, controller.userController.getUser);

// GET

router.get(
  "/getSingleUser/:npm",
  verifyToken,
  controller.userController.getSingleUser
);

router.get(
  "/getUserSSO/:name",
  verifyToken,
  controller.userController.getUserSSO
);

// // POST
// router.post("/", userController.createUser);

// UPDATE
router.patch("/patchUser/:npm", controller.userController.updateUser);
router.patch(
  "/patchUser/:npm/password",
  controller.userController.updatePasswordUser
);
router.patch(
  "/patchUser/:npm/passwordMd5",
  controller.userController.updatePasswordUserMd5
);

// // DELETE
// router.delete("/:idUser", userController.deleteUser);

module.exports = router;
