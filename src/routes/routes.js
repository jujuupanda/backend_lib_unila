const userRoute = require("./user_routes.js");
const authRoute = require("./auth_routes.js");
const bookRoute = require("./book_routes.js");
const route = {};

route.userRoute = userRoute;
route.authRoute = authRoute;
route.bookRoute = bookRoute;

module.exports = route;
