const router = require("express").Router({ mergeParams: true });
const controller = require("./theaters.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/")
.get(controller.listTheatersAndMovies)
.all(methodNotAllowed);

module.exports = router;