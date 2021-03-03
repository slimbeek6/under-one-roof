const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.Event.findAll({})
    .then(dbEvents => res.json(dbEvents))
    .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.Event.create(req.body)
  },
  destroy: (req, res) => {

  }

}