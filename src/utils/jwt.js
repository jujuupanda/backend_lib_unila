const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXP = process.env.JWT_EXP;

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXP,
  });

  return token;
};

module.exports = {
  createJWT,
};
