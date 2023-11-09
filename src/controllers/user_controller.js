const model = require("../config/models/define_model");
const bcrypt = require("bcrypt");
const controller = {};

controller.getUser = async (req, res) => {
  const { npm } = req.body;
  try {
    const user = await model.user.findOne({ where: { ID: npm } });
    if (!user) {
      res.status(200).json({
        message: "Data Not Found",
      });
    } else {
      res.status(200).json({
        message: "Success Get User",
        data: user,
      });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

controller.updateUser = async (req, res) => {
  const { npm, addr, phone, email, pwd } = req.body;
  try {
    const hashPassword = await bcrypt.hash(pwd, 10);
    const user = await model.user.update(
      {
        Addr: addr,
        EMail: email,
        Phone: phone,
        Pwd: hashPassword,
      },
      {
        where: {
          ID: npm,
        },
      }
    );
    if (user) {
      res.status(200).json({
        message: "Update success",
      });
    } else {
      res.status(200).json({
        message: "Update failed",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

module.exports = controller;
