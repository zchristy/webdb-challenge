const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  findContextsByAction,
  add,
  update,
  remove
};

function find() {
  return db('actions')
}

function findById(id) {
  return db('actions')
  .where({ id })
  .first()
}

function findContextsByAction(id) {
  return db('action_contexts')
  .join('contexts', 'action_contexts.context_id', 'contexts.id')
  .select('contexts.id', 'contexts.location')
  .where({ action_id: id });
}

function add(action) {
  return db('actions')
  .insert(action, 'id')
}

function update(id, changes) {
  return db('actions')
  .where({ id })
  .update(changes, '*');
}

function remove(id) {
  return db('actions')
  .where({ id })
  .del();
}
