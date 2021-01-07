const Router = require("express-promise-router");
const route = Router();

module.exports = route;

route.get("/hello", (req, res) => {
	res.send({ data: "Hello World" });
});
