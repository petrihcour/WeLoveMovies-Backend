const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const addCritics = mapProperties({
    critic_id: "critic.critic_id",
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
 
function update(updatedReview) {
    return knex("reviews")
    .select("*")
    .where({ review_id: updatedReview.review_id})
    .update(updatedReview, "*")
    .then((updatedRecords) => {
        if (updatedRecords.length > 0) {
            const updatedReviewWithCritic = addCritics(updatedRecords[0]);
            return updatedReviewWithCritic;
        }
    });
}

module.exports = {
    list,
    read,
    update,
}