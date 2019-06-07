const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
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

// function getRecipesByDish(id) {
//   return db('recipe')
//   .where({ dish_id: id });
// }

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

// function getIngredientsByRecipe(id) {
//   return db('recipe_ingredients')
//   .join('ingredients', 'recipe_ingredients.ingredients_id', 'ingredients.id')
//   .select('ingredients.id', 'ingredients.name as ingredient', 'recipe_ingredients.quantity')
//   .where({ recipe_id: id });
// }
