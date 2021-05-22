const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            name: {
                type : String,
                trim : true,
                required : 'Exercise name is required.'
            },
            type : {
                type: String,
                trim : true,
                required : "Exercise type is required."
            },
            distance : {
                type : Number
            },
            duration : {
                type : Number,
                required : "Exercise duration is required."
            },
            weight: {
                type : Number
            },
            sets: {
                type : Number
            },
            reps: {
                type : Number
            }
        }
    ]
});

const Workout = Mongoose.model('Workout', WorkoutSchema);
module.exports = Workout;