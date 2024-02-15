const model = require("../config/models/define_model");
const bcrypt = require("bcrypt");
const cryptojs = require('crypto-js')
const md5 = require("md5")
const sequelize = require('sequelize');
const controller = {};

controller.getUser = async (req, res) => {
  const { npm } = req.body;
  try {
    const user = await model.user.findOne({ where: { ID: npm } });
    if (!user) {
      res.status(402).json({
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

controller.getSingleUser = async (req, res) => {
  const { npm } = req.params;
  try {
    const user = await model.user.findOne({ where: { ID: npm } });
    if (!user) {
      res.status(402).json({
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

controller.getUserSSO = async (req, res) => {
  const { name } = req.params;
  try {
    const user = await model.user.findOne(
      { 
        where: {
          FName: sequelize.where(sequelize.fn('LOWER', sequelize.col('FName')), 'LIKE', '%' + name + '%')
        }
      });
    // const user = await model.user.findOne({ where: { FName: name} });
    if (!user) {
      res.status(402).json({
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
  const { addr, phone, email } = req.body;
  const { npm } = req.params;
  try {
    const user = await model.user.update(
      {
        Addr: addr,
        EMail: email,
        Phone: phone,
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
      res.status(401).json({
        message: "Update failed",
      });
    }
  } catch (error) {
    res.status(402).json({
      message: error,
    });
  }
};

controller.updatePasswordUser = async (req, res) => {
  const { oldPwd, newPwd } = req.body;
  const { npm } = req.params;

  try {
    const user = await model.user.findOne({
      where: {
        ID: npm,
      },
    });
    const passwordValid = await bcrypt.compare(oldPwd, user.Pwd);

    if (!passwordValid) {
      res.status(402).json({ message: "Invalid password" });
    } else {
      const hashPassword = await bcrypt.hash(newPwd, 10);
      const user = await model.user.update(
        {
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
        res.status(401).json({
          message: "Update failed",
        });
      }
    }
  } catch (error) {
    res.status(402).json({
      message: error,
    });
  }
};
controller.updatePasswordUserMd5 = async (req, res) => {
  const { oldPwd, newPwd } = req.body;
  const { npm } = req.params;

  try {
    const user = await model.user.findOne({
      where: {
        ID: npm,
      },
    });

    const passwordValid =  md5(oldPwd) == user.Pwd

    if (!passwordValid) {
      res.status(402).json({ message: "Invalid password" });
    } else {
      const hashPassword = md5(newPwd);
      const user = await model.user.update(
        {
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
        res.status(401).json({
          message: "Update failed",
        });
      }
    }
  } catch (error) {
    res.status(402).json({
      message: error,
    });
  }
};
module.exports = controller;
