
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
    //primarykey called id, autoincrements, integer
    tbl.increments()

    // a varchar called name, 128, unique, not null
    tbl.string('task', 128).notNullable().unique()

    tbl.text('notes').notNullable()

    tbl.boolean('isComplete').notNullable()

    tbl.integer('project_id').unsigned().notNullable()
    tbl.foreign('project_id').references('project.id').onDelete('RESTRICT').onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
};
