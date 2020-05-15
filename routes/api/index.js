const router = require("express").Router();
const configRoute = require("./config");
const userRoutes = require("./users");
const championRoutes = require("./champions");
const spotifyRoutes = require("./spotify.js");
const authRoutes = require("./auth.js");

router.use("/config", configRoute);
router.use("/users", userRoutes);
router.use("/champions", championRoutes);
router.use("/spotify", spotifyRoutes);
router.use("/auth", authRoutes);

module.exports = router;