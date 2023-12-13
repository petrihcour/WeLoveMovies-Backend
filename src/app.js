if (process.env.USER) require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const notFound = require("./errors/notFound")
const errorHandler = require("./errors/errorHandler");

app.use(cors());
app.use(express.json());

app.use(notFound);
app.use(errorHandler);

module.exports = app;
