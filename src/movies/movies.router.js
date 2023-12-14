const router = require("express");
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/")
.get(controller.list)
.all(methodNotAllowed);

module.exports = router;