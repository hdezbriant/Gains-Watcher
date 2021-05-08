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

// router.post("/workouts", async (req, res) => {
//   try {
//   } catch (err) {}
// });

router.get("/workouts/range", async (req, res) => {
  try {
    const workoutWeek = await db.Workout.find({}).sort({day: -1}).limit(7);
    res.status(200).json(workoutWeek);
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;
