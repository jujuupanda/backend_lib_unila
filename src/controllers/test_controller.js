const model = require("../config/models/define_model");
const bcrypt = require("bcrypt");
const controller = {};

controller.testPatch = async (req, res) => {
  const { npm, addr } = req.body;

  const test = model.user.update(
    {
      Addr: addr,
    },
    {
      where: {
        ID: npm,
      },
    }
  );
  if (test) {
    res.status(200).json({
      message: "Update success",
    });
  } else {
    res.status(401).json({
      message: "Update failed",
    });
  }
};

module.exports = controller;
