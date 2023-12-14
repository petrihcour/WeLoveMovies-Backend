const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const theatersService = require("./theaters.service");
const moviesService = require("../movies/movies.service");
const reduceProperties = require("../utils/reduce-properties");
const mapProperties = require("../utils/map-properties");

// const addMovie = mapProperties({
//     movie_id: "movie.movie_id",
//     title: "movie.runtime_in_minutes",
//     rating: "movie.rating",
//     description: "movie.description",
//     image_url: "movie.image_url",
// });

const reduceMovies = reduceProperties("theater_id", {
    movie_id: ["movies", null, "movie_id"],
    title: ["movies", null, "title"],
    rating: ["movies", null, "rating"],
    runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
    description: ["movies", null, "description"],
    image_url: ["movies", null, "image_url"],
    is_showing: ["movies", null, "is_showing"],
});

async function listTheatersAndMovies(req, res) {
    const theaters = await theatersService.listTheatersAndMovies();
    const movies = await moviesService.list();

    const data = reduceMovies(theaters, movies);
    res.json({ data });
}

async function list(req, res) {
    const data = await theatersService.list();
    res.json({ data });
}

module.exports = {
    list: [asyncErrorBoundary(list)],
    listTheatersAndMovies: [asyncErrorBoundary(listTheatersAndMovies)],
}