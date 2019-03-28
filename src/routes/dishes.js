const router = require('express').Router();
const db = require('../database/helpers/helpers');

router.route('/')
    .get(async (req, res) => {
        await db.getDishes()
            .then(dishes => res.status(200).json(dishes))
            .catch(err => res.status(500).json({ error: "Dishes could not be retrieved."}));
    })
    .post(async (req, res) => {
        await db.addDish(req.body)
            .then(dish => res.status(201).json(dish))
            .catch(err => res.status(500).json({ error: "Dish could not be added."}));
    });

router.route('/:id')
    .get(async (req, res) => {
        await db.getDishById(req.params.id)
            .then(dish => res.status(200).json(dish))
            .catch(err => res.status(500).json({ error: "Dish could not be retrieved."}));
    })
    .put(async (req, res) => {
        await db.updateDish(req.params.id, req.body)
            .then(
                dish => dish.length === 0
                ? res.status(404).json({ message: "The dish with the specified ID does not exist." })
                : res.status(200).json(dish)
            )
            .catch(err => res.status(500).json({ error: "Dish could not be updated."}));
    })
    .delete(async (req, res) => {
        await db.removeDish(req.params.id)
            .then(
                dish => dish.length === 0
                ? res.status(404).json({ message: "The dish with the specified ID does not exist." })
                : res.status(200).json(dish))
            .catch(err => res.status(500).json({ error: "Dish could not be deleted." }));
    });

module.exports = router;