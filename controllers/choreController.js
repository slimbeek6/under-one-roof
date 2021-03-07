const db = require("../models");

module.exports = {
    add: function(req, res) {
        db.Chore.create(req, res)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.Chore.findAll()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findFive: function (req, res) {
        db.Chore.findAll({
            limit: 5
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};