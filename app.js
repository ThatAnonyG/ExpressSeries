require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("volleyball");

const app = express();
app.use(express.json());
app.use(cors());
app.use(logger);

app.get("/hello", (req, res) => {
  res.send({ data: "Hello World" });
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running at port ${process.env.PORT}!`)
);
