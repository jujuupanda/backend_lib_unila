const user = require("./user_define");
const book = require("./book_define");
const circulation = require("./circulation_define");

const model = {};

model.user = user;
model.book = book;
model.circulation = circulation;

module.exports = model;
