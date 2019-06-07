
exports.up = function(knex, Promise) {
  return knex.schema.createTable('action_contexts', tbl => {
    //primarykey called id, autoincrements, integer
    tbl.increments()

    // foreign key for recipe id
    tbl.integer('action_id').unsigned().notNullable()
    tbl.foreign('action_id').references('action.id').onDelete('RESTRICT').onUpdate('CASCADE')

    // foreign key for ingredients id
    tbl.integer('context_id').unsigned().notNullable()
    tbl.foreign('context_id').references('context.id').onDelete('RESTRICT').onUpdate('CASCADE')
  })
};

// how to undo the changes to the schema
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('action_contexts')
};
