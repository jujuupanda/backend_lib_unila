const sequelize = require("sequelize");
const db = require("../database/database");

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

const EBib = db.define(
  "EBib",
  {
    BibId: { type: sequelize.INTEGER, primaryKey: true },
    CallKey: sequelize.STRING,
    EdiRaw: sequelize.STRING,
    PubRaw: sequelize.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

const EAutBib = db.define(
  "EAutBib",
  {
    ABBibId: { type: sequelize.INTEGER, primaryKey: true },
    ABAutId: sequelize.INTEGER,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

const EAut = db.define(
  "EAut",
  {
    AutId: { type: sequelize.INTEGER, primaryKey: true },
    AutKey: sequelize.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

const CItem = db.define(
  "CItem",
  {
    ItemBib: { type: sequelize.INTEGER, primaryKey: true },
    ItemNo: sequelize.STRING,
    ItemClss: sequelize.STRING,
    LocaCode: sequelize.STRING,
    LocaCall: sequelize.STRING,
    ItemStat: sequelize.STRING,
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

module.exports = {
  ETit,
  ETitBib,
  EBib,
  EAutBib,
  EAut,
  CItem,
  EIdn,
};
