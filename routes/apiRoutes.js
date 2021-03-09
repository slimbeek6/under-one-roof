// Dependencies
// =============================================================
var db = require("../models");
const path = require("path");
const router = require("express").Router();
const expenseController = require("../controllers/expenseController");
const choreController = require("../controllers/choreController");
// const verifySignUp = require("../config/middleware/verifySignUp");
const { verifySignUp } = require("../config/middleware");
const authController = require("../controllers/auth.controller");
const eventController = require("../controllers/eventController");

// API Routes
// =============================================================

// Expenses
router
  .route("/api/expenses")
  .post(expenseController.add);
  

router
  .route("/api/expenses/:id")
  .put(expenseController.edit)
  .get(expenseController.findAll)
  .delete(expenseController.delete);


// Chores
router
  .route("/api/chores")
  .get(choreController.findAll);

router
  .route("/api/chores/new/")
  .post(choreController.add);

// Authentication
router.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router
  .route("/api/auth/signup")
  .post(
  [
    verifySignUp.checkDuplicateUsernameOrEmail
  ],
  authController.signup);

router
  .route("/api/auth/signin")
  .post(authController.signin);


// EVENTS
router
  .route("/api/events")
  .post(eventController.create);
  
router 
  .route("/api/events/:id")
  .delete(eventController.delete)
  .get(eventController.findAll);

// send react app
// we need to send the client the compiled index.html file
if (process.env.NODE_ENV === "production") {
    router.use(function (req, res) {
      res.sendFile(path.join(__dirname, "../client/public/index.html"))
    })
}
  
module.exports = router;