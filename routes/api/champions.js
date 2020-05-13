const router = require("express").Router();
const championsController = require("../../controllers/championsController");

// Matches with "/api/champions"
router.route("/")
  .get(championsController.findAll)
  .post(championsController.create);

// Matches with "/api/champions/:id"
router
  .route("/:id")
  .get(championsController.findById)
  .put(championsController.update)
  .delete(championsController.remove);

module.exports = router;
