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
    removeIngredient
};

function getDishes(){
    return db('dishes');
}

function addDish(dish){
    return db('dishes')
            .insert(dish);
}

function getDishById(id){ 
    return db('dishes')
            .where({ 'id' : id});
}

function updateDish(id, dish){

}

function removeDish(id){

}

function getRecipes(){
    return db('recipes');
}

function addRecipe(recipe){ 
    return db('recipes')
            .insert(recipe);
}

function getRecipe(id){

}

function updateRecipe(id, recipe){

}

function removeRecipe(id){

}

function getIngredients(){
    return db('ingredients');
}

function getIngredientById(id){
    return db('ingredients')
            .where({'id': id });
}

function addIngredient(ingredient){
    return db('ingredients')
            .insert(ingredient);
}

function updateIngredient(id, ingredient){

}

function removeIngredient(id){

}