const knex = require('knex');
const dbConfig = require('../../../knexfile');
const db = knex(dbConfig.development);

module.exports = {
    getDishes,
    addDish,
    getDishById,
    updateDish,
    removeDish,
    getRecipes,
    addRecipe,
    getRecipe,
    updateRecipe,
    removeRecipe,
    getIngredients,
    getIngredientById,
    addIngredient,
    updateIngredient,
    removeIngredient,
    addRecipeIngredient,
    removeRecipeIngredient
};

function getDishes(){
    return db
            .select('*')
            .from('dishes');
}

function addDish(dish){
    return db('dishes')
            .insert(dish);
}

function getDishById(id){ 
    return db
            .select('*')
            .from('dishes')
            .where({ 'id' : id})
            .first();
}

function updateDish(id, dish){
    return db('dishes')
        .where('id', id)
        .update(dish);
}

function removeDish(id){
    return db('dishes')
            .where('id', id)
            .del();
}

function getRecipes(){
    return db
            .select('*')
            .from('recipes');
}

function addRecipe(recipe){ 
    return db('recipes')
            .insert(recipe);
}

function getRecipe(id){
    
}

function updateRecipe(id, recipe){
    return db('recipes')
        .where('id', id)
        .update(recipe);
}

function addRecipeIngredient(recipe, ingredient, quantity){
    return db('recipe_ingredients')
            .insert({
                recipe_id: recipe,
                ingredient_id: ingredient,
                quantity: quantity
            });
}

function removeRecipeIngredient(recipe, ingredient){
    return db('recipe_ingredients')
            .where('recipe_id', recipe)
            .where('ingredient_id', ingredient)
            .del();
}

function removeRecipe(id){
    return db('recipes')
        .where('id', id)
        .del();
}

function getIngredients(){
    return db
            .select('*')
            .from('ingredients');
}

function getIngredientById(id){
    return db
            .select('*')
            .from('ingredients')
            .where({ 'id' : id})
            .first();
}

function addIngredient(ingredient){
    return db('ingredients')
            .insert(ingredient);
}

function updateIngredient(id, ingredient){
    return db('ingredients')
        .where('id', id)
        .update(ingredient);
}

function removeIngredient(id){
    return db('ingredients')
            .where('id', id)
            .del();
}