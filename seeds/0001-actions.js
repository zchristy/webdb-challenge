
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          task: 'task1',
          notes: 'some notes',
          isComplete: false,
          project_id: 1
        },
        {
          task: 'task2',
          notes: 'some notes',
          isComplete: false,
          project_id: 2
        },
        {
          task: 'task3',
          notes: 'some notes',
          isComplete: false,
          project_id: 3
        },
        {
          task: 'task4',
          notes: 'some notes',
          isComplete: false,
          project_id: 1
        },
        {
          task: 'task5',
          notes: 'some notes',
          isComplete: false,
          project_id: 2
        },
        {
          task: 'task6',
          notes: 'some notes',
          isComplete: false,
          project_id: 3
        },
        {
          task: 'task7',
          notes: 'some notes',
          isComplete: false,
          project_id: 1
        },
        {
          task: 'task8',
          notes: 'some notes',
          isComplete: false,
          project_id: 2
        },
        {
          task: 'task9',
          notes: 'some notes',
          isComplete: false,
          project_id: 3
        },
        {
          task: 'task10',
          notes: 'some notes',
          isComplete: false,
          project_id: 1
        },
        {
          task: 'task11',
          notes: 'some notes',
          isComplete: false,
          project_id: 2
        },
        {
          task: 'task12',
          notes: 'some notes',
          isComplete: false,
          project_id: 3
        }
      ]);
    });
};
