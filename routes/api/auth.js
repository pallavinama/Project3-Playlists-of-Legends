const router = require("express").Router();
const authController = require("../../controllers/authController");

// Matches with "/api/champions"
router.route("/")
//   .get(authController.findAll)
  .post(authController.create);

// Matches with "/api/champions/:id"
// router
  // .route("/:id")
//   .get(authController.findById)
//   .put(authController.update)
//   .delete(authController.remove);

module.exports = router;