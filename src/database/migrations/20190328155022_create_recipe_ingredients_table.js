const { dropTable, fkey } = require('../helpers/db');

exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_ingredients', table => {
            table.increments();
            fkey(table, 'ingredient_id', 'ingredients');
            table.float('quantity').notNullable();
            fkey(table, 'recipe_id', 'recipes');
        });
};

exports.down = exports.down = dropTable('recipe_ingredients');
