const { dropTable } = require('../helpers/db');

exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', table => {
        table.increments();
        table.string('name').notNullable();
    });
};

exports.down = exports.down = dropTable('ingredients');