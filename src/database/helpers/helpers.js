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

async function getDishes(){
    return await db
            .select('*')
            .from('dishes');
}

async function addDish(dish){
    return await db('dishes')
            .insert(dish);
}

async function getDishById(id){ 
    return await db
            .select('*')
            .from('dishes')
            .where({ 'id' : id})
            .first();
}

async function updateDish(id, dish){
    return await db('dishes')
        .where('id', id)
        .update(dish);
}

async function removeDish(id){
    return await db('dishes')
            .where('id', id)
            .del();
}

async function getRecipes(){
    return await db
            .select('*')
            .from('recipes');
}

async function addRecipe(recipe){ 
    return await db('recipes')
            .insert(recipe);
}

async function getRecipe(id){
    const ingredients = await getRecipeIngredients(id) || [];
    return await db
            .select('dishes.name as dish', 'recipes.name as recipe', 'recipes.instructions')
            .from('recipes')
            .innerJoin('dishes', 'recipes.dish_id', 'dishes.id')
            .where({ 'recipes.id' : id})
            .first()
            .then(res => {
                return {
                    ...res,
                    ingredients
                }
            });
}

async function updateRecipe(id, recipe){
    return await db('recipes')
        .where('id', id)
        .update(recipe);
}

async function getRecipeIngredients(id){
    return await db
            .select('ingredients.name as ingredient', 'recipe_ingredients.quantity as quantity')
            .from('recipe_ingredients')
            .innerJoin('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
            .where('recipe_id', id);
}

async function addRecipeIngredient(recipe, ingredient, quantity){
    return await db('recipe_ingredients')
            .insert({
                recipe_id: recipe,
                ingredient_id: ingredient,
                quantity: quantity
            });
}

async function removeRecipeIngredient(recipe, ingredient){
    return await db('recipe_ingredients')
            .where('recipe_id', recipe)
            .where('ingredient_id', ingredient)
            .del();
}

async function removeRecipe(id){
    return await db('recipes')
        .where('id', id)
        .del();
}

async function getIngredients(){
    return await db
            .select('*')
            .from('ingredients');
}

async function getIngredientById(id){
    return await db
            .select('*')
            .from('ingredients')
            .where({ 'id' : id})
            .first();
}

async function addIngredient(ingredient){
    return await db('ingredients')
            .insert(ingredient);
}

async function updateIngredient(id, ingredient){
    return await db('ingredients')
        .where('id', id)
        .update(ingredient);
}

async function removeIngredient(id){
    return await db('ingredients')
            .where('id', id)
            .del();
}