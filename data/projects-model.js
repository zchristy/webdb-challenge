const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  findActionsByProject,
  add,
  update,
  remove
};

function find() {
  return db('projects')
}

function findById(id) {
  return db('projects')
  .where({ id })
  .first()
}

function findActionsByProject(id) {
  return db('actions')
  .select('actions.id', 'actions.task', 'actions.notes', 'actions.isComplete')
  .where({ project_id: id });
}

function add(project) {
  return db('projects')
  .insert(project, 'id')
}

function update(id, changes) {
  return db('project')
  .where({ id })
  .update(changes, '*');
}

function remove(id) {
  return db('projects')
  .where({ id })
  .del();
}
