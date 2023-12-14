if (process.env.USER) require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const notFound = require("./errors/notFound")
const errorHandler = require("./errors/errorHandler");
const moviesRouter = require("./movies/movies.router");

app.use(cors());
app.use(express.json());

app.use("/movies", moviesRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
