const express = require('express');

const db = require('../data/projects-model.js')

const mw = require('../middleware/middleware.js')

const router = express.Router();

router.post('/', mw.validateProject, (req, res) => {
  db.add(req.project)
  .then(id => {
    res.status(200).json(id)
  })
  .catch(err => {
    res.status(500).json(err.message)
  })
});

router.get('/', (req, res) => {
  db.find()
  .then(projects => {
    res.status(200).json(projects)
  })
  .catch(err => {
    res.status(500).json(err.message)
  })
});

router.get('/:id', mw.validateProjectId, (req, res) => {

  db.findById(req.projectId)
  .then(project => {

    db.findActionsByProject(req.projectId)
    .then(actions => {

      const projectObj = project
      projectObj.actions = actions
      res.status(200).json(project)

    })

    .catch(err => {
      res.status(500).json(err.message)
    })
  })

  .catch(err => {
    res.status(500).json(err.message)
  })
});

router.put('/:id', mw.validateProjectId, mw.validateProject, (req, res) => {
  db.update(req.projectId, req.project)
  .then(project => {
    res.status(200).json(project)
  })
  .catch(err => {
    res.status(500).json(err.message)
  })
});

router.delete('/:id', mw.validateProjectId, (req, res) => {
  db.remove(req.projectId)
  .then(project => {
    res.status(200).json({message: "Project succesfully Deleted"})
  })
  .catch(err => {
    res.status(500).json(err.message)
  })
});

module.exports = router
