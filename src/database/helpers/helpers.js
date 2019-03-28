const knex = require('knex');
const dbConfig = require('../../../knexfile');
const db = knex(dbConfig.development);

module.exports = {
    getDishes,
    addDish,
    getDishById,
    getRecipes,
    addRecipe
  };

function getDishes(){
    return db('dishes');
}

function addDish(dish){
    return db('dishes').insert(dish);
}

function getDishById(id){ 
    return db('dishes').where({ 'id' : id});
}

function getRecipes(){
    return db('recipes');
}

function addRecipe(recipe){ 
    return db('recipes').insert(recipe);
}