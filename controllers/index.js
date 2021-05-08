const router = require("express").Router();

const workoutRoutes = require("./workoutRoutes");
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
router.use("/api", workoutRoutes);

module.exports = router;
