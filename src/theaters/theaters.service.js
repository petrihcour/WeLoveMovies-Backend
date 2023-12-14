const knex = require("../db/connection");

function listTheatersAndMovies() {
    return knex("theaters as t")
    .leftJoin("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .leftJoin("movies as m", "mt.movie_id", "m.movie_id")
}

function list() {
    return knex("theaters").select("*");
}

module.exports = {
    list,
    listTheatersAndMovies,
}