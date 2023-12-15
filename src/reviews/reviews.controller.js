const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./reviews.service");

async function list(req, res) {
    const reviews = await service.list();
    res.json({ data: reviews })
}

async function reviewExists(req, res, next) {
    const review = await service.read(req.params.reviewId);
    if (review) {
      res.locals.review = review;
      return next();
    }
    next({ status: 404, message: "Review cannot be found." });
  }

async function read(req, res) {
    const { review: data } = res.locals;
    res.json({ data })
}

// need to fix the update function to ensure critics gets added.

async function update(req, res) {
    const updatedReview = {
        ...res.locals.review,
        ...req.body.data, 
        review_id: res.locals.review.review_id,
    };
    const reviews = await service.update(updatedReview);
    const reviewWithCritic = await service.readCritic(updatedReview.review_id);
    res.json({ data: reviewWithCritic });
}

module.exports = {
    list: [asyncErrorBoundary(list)],
    read: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(read)],
    update: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(update)],
}