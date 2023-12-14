const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./movies.service");

async function list(req, res) {

}

module.exports = {
    list: asyncErrorBoundary(list),
}