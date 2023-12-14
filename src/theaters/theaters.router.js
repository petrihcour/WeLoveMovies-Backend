const router = require("express").Router({ mergeParams: true });
const controller = require("./theaters.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// none of this is working. comes back as [object Object]. i think it's the frontend issue

router.route("/")
.get(controller.listTheatersAndMovies)
.all(methodNotAllowed);

module.exports = router;