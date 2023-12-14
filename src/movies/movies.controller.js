const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./movies.service");

async function list(req, res) {
    const movies = await service.list();
    res.json({ data: movies });
}

module.exports = {
    list: asyncErrorBoundary(list),
}