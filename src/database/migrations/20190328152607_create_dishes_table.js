const { dropTable } = require('../helpers/db');

exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', table => {
        table.increments();
        table.string('name').notNullable();
    });
};

exports.down = dropTable('dishes');
