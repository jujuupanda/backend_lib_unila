const model = require("../config/models/define_model");
const sequelize = require("sequelize");
const Op = sequelize.Op;
const controller = {};

controller.getCirculationHistory = async (req, res) => {
  const { npm } = req.body;

  try {
    const history = await model.circulation.CMCirculation.findAll({
      include: [
        {
          model: model.circulation.CItem,
          include: [
            {
              model: model.circulation.EBib,
              include: [model.circulation.EIdn],
            },
            {
              model: model.circulation.ETitBib,
              include: [
                {
                  model: model.circulation.ETit,
                },
              ],
            },
          ],
        },
      ],
      where: {
        ID: npm,
      },
    });

    if (history.length == 0) {
      res.status(201).json({ message: "History Borrow Book does not exist" });
    } else {
      res.status(200).json({
        message: "History Borrow Book Result",
        length: history.length,
        data: history,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};
controller.getCirculationStatus = async (req, res) => {
  const { npm } = req.body;

  try {
    const status = await model.circulation.CCirculation.findAll({
      include: [
        {
          model: model.circulation.CItem,
          include: [
            {
              model: model.circulation.EBib,
              include: [model.circulation.EIdn],
            },
            {
              model: model.circulation.ETitBib,
              include: [
                {
                  model: model.circulation.ETit,
                },
              ],
            },
          ],
        },
      ],
      where: {
        ID: npm,
      },
    });

    if (status.length == 0) {
      res.status(201).json({ message: "Status Borrow Book does not exist" });
    } else {
      res.status(200).json({
        message: "Status Borrow Book Result",
        length: status.length,
        data: status,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

module.exports = controller;
