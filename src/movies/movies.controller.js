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

module.exports = {
  list: [asyncErrorBoundary(list)],
};
