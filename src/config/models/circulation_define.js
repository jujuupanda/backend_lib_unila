const sequelize = require("sequelize");
const db = require("../database/database");

//DB CIRCULATION
const CMCirculation = db.define(
  "CMCirculation",
  {
    ID: { type: sequelize.INTEGER, primaryKey: true },
    ItemNo: sequelize.STRING,
    ChkODate: sequelize.DATE,
    DueDate: sequelize.DATE,
    ChkIDate: sequelize.DATE,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

const CCirculation = db.define(
  "CCirculation",
  {
    ID: { type: sequelize.INTEGER, primaryKey: true },
    ItemNo: sequelize.STRING,
    ChkODate: sequelize.DATE,
    DueDate: sequelize.DATE,
    ChkIDate: sequelize.DATE,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

const CItem = db.define(
  "CItem",
  {
    ItemNo: { type: sequelize.STRING, primaryKey: true },
    ItemBib: sequelize.INTEGER,
    ItemClss: sequelize.STRING,
    LocaCode: sequelize.STRING,
    CopyNo: sequelize.INTEGER,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

const ETitBib = db.define(
  "ETitBib",
  {
    TBBibId: { type: sequelize.INTEGER, primaryKey: true },
    TBTitId: sequelize.INTEGER,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

const ETit = db.define(
  "ETit",
  {
    TitId: { type: sequelize.INTEGER, primaryKey: true },
    TitKey: sequelize.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

const EBib = db.define(
  "EBib",
  {
    BibId: { type: sequelize.INTEGER, primaryKey: true },
    CalKey: sequelize.STRING,
    EdiRaw: sequelize.STRING,
    PubRaw: sequelize.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

const EIdn = db.define(
  "EIdn",
  {
    IdnBibId: { type: sequelize.INTEGER, primaryKey: true },
    IdnId: sequelize.INTEGER,
    IdnKey: sequelize.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

const CAccount = db.define(
  "CAccount",
  {
    ID: { type: sequelize.STRING, primaryKey: true },
    ItemNo: sequelize.STRING,
    FineAmnt: sequelize.DECIMAL,
    PaidAmnt: sequelize.DECIMAL,
    PaidDate: sequelize.DATE,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

//History
CMCirculation.belongsTo(CItem, { foreignKey: "ItemNo" });
CItem.hasOne(CMCirculation, { foreignKey: "ItemNo" });

CItem.belongsTo(EBib, { foreignKey: "ItemBib" });
EBib.hasOne(CItem, { foreignKey: "ItemBib" });

CItem.belongsTo(ETitBib, { foreignKey: "ItemBib" });
ETitBib.hasOne(CItem, { foreignKey: "ItemBib" });

EBib.belongsTo(EIdn, { foreignKey: "BibId" });
EIdn.hasOne(EBib, { foreignKey: "BibId" });

ETitBib.belongsTo(ETit, { foreignKey: "TBTitId" });
ETit.hasOne(ETitBib, { foreignKey: "TBTitId" });

//Status
CCirculation.belongsTo(CItem, { foreignKey: "ItemNo" });
CItem.hasOne(CCirculation, { foreignKey: "ItemNo" });

module.exports = {
  CMCirculation,
  CCirculation,
  CItem,
  ETitBib,
  ETit,
  EBib,
  EIdn,
  CAccount,
};
