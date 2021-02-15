const Router = require("express-promise-router");
const { UserModel } = require("../models/UserModel");
const { hash } = require("bcrypt");
const Constants = require("../utils/constants");
const route = Router();

module.exports = route;

route.post("/new-user", async (req, res) => {
	const { username, password } = req.body;

	const hashedPassword = await hash(password, 10);

	const newUser = new UserModel({
		id: genId(),
		username: username,
		password: hashedPassword,
	});
	newUser.save().catch(console.error);

	res.status(Constants.HTTPCodes.Created).send({
		message: "Generated profile successfully",
		user: { username, id: newUser.id },
	});
});

function genId() {
	const useChars =
		"qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890.-_";
	return Array.from(
		{ length: 16 },
		() => useChars[Math.floor(Math.random() * useChars.length)]
	).join("");
}
