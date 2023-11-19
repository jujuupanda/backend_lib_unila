const express = require("express");
const controller = require("../controllers/controller");

const router = express.Router();

// GET Circulation
router.post(
  "/getCirculation/history",
  controller.circulationController.getCirculationHistory
);
router.post(
  "/getCirculation/status",
  controller.circulationController.getCirculationStatus
);

router.post(
  "/getCirculation/account",
  controller.circulationController.getCirculationAccount
);
module.exports = router;
