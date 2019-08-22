
exports.seed = function(knex, Promise) {
  return knex('dishes').truncate()
    .then(function () {
      return knex('dishes').insert([
        {id: 1, name: 'Burger'},
        {id: 2, name: 'Curry'},
        {id: 3, name: 'Baked Potato'}
      ]);
    });
};
