const model = require("../config/models/define_model");
const sequelize = require("sequelize");
const Op = sequelize.Op;

const controller = {};

// controller.getBooks = async (req, res) => {
//   const { title } = req.body;

//   try {
//     const book = await model.book.ETit.findAll({
//       include: [
//         {
//           model: model.book.ETitBib,
//           attributes: ["TBBibId"],
//           include: [
//             {
//               model: model.book.EBib,
//               attributes: ["BibId", "CalKey", "EdiRaw", "PubRaw"],
//               include: [
//                 {
//                   model: model.book.EAutBib,
//                   attributes: ["ABAutId"],
//                   include: [
//                     {
//                       model: model.book.EAut,
//                       attributes: ["AutKey"],
//                     },
//                   ],
//                 },
//                 {
//                   model: model.book.EIdn,
//                   attributes: ["IdnBibId", "IdnId", "IdnKey"],
//                 },
//                 {
//                   model: model.book.CItem,
//                   attributes: [
//                     "ItemBib",
//                     "ItemNo",
//                     "ItemClss",
//                     "LocaCode",
//                     "CopyNo",
//                     "ItemStat",
//                   ],
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//       where: {
//         TitKey: {
//           [Op.like]: `%${title}%`,
//         },
//       },
//       select: {
//         TitId: true,
//         TitKey: true,
//       },
//     });

//     if (book.length == 0) {
//       res.status(404).json({ message: "Book does not exist" });
//     } else {
//       res
//         .status(200)
//         .json({ message: "Book Result", length: book.length, data: book });
//     }

//     //Success Search Book
//     // const groupedBook = book.reduce((acc, currentItem) => {
//     //   acc[currentItem.ETitBib.EBib.CItem.ItemBib] =
//     //     acc[currentItem.ETitBib.EBib.CItem.ItemBib] || [];
//     //   acc[currentItem.ETitBib.EBib.CItem.ItemBib].push(currentItem);
//     //   return acc;
//     // }, {});
//   } catch (error) {
//     res.status(400).json({
//       message: error,
//     });
//   }
// };

controller.getBooks = async (req, res) => {
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
                // {
                //   model: model.book.EAutBib,
                //   attributes: ["ABAutId"],
                //   include: [
                //     {
                //       model: model.book.EAut,
                //       attributes: ["AutKey"],
                //     },
                //   ],
                // },
                {
                  model: model.book.EIdn,
                  attributes: ["IdnBibId", "IdnId", "IdnKey"],
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
    });

    if (book.length == 0) {
      res.status(404).json({ message: "Book does not exist" });
    } else {
      res
        .status(200)
        .json({ message: "Book Result", length: book.length, data: book });
    }
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

controller.getItemBooks = async (req, res) => {
  const { bibId } = req.body;

  try {
    const book = await model.book.CItem.findAll({
      where: {
        ItemBib: bibId,
      },
    });

    if (book.length == 0) {
      res.status(404).json({ message: "Item Book does not exist" });
    } else {
      res
        .status(200)
        .json({ message: "Item Book Result", length: book.length, data: book });
    }
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

controller.getAuthorBooks = async (req, res) => {
  const { bibId } = req.body;

  try {
    const author = await model.book.EAutBib.findAll({
      include: [
        {
          model: model.book.EAut,
          attributes: ["AutKey"],
        },
      ],
      where: {
        ABBibId: bibId,
      },
    });

    if (author.length == 0) {
      res.status(404).json({ message: "Author Book does not exist" });
    } else {
      res.status(200).json({
        message: "Author Book Result",
        length: author.length,
        data: author,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

module.exports = controller;
