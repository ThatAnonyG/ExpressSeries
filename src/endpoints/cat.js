const Router = require("express-promise-router");
const route = Router();

module.exports = route;

route.get("/cat", (req, res) => {
	res.send({ msg: "Meow" });
});
