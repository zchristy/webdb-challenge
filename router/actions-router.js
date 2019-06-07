const express = require('express');

const db = require('../data/actions-model.js')

const mw = require('../middleware/middleware.js')

const router = express.Router();

router.post('/', mw.validateAction, (req, res) => {
  db.add(req.action)
  .then(id => {
    res.status(200).json(id)
  })
  .catch(err => {
    res.status(500).json(err.message)
  })
});

router.get('/', (req, res) => {
  db.find()
  .then(actions => {
    res.status(200).json(actions)
  })
  .catch(err => {
    res.status(500).json(err.message)
  })
});

router.get('/:id', mw.validateActionId, (req, res) => {

  db.findById(req.actionId)
  .then(action => {
    db.findContextsByAction(req.actionId)
    .then(context => {
      const actionObj = action
      actionObj.context = context
      res.status(200).json(action)
    })
    .catch(err => {
      res.status(500).json(err.message)
    })
  })
  .catch(err => {
    res.status(500).json(err.message)
  })
});

router.put('/:id', mw.validateActionId, mw.validateAction, (req, res) => {
  db.update(req.actionId, req.action)
  .then(action => {
    res.status(200).json(action)
  })
  .catch(err => {
    res.status(500).json(err.message)
  })
});

router.delete('/:id', mw.validateActionId, (req, res) => {
  db.remove(req.actionId)
  .then(action => {
    res.status(200).json({message: "Action succesfully Deleted"})
  })
  .catch(err => {
    res.status(500).json(err.message)
  })
});

module.exports = router
