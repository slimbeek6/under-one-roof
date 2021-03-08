const db = require("../models");

module.exports = {
    add: function(req, res) {
        db.Expense.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.Expense.findAll()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
};