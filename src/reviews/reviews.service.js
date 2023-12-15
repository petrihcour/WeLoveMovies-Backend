const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const addCritic = mapProperties({
    preferred_name: "critic.preferred_name",
    surname: "critic.surname",
    organization_name: "critic.organization_name",
});

function list() {
    return knex("reviews")
    .select("*");
}

function read(review_id) {
    return knex("reviews").select("*").where({ review_id }).first();
  }

  // need to fix the update function to ensure critics gets added.

function readCritic(review_id) {
    return knex("reviews as r")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .where({ "r.review_id": review_id })
    .first()
    .then(addCritic);
}
 
function update(updatedReview) {
    return knex("reviews")
    .select("*")
    .where({ review_id: updatedReview.review_id})
    .update(updatedReview, "*")
    .then((updatedRecords) => updatedRecords[0]);
}

module.exports = {
    list,
    read,
    readCritic,
    update,
}