const router = require("express").Router();
const configRoute = require("./config");
// const userRoutes = require("./users");
const championRoutes = require("./champions");
const spotifyRoutes = require("./spotify.js");
// Book routes
router.use("/config", configRoute);
// router.use("/users", userRoutes);
router.use("/champions", championRoutes);
router.use("/spotify", spotifyRoutes);

module.exports = router;