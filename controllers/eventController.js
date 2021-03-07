const db = require('../models');
const dayjs = require('dayjs');

const dateCutOff= dayjs().subtract(1, 'day').format('YYYY-MM-DD');

module.exports = {
  findAll: (req, res) => {
    db.Event.findAll({
      // where: {
      //   date: {
      //     [Op.gt]: dayjs().subtract(1, 'day').format('YYYY-MM-DD')
      //   }
      // }
    })
      .then(foundEvents => res.json(foundEvents))
      .catch(err => res.status(422).json(err));
  },
  // update: (req, res) => {
  //   db.Event.update(req.body, {
  //     where : { id: req.params.id }
  //   }).then(updatedEvent => res.json(updatedEvent))
  //   .catch(err => console.error(err))
  // },
  create: (req, res) => {
    db.Event.create(req.body)
      .then(createdEvent => res.json(createdEvent))
      .catch(err => res.status(422).json(err));
  },
  delete: (req, res) => {
    db.Event.destroy({
      where: { id: req.params.id }
    }).then(deletedEvent => {
      deletedEvent ? res.send(true) : res.send(false);
    }).catch(err => res.status(422).json(err));
  }
}