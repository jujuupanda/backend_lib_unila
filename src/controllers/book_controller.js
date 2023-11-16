const model = require("../config/models/define_model");
const sequelize = require("sequelize");
const Op = sequelize.Op;

const controller = {};

controller.getBibIdFromTitle = async (req, res) => {
  const { title } = req.body;

  try {
    const book = await model.book.ETit.findAll({
      include: [
        {
          model: model.book.ETitBib,
          attributes: ["TBBibId"],
          include: [
            {
              model: model.book.EBib,
              attributes: ["BibId", "CalKey", "EdiRaw", "PubRaw"],
              include: [
                {
                  model: model.book.EAutBib,
                  attributes: ["ABAutId"],
                  include: [
                    {
                      model: model.book.EAut,
                      attributes: ["AutKey"],
                    },
                  ],
                },
                {
                  model: model.book.EIdn,
                  attributes: ["IdnBibId", "IdnId", "IdnKey"],
                },
                {
                  model: model.book.CItem,
                  attributes: [
                    "ItemBib",
                    "ItemNo",
                    "ItemClss",
                    "LocaCode",
                    "CopyNo",
                    "ItemStat",
                  ],
                },
              ],
            },
          ],
        },
      ],
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

    //Success Search Book
    // const groupedBook = book.reduce((acc, currentItem) => {
    //   acc[currentItem.ETitBib.EBib.CItem.ItemBib] =
    //     acc[currentItem.ETitBib.EBib.CItem.ItemBib] || [];
    //   acc[currentItem.ETitBib.EBib.CItem.ItemBib].push(currentItem);
    //   return acc;
    // }, {});

    res.status(200).json({ message: "Book Result", data: book });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

module.exports = controller;
