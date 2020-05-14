const router = require("express").Router();
const spotifyController = require("../../controllers/spotifyController");

// Matches with "/api/config"
router.route("/", (req, res) => {
  res.json({
    success: true,
  });
});

router.route("/").post(spotifyController.getToken);

module.exports = router;
