const router = require("express").Router();
const configRoute = require("./config");
// const championRoutes = require("./champions");

// Book routes
router.use("/config", configRoute);
// router.use("/champions", championRoutes);

module.exports = router;