const router = require("express").Router();
const configController = require("../../controllers/configController");

// Matches with "/api/config"
router.route("/", (req, res) => {
  res.json({
    success: true,
  });
});

router.route("/").get(configController.getTest);

module.exports = router;
