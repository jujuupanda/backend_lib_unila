const model = require("../config/models/define_model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const controller = {};

controller.login = async (req, res) => {
  const { npm, password } = req.body;
  // const npm = req.body;
  // const password = req.body;

  const user = await model.user.findOne({
    where: {
      ID: npm,
    },
  });
  if (!user) {
    res.status(401).json({
      message: "NPM not found",
    });
  } else {
    // res.status(200).json({ message: "Login Sucesss", token: "1234" });
    const passwordValid = await bcrypt.compare(password, user.Pwd);

    if (!passwordValid) {
      res.status(402).json({ message: "Invalid password" });
    } else {
      const token = jwt.sign(
        {
          npm: user.ID,
          fname: user.FName,
          lname: user.LName,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXP,
          noTimestamp: true,
        }
      );

      // res.header("Authorization", token);
      res.status(200).json({ message: "Login Sucesss", token: token });
    }
  }
};

module.exports = controller;
