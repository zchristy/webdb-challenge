
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {
          location: 'At Home'
        },
        {
          location: 'At Work'
        },
        {
          location: 'At Site'
        }
      ]);
    });
};
