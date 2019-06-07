
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', tbl => {
    //primarykey called id, autoincrements, integer
    tbl.increments()

    tbl.string('location', 128).notNullable().unique()
  })
};

// how to undo the changes to the schema
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contexts')
};
