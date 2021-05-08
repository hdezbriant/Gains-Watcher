const mongoose = require("mongoose");

const { Schema } = mongoose;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        enum: {
          values: ["resistance", "cardio"],
          message: "{VALUE} is not supported",
        },
        required: [true, "Type of workout is required!"],
      },
      name: {
        type: String,
        trim: true,
        required: [true, "Name required!"],
      },
      duration: { type: Number, required: [true, "duration required!"] },
      weight: { type: Number },
      reps: { type: Number },
      sets: { type: Number },
      distance: { type: Number },
    },
  ],
});

// need aggregate function for total duration

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
