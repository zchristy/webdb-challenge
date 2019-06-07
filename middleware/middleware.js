const projectsDb = require('../data/projects-model.js')
const actionsDb = require('../data/actions-model.js')

module.exports = {
  validateProjectId,
  validateProject,
  validateActionId,
  validateAction,
};

//custom middleware

function validateProjectId(req, res, next) {
  const { id } = req.params

    projectsDb.findById(id)
    .then(project => {
      if(project) {
        req.projectId = project.id
        next()
      } else {
        res.status(400).json({ message: "invalid project id" })
      }
    })
    .catch(err => {
      res.status(500).json({error: "Internal Server Error"})
    })

};

function validateProject(req, res, next) {
  const post = req.body
  const { name, description, isComplete } = req.body

  if(Object.keys(post).length) {
    if(name && description && isComplete) {
      req.project = {
        name: name,
        description: description,
        isComplete: isComplete
      }
      next()
    } else {
      res.status(400).json({ message: "missing required field or fields" })
    }
  } else {
    res.status(400).json({ message: "missing project data" })
  }

};

function validateActionId(req, res, next) {
  const { id } = req.params

    actionsDb.findById(id)
    .then(action => {
      if(action) {
        req.actionId = action.id
        next()
      } else {
        res.status(400).json({ message: "invalid action id" })
      }
    })
    .catch(err => {
      res.status(500).json({error: "Internal Server Error"})
    })

};

function validateAction(req, res, next) {
  const post = req.body
  const { task, notes, isComplete, project_id } = req.body

  if(Object.keys(post).length) {
    if(name && instructions && dish_id) {
      req.action = {
        task: task,
        notes: notes,
        isComplete: isComplete,
        project_id: project_id
      }
      next()
    } else {
      res.status(400).json({ message: "missing required name field or fields" })
    }
  } else {
    res.status(400).json({ message: "missing action data" })
  }
};
