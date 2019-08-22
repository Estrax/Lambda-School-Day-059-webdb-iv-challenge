const router = require('express').Router();
const db = require('../database/helpers/helpers');

router.route('/')
    .get(async (req, res) => {
        await db.getIngredients()
            .then(ingredients => res.status(200).json(ingredients))
            .catch(err => res.status(500).json({ error: "Ingredients could not be retrieved."}));
    })
    .post(async (req, res) => {
        await db.addIngredient(req.body)
            .then(ingredient => res.status(201).json(ingredient))
            .catch(err => res.status(500).json({ error: "Ingredient could not be added."}));
    });

router.route('/:id')
    .get(async (req, res) => {
        await db.getIngredientById(req.params.id)
            .then(ingredient => res.status(200).json(ingredient))
            .catch(err => res.status(500).json({ error: "Ingredient could not be retrieved."}));
    })
    .put(async (req, res) => {
        await db.updateIngredient(req.params.id, req.body)
            .then(
                ingredient => ingredient.length === 0
                ? res.status(404).json({ message: "The ingredient with the specified ID does not exist." })
                : res.status(200).json(ingredient)
            )
            .catch(err => res.status(500).json({ error: "Ingredient could not be updated."}));
    })
    .delete(async (req, res) => {
        await db.removeIngredient(req.params.id)
            .then(
                ingredient => ingredient.length === 0
                ? res.status(404).json({ message: "The ingredient with the specified ID does not exist." })
                : res.status(200).json(ingredient))
            .catch(err => res.status(500).json({ error: "Ingredient could not be deleted." }));
    });

module.exports = router;