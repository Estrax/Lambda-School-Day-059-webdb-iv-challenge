const router = require('express').Router();
const db = require('../database/helpers/helpers');

router.route('/')
    .get(async (req, res) => {
        await db.getRecipes()
            .then(recipes => res.status(200).json(recipes))
            .catch(err => res.status(500).json({ error: "Recipes could not be retrieved."}));
    })
    .post(async (req, res) => {
        await db.addRecipe(req.body)
            .then(recipe => res.status(201).json(recipe))
            .catch(err => res.status(500).json({ error: "Recipe could not be added."}));
    });

router.route('/:id')
    .get(async (req, res) => {
        await db.getRecipe(req.params.id)
            .then(recipe => res.status(200).json(recipe))
            .catch(err => console.log(err))
            // .catch(err => res.status(500).json({ error: "Recipe could not be retrieved."}));
    })
    .put(async (req, res) => {
        await db.updateRecipe(req.params.id, req.body)
            .then(
                recipe => recipe.length === 0
                ? res.status(404).json({ message: "The recipe with the specified ID does not exist." })
                : res.status(200).json(recipe)
            )
            .catch(err => res.status(500).json({ error: "Recipe could not be updated."}));
    })
    .delete(async (req, res) => {
        await db.removeRecipe(req.params.id)
            .then(
                recipe => recipe.length === 0
                ? res.status(404).json({ message: "The recipe with the specified ID does not exist." })
                : res.status(200).json(recipe))
            .catch(err => res.status(500).json({ error: "Recipe could not be deleted." }));
    });

router.route('/:id/ingredients')
    .post(async (req, res) => {
        await db.addRecipeIngredient(req.params.id, req.body.ingredient, req.body.quantity)
                .then(recipeIngredient => res.status(201).json(recipeIngredient))
                .catch(err => res.status(500).json({ error: "Recipe ingredient could not be added."}));
    })
    .delete(async (req, res) => {
        await db.removeRecipeIngredient(req.params.id, req.body.ingredient)
            .then(
                recipeIngredient => recipeIngredient.length === 0
                ? res.status(404).json({ message: "The recipe ingredient with the specified ID does not exist." })
                : res.status(200).json(recipeIngredient))
            .catch(err => res.status(500).json({ error: "Recipe could not be deleted." }));
    });

module.exports = router;