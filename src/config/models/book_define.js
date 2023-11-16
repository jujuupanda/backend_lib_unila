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
    CalKey: sequelize.STRING,
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

const CItem = db.define(
  "CItem",
  {
    ItemBib: { type: sequelize.INTEGER, primaryKey: true },
    ItemNo: sequelize.STRING,
    ItemClss: sequelize.STRING,
    LocaCode: sequelize.STRING,
    LocaCall: sequelize.STRING,
    CopyNo: sequelize.INTEGER,
    ItemStat: sequelize.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

// ETitBib.belongsTo(ETit, { foreignKey: "TBTitId" });
// ETit.hasOne(ETitBib, { foreignKey: "TBTitId" });

// EBib.belongsTo(ETitBib, { foreignKey: "BibId" });
// ETitBib.hasOne(EBib, { foreignKey: "BibId" });

// EBib.belongsTo(EAutBib, { foreignKey: "BibId" });
// EAutBib.hasMany(EBib, { foreignKey: "BibId" });

// EAutBib.belongsTo(EAut, { foreignKey: "ABBibId" });
// EAut.hasMany(EAutBib, { foreignKey: "ABBibId" });

// EIdn.belongsTo(EBib, { foreignKey: "IdnBibId" });
// EBib.hasOne(EIdn, { foreignKey: "IdnBibId" });

// EBib.belongsTo(CItem, { foreignKey: "BibId" });
// CItem.hasMany(EBib, { foreignKey: "BibId" });

//Batas Bener tapi error di bagian aut (kadang)

ETitBib.belongsTo(ETit, { foreignKey: "TBTitId" }); //Search BibId
ETit.hasOne(ETitBib, { foreignKey: "TBTitId" });

EBib.belongsTo(ETitBib, { foreignKey: "BibId" }); //Seach Bibilograph
ETitBib.hasOne(EBib, { foreignKey: "BibId" });

EAutBib.belongsTo(EBib, { foreignKey: "ABBibId" }); //Search AuthId From BibId
EBib.hasOne(EAutBib, { foreignKey: "ABBibId" });

EAutBib.belongsTo(EAut, { foreignKey: "ABAutId" }); //Search Auth from AuthId
EAut.hasOne(EAutBib, { foreignKey: "ABAutId" });

EIdn.belongsTo(EBib, { foreignKey: "IdnBibId" }); //Search IDN from BibId
EBib.hasOne(EIdn, { foreignKey: "IdnBibId" });

EBib.belongsTo(CItem, { foreignKey: "BibId" }); //Seach Item from Bib Id
CItem.hasMany(EBib, { foreignKey: "BibId" });

module.exports = {
  ETit,
  ETitBib,
  EBib,
  EAutBib,
  EAut,
  CItem,
  EIdn,
};
