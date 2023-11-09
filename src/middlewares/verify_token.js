const jwt = require("jsonwebtoken");
const model = require("../config/models/define_model");

const verifyToken = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};

module.exports = verifyToken;
