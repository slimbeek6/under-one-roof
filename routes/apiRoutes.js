// Dependencies
// =============================================================
var db = require("../models");
const path = require("path");
const router = require("express").Router();
const expenseController = require("../controllers/expenseController");

// API Routes
router
  .route("/api/expenses")
  .post(expenseController.add)
  .get(expenseController.findAll);

// EVENTS
// =============================================================
// Get all events, include the host's name.
router.route("/api/event", (req, res) => {
  db.Event.findAll({
    include: [
      {
        model: db.User,
        as: "host",
        attributes: ["firstname"]
      }
    ],
  }).then(event => {
      res.json(event)
  }).catch(err => {
      console.error(err)
      res.send(false)
  })
})

// Post new event.
router.route("/api/event", (req, res) => {
  db.Event.create(req.body)
  .then(eventData => {
      db.UserEvent.create({
        UserId: req.body.hostId,
        EventId: eventData.id
      }).then(() => {
        res.send(true)
      }).catch(err => {
        console.error(err);
        res.send(false);
      })
  }).catch(err => {
      console.error(err)
      res.send(false)
  })
})
// route used to get 
router.route("/api/event/:id", (req, res) => {
  db.Event.update(req.body, { where: { id: req.params.id } })
    .then(() => {
      res.send(true);
    }).catch(err => {
      console.log(err);
      res.send(false);
    })
})

// route used to delete an event
router.route("/api/event/:id", (req, res) => {
  db.Event.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.send(true)
    }).catch(err => {
      console.log(err);
      res.send(false);
    })
})


// send react app
// we need to send the client the compiled index.html file
if (process.env.NODE_ENV === "production") {
    router.use(function (req, res) {
      res.sendFile(path.join(__dirname, "../client/public/index.html"))
    })
}
  
module.exports = router;