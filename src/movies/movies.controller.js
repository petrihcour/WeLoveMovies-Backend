const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./movies.service");

// async function listMovieShowings(req, res, next) {
//     const movieShowing = req.query.is_showing;
//     if (movieShowing === "true") {
//         const activeMovies = await service.listMovieShowings();
//         // console.log("Response for listMovieShowings:", activeMovies);

//         return res.json({ data: activeMovies });
//     }
//     next({ status: 404, message: "There are no movies showing in theaters."})
// }

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
