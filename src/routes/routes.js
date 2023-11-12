const userRoute = require("./user_routes.js");
const authRoute = require("./auth_routes.js");
const bookRoute = require("./book_routes.js");
const testRoute = require("./test_routes.js");
const route = {};

route.userRoute = userRoute;
route.authRoute = authRoute;
route.bookRoute = bookRoute;
route.testRoute = testRoute;

module.exports = route;
