
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
    //primarykey called id, autoincrements, integer
    tbl.increments()

    // a varchar called name, 128, unique, not null
    tbl.string('name', 128).notNullable().unique()

    tbl.text('description').notNullable()

    tbl.boolean('isComplete').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
