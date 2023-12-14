const knex = require("../db/connection");

function list() {
    return knex("movies").select("*");
}

function listMovieShowings() {
    return knex("movies as m")
    .distinct("m.*")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .where({ "mt.is_showing": true });
}

module.exports = {
    list,
    listMovieShowings,
}