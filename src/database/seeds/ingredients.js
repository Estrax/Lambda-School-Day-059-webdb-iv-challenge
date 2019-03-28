
exports.seed = function(knex, Promise) {
  return knex('ingredients').truncate()
    .then(function () {
      return knex('ingredients').insert([
        {id: 1, name: 'Chicken Breast'},
        {id: 2, name: 'Chipotle Paste'},
        {id: 3, name: 'Brioche Bun'},
        {id: 4, name: 'Lamb Mince'},
        {id: 5, name: 'Garam Masala'},
        {id: 6, name: 'Toasted Seasame Oil'},
        {id: 7, name: 'Lamb Neck Filled'},
        {id: 8, name: 'Onion'},
        {id: 9, name: 'Garlic'},
        {id: 10, name: 'Ginger'},
        {id: 11, name: 'Ground Cumin'},
        {id: 12, name: 'Hot Chili'},
        {id: 13, name: 'Potato'},
        {id: 14, name: 'Turkey'},
        {id: 15, name: 'Broccoli'},
        {id: 16, name: 'Cheddar'}
      ]);
    });
};
