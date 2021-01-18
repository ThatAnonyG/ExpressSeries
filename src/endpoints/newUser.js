const Router = require("express-promise-router");
const { UserModel } = require("../models/UserModel");
const route = Router();

module.exports = route;

route.post("/new-user", (req, res) => {
	const body = req.body;

	const newUser = new UserModel({
		id: body.id,
		username: body.username,
		password: body.password,
	});
	newUser.save().catch(console.error);

	res.send("OK");
});
