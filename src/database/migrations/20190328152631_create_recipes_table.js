const { dropTable, fkey } = require('../helpers/db');

exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', table => {
            table.increments();
            table.string('name').notNullable();
            table.text('instructions').notNullable();
            fkey(table, 'dish_id', 'dishes');
        });
};

exports.down = exports.down = dropTable('recipes');
