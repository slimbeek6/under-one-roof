const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.User.findAll(
      // { where: {HomeId: req.params.id}
    // }
    )
      .then(foundUsers => res.json(foundUsers))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.User.create(req.body)
      .then(createdUser => res.json(createdUser))
      .catch(err => res.status(422).json(err));
  },
  delete: (req, res) => {
    db.User.destroy({
      where: { id: req.params.id }
    }).then(deletedUser => {
      deletedUser ? res.send(true) : res.send(false);
    }).catch(err => res.status(422).json(err));
  }
}