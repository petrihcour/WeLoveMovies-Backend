const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./movies.service");

async function list(req, res) {
  const { is_showing } = req.query;
  if (is_showing === "true") {
    const movies = await service.listMovieShowings();
    res.json({ data: movies });
  } else {
    const movies = await service.list();
    res.json({ data: movies });
  }
}

async function movieExists(req, res, next) {
  const movie = await service.read(req.params.movieId);
  if (movie) {
    res.locals.movie = movie;
    return next();
  }
  next({ status: 404, message: "Movie cannot be found." });
}

async function read(req, res) {
  const { movie: data } = res.locals;
  res.json({ data });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  read: [asyncErrorBoundary(movieExists), asyncErrorBoundary(read)],
};
