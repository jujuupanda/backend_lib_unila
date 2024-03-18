const sequelize = require("sequelize");
const db = require("../database/database");

const user = db.define(
  "CPatron",
  {
    ID: {
      type: sequelize.STRING,
      primaryKey: true,
    },
    FName: sequelize.STRING,
    LName: sequelize.STRING,
    Type: sequelize.STRING,
    Addr: sequelize.STRING,
    EMail: sequelize.STRING,
    Phone: sequelize.STRING,
    Remark: sequelize.STRING,
    AlertMsg: sequelize.STRING,
    Pwd: sequelize.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = user;
