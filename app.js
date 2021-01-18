require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("volleyball");
const { connect } = require("mongoose");
const { MountRoutes } = require("./src/");

const app = express();
app.use(express.json());
app.use(cors());
app.use(logger);

connect(
	process.env.URI,
	{ useUnifiedTopology: true, useNewUrlParser: true },
	(err) => {
		if (err) throw err;
		console.log("Connected to database!");
	}
);

MountRoutes(app);

app.listen(process.env.PORT, () =>
	console.log(`Server is running at port ${process.env.PORT}!`)
);
