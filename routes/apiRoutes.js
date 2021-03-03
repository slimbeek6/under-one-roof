// Dependencies
// =============================================================
var db = require("../models");
const path = require("path");
const router = require("express").Router();
const expenseController = require("../controllers/expenseController");
const eventController = require("../controllers/eventController");

// API Routes
router
  .route("/api/expenses")
  .post(expenseController.add)
  .get(expenseController.findAll);

// EVENTS
router
  .route("/api/event")
  .post(eventController.create)
  .get(eventController.findAll)
  .delete(eventController.delete)


// send react app
// we need to send the client the compiled index.html file
if (process.env.NODE_ENV === "production") {
    router.use(function (req, res) {
      res.sendFile(path.join(__dirname, "../client/public/index.html"))
    })
}
  
module.exports = router;