const router = require("express").Router();
const db = require("../models");

router.get("/workouts", async (req, res) => {
  try {
    const latestWorkout = await db.Workout.find({}).sort({ day: -1 }).limit(1);
    res.status(200).json(latestWorkout);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/workouts/:id", async (req, res) => {
  try {
    const continuingWorkout = await db.Workout.findByIDAndUpdate({});
    console.log(continuingWorkout);
    res.status(200).json(continuingWorkout);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});


module.exports = router;
