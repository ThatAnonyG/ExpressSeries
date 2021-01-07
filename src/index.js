const fs = require("fs");

module.exports.MountRoutes = (app) => {
	const endpoints = fs.readdirSync(__dirname + "/endpoints/");
	for (const endpoint of endpoints) {
		const route = require(`./endpoints/${endpoint}`);
		app.use(route);
	}
};
