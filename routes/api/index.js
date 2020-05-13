const router = require("express").Router();
const configRoute = require("./config");
const spotifyRoutes = require("./spotify.js");
// const championRoutes = require("./champions");

// Book routes
router.use("/config", configRoute);
// router.use("/champions", championRoutes);
router.use("/spotify", spotifyRoutes)

module.exports = router;