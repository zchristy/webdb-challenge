
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Project1',
          description: 'some description',
          isComplete: false
        },
        {
          name: 'Project2',
          description: 'some description',
          isComplete: false
        },
        {
          name: 'Project3',
          description: 'some description',
          isComplete: false
        }
      ]);
    });
};
