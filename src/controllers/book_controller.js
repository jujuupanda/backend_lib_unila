const model = require("../config/models/define_model");
const sequelize = require("sequelize");
const Op = sequelize.Op;

const controller = {};

controller.getBibIdFromTitle = async (req, res) => {
  const { title } = req.body;

  try {
    const book = await model.book.ETit.findAll({
      where: {
        TitKey: {
          [Op.like]: `%${title}%`,
        },
      },
      select: {
        TitId: true,
        TitKey: true,
      },
    });

    if (book.length == 0)
      res.status(404).json({ message: "Book does not exist" });

    res.status(200).json({ message: "Book Result", data: book });

    //Title
    const TitKey = book.map((book) => book["TitKey"]);
    const TitId = book.map(async (book) => book["TitId"]);
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

module.exports = controller;
