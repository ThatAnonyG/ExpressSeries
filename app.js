require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("volleyball");
const { MountRoutes } = require("./src/");

const app = express();
app.use(express.json());
app.use(cors());
app.use(logger);

MountRoutes(app);

app.listen(process.env.PORT, () =>
	console.log(`Server is running at port ${process.env.PORT}!`)
);
