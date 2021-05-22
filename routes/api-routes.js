const router = require('express').Router();
const db = require('../models');

router.get('/api/workouts', (req, res) => {
    db.Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration"
            }
        }
    }])
        .then((Data) => {
            res.json(Data);
        })
        .catch((err) => {
            res.json(err)
        });
});

router.get('/api/workouts/range', (req, res) => {
    db.Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration"
            }
        }
    }])
        .then((Data) => {
            res.json(Data);
        })
        .catch((err) => {
            res.json(err)
        });
});

router.post('/api/workouts', ({body}, res) => {
    db.Workout.create(body)
        .then((Data) => {
            res.json(Data);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put('/api/workouts/:id', ({body, params}, res) => {
    db.Workout.findByIdAndUpdate(params.id, {$push:{exercises: body}})
        .then((Data) => {
            res.json(Data);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;