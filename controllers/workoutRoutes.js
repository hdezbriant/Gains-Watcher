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
    const continuingWorkout = await db.Workout.findByIdAndUpdate(
      req.params.id,
      { exercises: req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json(continuingWorkout);
  } catch (err) {
    res.status(500);
  }
});

router.post("/workouts", async (req, res) => {
  try {
      const newWorkout = await db.Workout.create(req.body);
      console.log(newWorkout);
      res.status(200).json(newWorkout);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get("/workouts/range", async (req, res) => {
  try {
    const workoutWeek = await db.Workout.find({}).sort({ day: -1 }).limit(7);
    res.status(200).json(workoutWeek);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
