
exports.seed = function(knex, Promise) {
  return knex('recipes').truncate()
    .then(function () {
      return knex('recipes').insert([
        {id: 1, name: 'Mexican Chicken Burger', instructions: 'Cook.', dish_id: 1},
        {id: 2, name: 'Bhaji Burger', instructions: 'Cook.', dish_id: 1},
        {id: 3, name: 'Chicken Katsu Curry Burger', instructions: 'Cook.', dish_id: 1},
        {id: 4, name: 'Lamb Vindaloo', instructions: 'Cook.', dish_id: 2},
        {id: 5, name: 'Chicken Madras', instructions: 'Cook.', dish_id: 2},
        {id: 6, name: 'Thai Red Curry', instructions: 'Cook.', dish_id: 2},
        {id: 7, name: 'Baked Chilli and Jacket Potatoes', instructions: 'Cook.', dish_id: 3},
        {id: 8, name: 'Spicy Turkey Sweet Potatoes', instructions: 'Cook.', dish_id: 3},
        {id: 9, name: 'Broccoli Baked Potatoes', instructions: 'Cook.', dish_id: 3}
      ]);
    });
};